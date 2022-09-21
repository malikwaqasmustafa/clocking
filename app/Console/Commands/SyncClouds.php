<?php

namespace App\Console\Commands;

use App\Models\ClockingRecord;
use App\Models\Settings;
use App\Models\SyncHistory;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use JsonException;

class SyncClouds extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync:clouds';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command will push the saved local database data to the live connected clouds';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        set_time_limit(0);
        ini_set("memory_limit", -1);

        $terminals = Settings::all();

        foreach ($terminals as $terminal) {
            $deviceIp = $terminal->device_ip;
            $companyId = $terminal->company_id;
            $endpoint = $terminal->api_url;
            $serialNumber = $terminal->serial_number;

            if(empty($serialNumber)){
                $this->info("serial number can't be null");
                break;
            }

            $this->info("device ip : {$deviceIp}");
            $this->info("serial Number : {$serialNumber}");
            $this->info("EndPoint : {$endpoint}");
            $this->info("Company Id : {$companyId}");

            $syncHistory = SyncHistory::where('serial_number', $serialNumber)->orderBy('id', 'desc')->first();

            if (is_null($syncHistory)) {
                $attendanceLogs = ClockingRecord::all();
            } else {
                $lastSync = "2021-01-01 00:00:01";

                $this->info("Last Sync Time was: ".$lastSync);

                $attendanceLogs = ClockingRecord::select(
                    'clocking_in',
                    'clocking_out',
                    'break_in',
                    'break_out',
                    'UID',
                    'name',
                    'status',
                    'company_id',
                    'serial_number as machine_id',
                    'serial_number',
                    'created_at'
                )
                    ->where(static function ($q) use ($lastSync) {
                        $q->where('clocking_in', '>=', $lastSync)
                            ->orWhere('clocking_out', '>=', $lastSync)
                            ->orWhere('break_in', '>=', $lastSync)
                            ->orWhere('break_out', '>=', $lastSync);
                    })->get();

                $this->info("records needs to go Live : ". $attendanceLogs->count());
            }

            $attendanceLog = $attendanceLogs->toArray();

            $attendanceLogChunks = array_chunk($attendanceLog, 50);

            foreach ($attendanceLogChunks as $attendanceLogChunk) {

                $this->info("preparing Batch of 50 Entries to Push...");

                $client = new Client([
                    'headers' => ['Content-Type' => 'application/json']
                ]);

                try {
                    $response = $client->post($endpoint,
                        [
                            'body' => json_encode($attendanceLogChunk, JSON_THROW_ON_ERROR)
                        ]
                    );

                    $responseCode = $response->getStatusCode();
                    if ($responseCode !== 200) {
                        $this->info("Failed to establish the connection with server.");
                        Log::error("Failed to push records on Server");
                    } else {
                        // If successfully pushed get the last entry
                        $lastEntry = collect($attendanceLogChunk)->last();
                        $createdAt = date("Y-m-d H:i:s", strtotime($lastEntry['created_at']));

                        $this->info("Sync History Created: ".$lastEntry['created_at']);


                        $last_entry_sync_date = "";
                        if(!empty($lastEntry->get('clocking_in'))){
                            $last_entry_sync_date = $lastEntry->get('clocking_in');
                        }elseif (!empty($lastEntry->get('clocking_out'))) {
                            $last_entry_sync_date = $lastEntry->get('clocking_out');
                        }elseif (!empty($lastEntry->get('break_in'))){
                            $last_entry_sync_date = $lastEntry->get('break_in');
                        }elseif (!empty($lastEntry->get('break_out'))){
                            $last_entry_sync_date = $lastEntry->get('break_out');
                        }

                        SyncHistory::create([
                            "date"          => date("Y-m-d H:i:s", strtotime($last_entry_sync_date)),
                            "serial_number" => $serialNumber
                        ]);
                    }

                    $this->info(" Sleeping Cron service to avoid ip ban from server ...");
                    sleep(5);

                } catch (GuzzleException $e) {
                    Log::error($e->getMessage());
                    $this->info("exception Occurred : ...........");
                    $this->info($e->getMessage());
                } catch (JsonException $e) {
                    $this->info("exception Occurred : ...........");
                    $this->info($e->getMessage());
                    Log::error($e->getMessage());
                }
            }

        }


        return 0;
    }
}

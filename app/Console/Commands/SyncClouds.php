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
        $terminals = Settings::all();

        foreach ($terminals as $terminal) {
            $deviceIp = $terminal->device_ip;
            $companyId = $terminal->company_id;
            $endpoint = $terminal->api_url;
            $serialNumber = $terminal->serial_number;

            $this->info("device ip : {$deviceIp}");

            $syncHistory = SyncHistory::where('serial_number', $serialNumber)->orderBy('id', 'desc')->first();

            if (is_null($syncHistory)) {
                $attendanceLogs = ClockingRecord::all();
            } else {
                $lastSync = date("Y-m-d H:i:s", strtotime($syncHistory->date));
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
                    'created_at'
                )
                    ->where(static function ($q) use ($lastSync) {
                        $q->where('clocking_in', '>=', $lastSync)
                            ->orWhere('clocking_out', '>=', $lastSync)
                            ->orWhere('break_in', '>=', $lastSync)
                            ->orWhere('break_out', '>=', $lastSync);
                    })->get();
            }

            $attendanceLog = $attendanceLogs->toArray();

            $attendanceLogChunks = array_chunk($attendanceLog, 10);

            foreach ($attendanceLogChunks as $attendanceLogChunk) {
                $client = new Client([
                    'headers' => ['Content-Type' => 'application/json']
                ]);

                try {
                    $response = $client->post($endpoint,
                        [
                            'body' => json_encode($attendanceLogChunk, JSON_THROW_ON_ERROR)
                        ]
                    );

                    if ($response->failed()) {
                        Log::error("Failed to push records on Server");
                    } else {
                        // If successfully pushed get the last entry
                        $lastEntry = collect($attendanceLogChunk)->last();
                        $createdAt = date("Y-m-d H:i:s", strtotime($lastEntry['created_at']));

                        SyncHistory::create([
                            "date"          => $createdAt,
                            "serial_number" => $serialNumber
                        ]);
                    }
                } catch (GuzzleException $e) {
                    Log::error($e->getMessage());
                } catch (JsonException $e) {
                    Log::error($e->getMessage());
                }
            }

            /*$mapRecords = [];
            $i=0;
            foreach ($attendanceLogs as $attendanceLog){
                $attendanceLog = collect($attendanceLog);

                /**
                 * We will patch clock in, clock out, break in & break out into one single entry
                 *
                 * This will reduce the amount of data we are going to push it on the clout to save the bandwidth
                 * & processing power
                 */
            /*$mapRecords[$i]['clocking_in'] = $attendanceLog->get('clocking_in');
            $mapRecords[$i]['clocking_out'] = $attendanceLog->get('clocking_out');
            $mapRecords[$i]['break_in'] = $attendanceLog->get('break_in');
            $mapRecords[$i]['break_out'] = $attendanceLog->get('break_out');
            $mapRecords[$i]['UID'] = $attendanceLog->get('UID');
            $mapRecords[$i]['name'] = $attendanceLog->get('name');
            $mapRecords[$i]['status'] = $attendanceLog->get('status');
            $mapRecords[$i]['company_id'] = $attendanceLog->get('company_id');
            $mapRecords[$i]['serial_number'] = $attendanceLog->get('serial_number');

            $i++;
        }*/
        }


        return 0;
    }
}

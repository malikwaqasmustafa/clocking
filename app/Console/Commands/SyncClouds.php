<?php

namespace App\Console\Commands;

use App\Models\ClockingRecord;
use App\Models\Settings;
use App\Models\SyncHistory;
use Illuminate\Console\Command;

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

    /*
             * Clocking Machine types
                clock in 	= 0
                clock out 	= 1
                break out 	= 2
                break in 	= 3
             */

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
            $apiUrl = $terminal->api_url;
            $serialNumber = $terminal->serial_number;

            $this->info("device ip : {$deviceIp}");

            $syncHistory = SyncHistory::where('serial_number', $serialNumber)->orderBy('id', 'desc')->first();

            if (is_null($syncHistory)) {
                $attendanceLogs = ClockingRecord::all();
            } else {
                //$lastSync = date("Y-m-d H:i:s", strtotime($syncHistory->date));
                $lastSync = "2022-07-01 19:20:00";
                /*$clockInCollection = ClockingRecord::where('clocking_in', '>=', $lastSync)->get();
                $clockOutCollection = ClockingRecord::where('clocking_out', '>=', $lastSync)->get();
                $breakInCollection = ClockingRecord::where('break_in', '>=', $lastSync)->get();
                $breakOutCollection = ClockingRecord::where('break_out', '>=', $lastSync)->get();*/
                $attendanceLogs = ClockingRecord::select(
                    'clocking_in',
                    'clocking_out',
                    'break_in',
                    'break_out',
                    'UID',
                    'name',
                    'status',
                    'company_id',
                    'serial_number as machine_id'
                )
                    ->where(static function ($q) use ($lastSync) {
                                    $q->where('clocking_in', '>=', $lastSync)
                                        ->orWhere('clocking_out', '>=', $lastSync)
                                        ->orWhere('break_in', '>=', $lastSync)
                                        ->orWhere('break_out', '>=', $lastSync);
                                })->get();
            }

            $mapRecords = [];
            foreach ($attendanceLogs as $attendanceLog){
                dd($attendanceLog);
            }

        }


        return 0;
    }
}

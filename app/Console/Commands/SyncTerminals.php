<?php

namespace App\Console\Commands;

use App\Models\ClockingRecord;
use App\Models\Settings;
use Illuminate\Console\Command;
use maliklibs\Zkteco\Lib\ZKTeco;

class SyncTerminals extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync:terminals';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command will connect the terminals & sync their data';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $terminals = Settings::all();

        DB::beginTransaction();

        try {

            foreach ($terminals as $terminal)
            {

                $deviceIp = $terminal->device_ip;
                $companyId = $terminal->company_id;
                $apiUrl = $terminal->api_url;

                $this->info("device ip : {$deviceIp}");

                $zk = new ZKTeco($deviceIp);
                $zk->connect();
                $zk->disableDevice();

                $serialNumber = $zk->serialNumber();

                /*
                 * Clocking Machine types
                    clock in 	= 0
                    clock out 	= 1
                    break out 	= 2
                    break in 	= 3
                 */

                if(!empty($serialNumber)){
                    $users = $zk->getUser();
                    $attendances = $zk->getAttendance();

                    foreach ($attendances as $attendance){
                        $attendance = collect($attendance);

                        $clockIn = "";
                        $clockOut = "";
                        $breakIn = "";
                        $breakOut = "";

                        switch ($attendance->get('type')) {
                            case 0:
                                $clockIn = $attendance->get('timestamp');
                                break;
                            case 1:
                                $clockOut = $attendance->get('timestamp');
                                break;
                            case 2:
                                $breakOut = $attendance->get('timestamp');
                                break;
                            case 3:
                                $breakIn = $attendance->get('timestamp');
                                break;

                            default:
                                break;
                        }

                        $storeAttendance = [
                            "UID" => $attendance->get('id'),
                            "name" => !empty($users[$attendance->get('id')]['name']) ? $users[$attendance->get('id')]['name'] : NULL,
                            "clocking_in" => $clockIn,
                            "clocking_out" => $clockOut,
                            "break_in" => $breakIn,
                            "break_out" => $breakOut,
                            "status" => $attendance->get('type'),
                            "company_id" => $companyId,
                            "serial_number" => $serialNumber
                        ];

                        ClockingRecord::query()->create($storeAttendance);
                    }
                }

                $zk->enableDevice();
            }

            /**
             * Sensitive Command By using database transactions we make sure if everything was committed successfully
             * We can now safely clear this terminal's entries because we have written this in our local database
             *
             * Which additionally gets backed up to the Cloud Services Periodically
            */

            DB::commit();

            $zk->clearAttendance();
            // all good
        } catch (\Exception $e) {
            DB::rollback();
            // something went wrong
        }

        return 0;
    }
}

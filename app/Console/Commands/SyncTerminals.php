<?php

namespace App\Console\Commands;

use App\Models\ClockingRecord;
use App\Models\Settings;
use App\Models\User;
use GuzzleHttp\Client;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Auth;
use League\Flysystem\Config;
use maliklibs\Zkteco\Lib\ZKTeco;
use Mockery\Exception;
use DB;

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
        set_time_limit(0);
        ini_set("memory_limit", -1);

        $terminals = Settings::all();

        DB::beginTransaction();

        try {

            foreach ($terminals as $terminal)
            {

                $deviceIp = $terminal->device_ip;
                $companyId = $terminal->company_id;
                $apiUrl = $terminal->api_url;

                $this->info("device ip : {$deviceIp}");

                $serialNumber = null;
                try {
                    $zk = new ZKTeco($deviceIp);
                    if($zk->connect()){
                        $zk->disableDevice();
                        $serialNumber = stripslashes($zk->serialNumber());
                        $serialNumber = Settings::getCleanSerialNumber($serialNumber);
                        $zk->enableDevice();
                    }
                }catch (Exception $exception){
                    $this->info($exception->getMessage());
                    $errors[] = $exception->getMessage();
                }

                if (empty($serialNumber)){
                    $errors[] = "unable to connect to machine on this IP: ".$deviceIp;
                    $this->info("Machine must have a serial number fetched.");
                    break;
                }

                if (!empty($errors)){
                    $this->reportToServerOnFailure($deviceIp, $companyId, $errors);
                    continue;
                }

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

            //$zk->clearAttendance();
            // all good
        } catch (\Exception $e) {
            DB::rollback();
            // something went wrong
        }

        return 0;
    }

    private function reportToServerOnFailure($ip, $company_id, $errors) {
        $client = new Client();
        $endPointUrl = config('server.url');
        $response = $client->request('POST', $endPointUrl.'clocking/error/log', [
            'form_params' => [
                'ip' => $ip,
                'company_id' => $company_id,
                'error_message' => implode(",", $errors)
            ]
        ]);

        if ($response->getStatusCode() === 200) {
            $responseCollection = collect(json_decode($response->getBody()->getContents(), false, 512, JSON_THROW_ON_ERROR));

            if (!empty($responseCollection->get('status')) && $responseCollection->get('status') == "success") {
                DB::table('error_logs')->insert([
                    "ip" => $ip,
                    "error" => implode(",", $errors)
                ]);
            }
        }
    }
}

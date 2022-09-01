<?php

namespace App\Console\Commands;

use App\Models\Attendance;
use GuzzleHttp\Client;
use Illuminate\Console\Command;
use maliklibs\Zkteco\Lib\ZKTeco;
use DB;
class debugLogic extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'debug:logic';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        //$this->reportToServerOnFailure("192.168.16.60", 3, ["failed to connect to ip while sync"]);
//        $serialNumber = "~SerialNumber=BHXZ211860140";
//        $serialNumber = collect(explode("=", $serialNumber))->last();
//        dd($serialNumber);

//        dd($unix_timestamp);
        $zk = new ZKTeco('192.168.16.60');//clock out
//        $zk = new ZKTeco('192.168.100.100');//clock in
        $connections = $zk->connect();
        $enableDevice = $zk->enableDevice();
        $version = $zk->version();
        $os = $zk->osVersion();
        $serialNumber = $zk->serialNumber();
//        $testVoice = $zk->testVoice();
        $users = $zk->getUser();
        dump($serialNumber, $users);
        $attendance = $zk->getAttendance();
//        $attendance = (new \App\Models\Attendance)->getAttendance($zk);
        dd($attendance);

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

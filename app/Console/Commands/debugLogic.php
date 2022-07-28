<?php

namespace App\Console\Commands;

use App\Models\Attendance;
use Illuminate\Console\Command;
use maliklibs\Zkteco\Lib\ZKTeco;

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
//        $serialNumber = "~SerialNumber=BHXZ211860140";
//        $serialNumber = collect(explode("=", $serialNumber))->last();
//        dd($serialNumber);

//        dd($unix_timestamp);
        $zk = new ZKTeco('192.168.100.200');//clock out
//        $zk = new ZKTeco('192.168.100.100');//clock in
        $connections = $zk->connect();
        dd($connections);
        $enableDevice = $zk->enableDevice();
        $version = $zk->version();
        $os = $zk->osVersion();
        $serialNumber = $zk->serialNumber();
//        $testVoice = $zk->testVoice();
        $users = $zk->getUser();
        dump($serialNumber);
        $attendance = $zk->getAttendance();
//        $attendance = (new \App\Models\Attendance)->getAttendance($zk);
        dd($attendance);

        return 0;
    }
}

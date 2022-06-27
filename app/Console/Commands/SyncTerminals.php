<?php

namespace App\Console\Commands;

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

        foreach ($terminals as $terminal){
            $deviceIp = $terminal->device_ip;
            $this->info("device ip : {$deviceIp}");

            $zk = new ZKTeco($deviceIp);
            $zk->connect();
            $zk->enableDevice();

            $serialNumber = $zk->serialNumber();

            if(!empty($serialNumber)){
                $users = $zk->getUser();
                $attendance = $zk->getAttendance();
                dd($attendance);
            }
        }

        return 0;
    }
}

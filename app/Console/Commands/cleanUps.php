<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class cleanUps extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'machine:cleanup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command will clean up the machine entries to avoid the boat load of entries';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->line("Running the sync terminal with cleanup flag enabled to clear the machine.");
        $this->call('sync:terminals', ['--cleanup' => true]);
        $this->line("clean up command is finished successfully.");
        return 0;
    }
}

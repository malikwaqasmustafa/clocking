<?php

namespace App\Console\Commands;

use App\Models\SyncHistory;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use GuzzleHttp\Client;

class BackUpService extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'backup:database';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command will upload the database file to the server for analysis and backup.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $endPointUrl = config('server.database_backup');
        $databasePath = base_path(). '/database/'.env('DB_DATABASE');

        try {

            $client = new Client([
                'headers' => ['Content-Type' => 'application/json']
            ]);

            $body = fopen($databasePath, 'r');
            $response = $client->request('POST', $endPointUrl, ['body' => $body]);

            /*$response = $client->request('POST', $endPointUrl, [
                'multipart' => [
                    [
                        'name'     => 'file',
                        'contents' => file_get_contents($databaseFile),
                        'filename' => 'clocking.sqlite'
                    ]
                ],
            ]);*/

            $responseCode = $response->getStatusCode();
            if ($responseCode !== 200) {
                $this->info("Failed to establish the connection with server.");
                Log::error("Failed to push database on Server");
            } else {
                $this->info(" Database uploaded successfully ...");
            }

        } catch (GuzzleException $e) {
            Log::error($e->getMessage());
            $this->info("exception Occurred : ...........");
            $this->info($e->getMessage());
        } catch (JsonException $e) {
            $this->info("exception Occurred : ...........");
            $this->info($e->getMessage());
            Log::error($e->getMessage());
        }
        return 0;
    }
}

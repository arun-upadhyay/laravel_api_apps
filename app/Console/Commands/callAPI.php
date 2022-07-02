<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class callAPI extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:async_calls';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Http::async()->get("http://127.0.0.1:8000/api/async")->then(function ($response) {
            $path = base_path() . '/logger/async_logs.txt';
            if (file_exists($path)) {
                file_put_contents($path, $response->body());
            }
        });

        echo "Async call has been executed";
        return 0;
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        for ($index = 0; $index < 100; $index++) {
            DB::table('posts')->insert([
                'title' => Str::random(10),
                'description' => Str::random(100),

            ]);
        }
        DB::table('users')->insert([
            'name' => "admin",
            'username' => "admin",
            'email' => "admin@gmail.com",
            'password' => Hash::make('admin'),
        ]);
    }
}

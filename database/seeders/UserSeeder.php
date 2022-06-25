<?php

namespace Database\Seeders;

use App\Models\User;
use Faker\Provider\Address;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Faker\Factory;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();
        DB::table('users')->insert([
            'name' => $faker->name,
            'username' => $faker->userName,
            'email' => $faker->email,
            'password' => Hash::make($faker->password),
        ]);
    }
}

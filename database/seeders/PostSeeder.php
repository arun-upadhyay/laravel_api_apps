<?php

namespace Database\Seeders;

use App\Models\Post;

use Database\Seeders\Traits\TruncateTable;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    use TruncateTable;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Post::factory(1)->create();
    }
}

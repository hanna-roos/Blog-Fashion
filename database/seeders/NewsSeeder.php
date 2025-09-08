<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;  
use Illuminate\Database\Seeder;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * @return void
     */
    
    public function run(): void
    {
        for ($i = 0; $i < 10; $i++) {
            DB::table('news')->insert([
            'judul' => fake()->title(),
            'deskripsi' => fake()->paragraph(),
            'kategori' => fake()->sentence(),
            'author' => fake()->email(),
        ]);
        }
    }
}

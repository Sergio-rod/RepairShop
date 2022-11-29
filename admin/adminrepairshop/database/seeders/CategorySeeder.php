<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $category = new Category();
        $category->category_name = 'Electric';
        $category->category_image = 'http://localhost:8000/storage/bujia.png';
        $category->save();

        $category = new Category();
        $category->category_name = 'Cooling';
        $category->category_image = 'http://localhost:8000/storage/enfriamiento.png';
        $category->save();

        $category = new Category();
        $category->category_name = 'Filters';
        $category->category_image = 'http://localhost:8000/storage/filtros.png';
        $category->save();

        $category = new Category();
        $category->category_name = 'Brakes';
        $category->category_image = 'http://localhost:8000/storage/frenos.png';
        $category->save();

        $category = new Category();
        $category->category_name = 'Engine';
        $category->category_image = 'http://localhost:8000/storage/motor.png';
        $category->save();

        $category = new Category();
        $category->category_name = 'Suspension';
        $category->category_image = 'http://localhost:8000/storage/suspension.png';
        $category->save();

        $category = new Category();
        $category->category_name = 'Accesories';
        $category->category_image = 'http://localhost:8000/storage/accesorios.png';
        $category->save();






    }
}

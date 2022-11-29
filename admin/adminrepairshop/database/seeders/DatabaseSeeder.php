<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Database\Factories\Product_listsFactory;
use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Subcategory;
use App\Models\ProductList;
use App\Models\ProductDetails;




class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
       $this->call(CategorySeeder::class);
       $this->call(SubCategorySeeder::class);
       $this->call(SliderSeeder::class);
       ProductList::factory(20)->create();
       ProductDetails::factory(30)->create();




    }
}

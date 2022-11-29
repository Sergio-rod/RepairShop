<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Subcategory;

class SubCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subcategory = new Subcategory();
        $subcategory->subcategory_name = 'Perfumes';
        $subcategory->category_id = 7;
        $subcategory->save();

        $subcategory = new Subcategory();
        $subcategory->subcategory_name = 'Gadgets';
        $subcategory->category_id = 7;
        $subcategory->save();

        $subcategory = new Subcategory();
        $subcategory->subcategory_name = 'Covers';
        $subcategory->category_id = 7;
        $subcategory->save();

        $subcategory = new Subcategory();
        $subcategory->subcategory_name = 'Shock absorbers';
        $subcategory->category_id = 6;
        $subcategory->save();

        $subcategory = new Subcategory();
        $subcategory->subcategory_name = 'Plugs';
        $subcategory->category_id = 1;
        $subcategory->save();

        $subcategory = new Subcategory();
        $subcategory->subcategory_name = 'Oil';
        $subcategory->category_id = 5;
        $subcategory->save();

        $subcategory = new Subcategory();
        $subcategory->subcategory_name = 'Tools';
        $subcategory->category_id = 5;
        $subcategory->save();

        $subcategory = new Subcategory();
        $subcategory->subcategory_name = 'Car Shampoo';
        $subcategory->category_id = 7;
        $subcategory->save();

        $subcategory = new Subcategory();
        $subcategory->subcategory_name = 'AntiFreezers';
        $subcategory->category_id = 7;
        $subcategory->save();

        $subcategory = new Subcategory();
        $subcategory->subcategory_name = 'Radiators';
        $subcategory->category_id = 7;
        $subcategory->save();

        $subcategory = new Subcategory();
        $subcategory->subcategory_name = 'Routles';
        $subcategory->category_id = 2;
        $subcategory->save();

        $subcategory = new Subcategory();
        $subcategory->subcategory_name = 'AirFilters';
        $subcategory->category_id = 2;
        $subcategory->save();

        $subcategory = new Subcategory();
        $subcategory->subcategory_name = 'Petrol Pumps';
        $subcategory->category_id = 6;
        $subcategory->save();

        $subcategory = new Subcategory();
        $subcategory->subcategory_name = 'Gasoline Filters';
        $subcategory->category_id = 3;
        $subcategory->save();

        $subcategory = new Subcategory();
        $subcategory->subcategory_name = 'Oil Filters';
        $subcategory->category_id = 5;
        $subcategory->save();

        $subcategory = new Subcategory();
        $subcategory->subcategory_name = 'Polish`s';
        $subcategory->category_id = 3;
        $subcategory->save();

    }
}

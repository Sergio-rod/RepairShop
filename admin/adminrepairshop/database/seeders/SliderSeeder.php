<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\HomeSlider;


class SliderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $slider = new HomeSlider();
        $slider->slider_image= 'http://localhost:8000/storage/slider1.jpg';
        $slider->save();

        $slider = new HomeSlider();
        $slider->slider_image= 'http://localhost:8000/storage/slider2.jpg';
        $slider->save();

        $slider = new HomeSlider();
        $slider->slider_image= 'http://localhost:8000/storage/slider3.jpg';
        $slider->save();


    }
}

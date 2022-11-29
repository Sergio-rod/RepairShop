<?php

namespace Database\Factories;
use App\Models\ProductList;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProductDetails>
 */
class ProductDetailsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'product_id' => ProductList::all()->random()->id,
            'image_one' => $this->faker->randomElement(['https://mastuning.vteximg.com.br/arquivos/ids/18258750-590-590/5-Razones-para-comprar-con-nosotros.jpg?v=637962105361100000'
            , 'https://mastuning.vteximg.com.br/arquivos/ids/18258761-590-590/Garantia.jpg?v=637962105465770000']),
            'image_two' => $this->faker->randomElement(['https://mastuning.vteximg.com.br/arquivos/ids/18258725-1000-1000/Infografia.jpg?v=637962105149600000']),
            'image_three' =>  $this->faker->randomElement(['https://mastuning.vteximg.com.br/arquivos/ids/18258736-1000-1000/Texto-de-marca.jpg?v=637962105255400000']),
            'image_four' =>  $this->faker->randomElement(['https://mastuning.vteximg.com.br/arquivos/ids/18258784-1000-1000/Distribuidor-Autorizado.jpg?v=637962105675330000']),
            'short_description' => $this->faker->unique()->name(),
            'color' => $this->faker->unique()->name(),
            'size' => $this->faker->unique()->name(),
            'long_description' => $this->faker->unique()->name()

        ];
    }
}

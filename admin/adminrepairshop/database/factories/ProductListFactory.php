<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Subcategory;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ProductListFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->unique()->name(),
            'price' => $this->faker->numberBetween(3000,6000),
            'special_price' => $this->faker->numberBetween(1500,3000),
            'image' => $this->faker->randomElement(['http://localhost:8000/storage/filter.png'
            , 'http://localhost:8000/storage/aceite.png'
            , 'https://mastuning.vteximg.com.br/arquivos/ids/18258714-590-590/tunelight-par-de-faros-tipo-barra-16-leds-64-watts-fondo-cromado-0.jpg?v=637962105047570000'
            , 'https://mastuning.vteximg.com.br/arquivos/ids/18258710-590-590/tunelight-par-de-faros-tipo-barra-16-leds-64-watts-fondo-negro-0.jpg?v=637962105042230000'
            , 'https://mastuning.vteximg.com.br/arquivos/ids/5167714-320-320/producto-2328874.jpg?v=637383227683730000'
            , 'https://mastuning.vteximg.com.br/arquivos/ids/18915667-590-590/gabriel-kit-de-4-amortiguadores-gas-peugeot-206-1997-2008-206-0.jpg?v=638006114464130000'
            , 'https://mastuning.vteximg.com.br/arquivos/ids/17031542-320-320/generica-espejo-electrico-lado-conductor-nissan-lucino-1996-1998-lucino-0.jpg?v=637916403298870000'
            , 'https://mastuning.vteximg.com.br/arquivos/ids/13368503-320-320/generico-juego-de-viseras-grises-con-espejo-chevrolet-chevy-1994-2012-chevy-0.jpg?v=637823016204000000'
            , 'https://mastuning.vteximg.com.br/arquivos/ids/13295407-320-320/hushan-manija-puerta-interior-delantera-negro-cromado-con-hoyo-para-cristal-electrico-lado-pasajero-seat-ibiza-2003-2008-ibiza-0.jpg?v=637817015851430000'
            , 'http://localhost:8000/storage/balatas.png']), // password
            'remark' => $this->faker->randomElement(['FEATURED', 'NEW', 'COLLECTION']),
            'brand' => $this->faker->name(),
            'star' => $this->faker->numberBetween(1,5),
            'product_code' => $this->faker->unique()->phoneNumber(),
            'subcategory_id' => Subcategory::all()->random()->id,
            'category_id' => Category::all()->random()->id,




        ];
    }
}

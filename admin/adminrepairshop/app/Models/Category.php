<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $guarded = [];


    //relacion uno a muchos
    public function subcategory()
    {
        return $this->hasMany(Subcategory::class);

    }
    public function product_list(){
        return $this->hasMany(ProductList::class);
    }
}

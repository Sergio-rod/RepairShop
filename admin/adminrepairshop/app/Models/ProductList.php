<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductList extends Model
{
    protected $guarded = [];
    use HasFactory;
    public function subcategory(){
        return $this->belongsTo(Subcategory::class);
    }
    public function category(){
        return $this->belongsTo(Category::class);
    }
    public function details(){
        return $this->hasOne(ProductDetails::class);
    }
    public function reviews(){
        return $this->hasMany(ProductReview::class);
    }


}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\ProductList;

class ProductListController extends Controller
{
    public function ProductListByRemark(Request $request){

        $remark = $request->remark;
        $productlist = ProductList::where('remark',$remark)->limit(6)->get();
        return $productlist;

    }
    public function ProductListByCategory(Request $request){

        $category_id = $request->category;
        $productlist = ProductList::where('category_id',$category_id)->get();
        return $productlist;

    }
    public function ProductListBySubCategory(Request $request){


        $category_id = $request->category;
        $sub_category_id = $request->subcategory;
        $productlist = ProductList::where('category_id',$category_id)
        ->where('subcategory_id',$sub_category_id)->get();
        return $productlist;

    }

    public function ProductBySearch(Request $request){
        $key= $request->key;
        $productlist = ProductList::where('title','LIKE','%'.$key.'%')->orWhere(
            'brand','LIKE','%'.$key.'%'
        )->get();
        return $productlist;
    }

    public function SimilarProduct(Request $request){
        $subcategory = $request->subcategory;
        $productlist = ProductList::where('subcategory_id',$subcategory)->orderBy('id','desc')->limit(6)->get();
        return $productlist;

    }// End Method 




}

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\SiteInfoController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductListController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\ProductDetailsController;
use App\Http\Controllers\Admin\NotificationController;
use App\Models\ProductList;

use App\Http\Controllers\Admin\ReviewController;
use App\Http\Controllers\Admin\ProductCartController;
use App\Http\Controllers\Admin\FavouriteController;



//LOGIN USER
use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\ForgetController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\User\ResetController;



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::get('/getvisitor',[VisitorController::class,'GetVisitorDetails']);
Route::post('/postcontact',[ContactController::class,'PostContactDetails']);
Route::get('/allsiteinfo',[SiteInfoController::class,'AllSiteInfo']);
Route::get('/allcategory',[CategoryController::class,'AllCategory']);
Route::get('/productlistbyremark/{remark}',[ProductListController::class,'ProductListByRemark']);
Route::get('/productlistbycategory/{category}',[ProductListController::class,'ProductListByCategory']);
Route::get('/productlistbysubcategory/{category}/{subcategory}',[ProductListController::class,'ProductListBySubCategory']);
Route::get('/allslider',[SliderController::class,'AllSlider']);
Route::get('/productdetails/{id}',[ProductDetailsController::class,'ProductDetails']);
Route::get('/notification',[NotificationController::class,'NotificationHistory']);
Route::get('/search/{key}',[ProductListController::class,'ProductBySearch']);

 // Related product
 Route::get('/similar/{subcategory}',[ProductListController::class, 'SimilarProduct']);

 //Route of cart
 Route::post('/addtocart',[ProductCartController::class, 'addToCart']);
 //Cart Count Route

 Route::get('/cartcount/{email}',[ProductCartController::class, 'CartCount']);

// Favourite Route
Route::get('/favourite/{product_code}/{email}',[FavouriteController::class, 'AddFavourite']);
// Favourite List
Route::get('/favouritelist/{email}',[FavouriteController::class, 'FavouriteList']);

//Favourite remove
Route::get('/favouriteremove/{product_code}/{email}',[FavouriteController::class, 'FavouriteRemove']);

// Cart List Route 
Route::get('/cartlist/{email}',[ProductCartController::class, 'CartList']);
//Route cart list remove
Route::get('/removecartlist/{id}',[ProductCartController::class, 'RemoveCartList']);
//ADDITEM QUANTITY
Route::get('/cartitemplus/{id}/{quantity}/{price}',[ProductCartController::class, 'CartItemPlus']);
//REMOVEITEM QUANTITY
Route::get('/cartitemminus/{id}/{quantity}/{price}',[ProductCartController::class, 'CartItemMinus']);
//

// Cart Order Route
Route::post('/cartorder',[ProductCartController::class, 'CartOrder']);
//Order List by user
Route::get('/orderlistbyuser/{email}',[ProductCartController::class, 'OrderListByUser']);

// Post Product Review Route
Route::post('/postreview',[ReviewController::class, 'PostReview']);

// Review Product Route
Route::get('/reviewlist/{product_code}',[ReviewController::class, 'ReviewList']);









/////////////////////////////User Login API//////////////////////////


 // Login Routes
Route::post('/login',[AuthController::class, 'Login']);

 // Register Routes
Route::post('/register',[AuthController::class, 'Register']);

 // Forget Password Routes 
 Route::post('/forgetpassword',[ForgetController::class, 'ForgetPassword']);


//Current user route
Route::get('/user',[UserController::class,'User'])->middleware('auth:api');

 // Reset Password Routes 
 Route::post('/resetpassword',[ResetController::class, 'ResetPassword']);



/////////////////////////////User Login API END//////////////////////////

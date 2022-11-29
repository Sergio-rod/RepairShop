<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('product_lists', function (Blueprint $table){
            $table->unsignedBigInteger('subcategory_id')->nullable();
            $table->foreign('subcategory_id')
                ->references('id')->on('subcategories')
                ->onDelete('set null');

            $table->unsignedBigInteger('category_id')->nullable();
            $table->foreign('category_id')
                ->references('id')->on('categories')
                ->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('product_lists', function (Blueprint $table){
            $table->dropForeign('product_lists_subcategory_id_foreign');
            $table->Foreign('subcategory_id');

            $table->dropForeign('product_lists_category_id_foreign');
            $table->Foreign('category_id');

        });
    }
};

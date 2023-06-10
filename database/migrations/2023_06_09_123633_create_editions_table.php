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
        Schema::create('editions', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('keywords');
            $table->decimal('description');
            $table->string('cover');
            $table->foreignId('category_id');
            $table->string('pages');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void<
     */
    public function down()
    {
        Schema::dropIfExists('editions');
    }
};

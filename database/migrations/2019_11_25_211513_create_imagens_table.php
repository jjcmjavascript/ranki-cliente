<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImagensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('imagenes', function (Blueprint $table) {
            $table->engine='InnoDB';
            $table->chatset='utf8mb4';
            $table->collation ='utf8mb4_general_ci';
            
            $table->bigIncrements('id');
            $table->string('nombre',250)->comment('nombre del archivo en el sistema');
            $table->string('nombre_original',250)->comment('nombre ha mostrar del usuario');
            $table->string('ruta',250)->comment('ruta en el storage del archivo');
            
            $table->integer('imageable_id')->comment('id relacional al model para el morph');
            $table->string('imageable_type')->comment('ruta del modelo al que apunta');

            $table->SoftDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('imagenes');
    }
}

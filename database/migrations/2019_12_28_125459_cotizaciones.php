<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class Cotizaciones extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('cotizaciones');
        Schema::create('cotizaciones', function( Blueprint $table){
          $table->engine='InnoDB';
          $table->charset='utf8mb4';
          $table->collation = 'utf8mb4_general_ci';

          $table->bigIncrements('id');
          $table->integer('propiedad_id')->unsigned()->comment('relacion a la propiedad');
          $table->integer('usuario_id')->unsigned()->comment('relacion al usuario');
          $table->text('comentario',2000)->comment('comentario de la cotizacion');
          $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP()'))->comment('fecha de creacion');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cotizaciones');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateUsuarios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('usuarios', function(Blueprint $table) {
            $table->string('rut', 15);
            $table->text('direccion');
            $table->string('telefono_movil', 20);
            $table->string('telefono_fijo', 20);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('usuarios', function(Blueprint $table) {
            $table->dropIfExists('rut');
            $table->dropIfExists('direccion');
            $table->dropIfExists('telefono_movil');
            $table->dropIfExists('telefono_fijo');
        });
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('usuarios');
        Schema::create('usuarios', function (Blueprint $table) {
            $table->engine='InnoDB';
            $table->charset='utf8mb4';
            $table->collation = 'utf8mb4_general_ci';

            $table->bigIncrements('id');
            $table->integer('perfil_id')->unsigned()->nullable();
            $table->string('nombre');
            $table->string('apellidos')->nullable();
            $table->string('rut', 15)->nullable();
            $table->string('avatar')->nullable();
            $table->string('password')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('telefono_movil', 20)->nullable();
            $table->string('telefono_fijo', 20)->nullable();
            $table->text('direccion')->nullable();
            $table->string('provider')->nullable();
            $table->string('provider_id')->nullable();
            $table->boolean('notificaciones')->default(0)->comment('Marca para recibir notificaciones');
            $table->boolean('activo')->default(1);
            $table->integer('configuracion')->unsigned()->nullable();
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
}

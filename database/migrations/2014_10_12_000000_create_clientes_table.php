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
        Schema::create('clientes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nombre');
            $table->string('apellidos')->nullable();
            $table->string('rut', 15)->nullable()->after('email_verified_at');
            $table->string('avatar')->nullable()->after('telefono_fijo');
            $table->string('password');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('telefono_movil', 20)->nullable()->after('email_verified_at');
            $table->string('telefono_fijo', 20)->nullable()->after('email_verified_at');
            $table->text('direccion')->nullable()->after('email_verified_at');
            $table->string('provider')->nullable()->after('telefono_fijo');
            $table->string('provider_id')->nullable()->after('telefono_fijo');
            $table->boolean('activo')->default(1);
            $table->integer('configuracion')->unsigned()->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('clientes');
    }
}

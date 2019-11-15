<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateUsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('usuarios', function(Blueprint $table) {
            $table->string('telefono_movil', 20)->nullable()->after('email_verified_at');
            $table->string('telefono_fijo', 20)->nullable()->after('email_verified_at');
            $table->text('direccion')->nullable()->after('email_verified_at');
            $table->string('rut', 15)->nullable()->after('email_verified_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

        if (Schema::hasColumn('usuarios', 'rut')) {
            Schema::table('usuarios', function (Blueprint $table) {
                $table->dropColumn('rut');
            });
        }

        if(Schema::hasColumn('usuarios', 'direccion')) {
            Schema::table('usuarios', function(Blueprint $table) {
                $table->dropColumn('direccion');
            });
        }

        if(Schema::hasColumn('usuarios', 'telefono_movil')) {
            Schema::table('usuarios', function(Blueprint $table) {
                $table->dropColumn('telefono_movil');
            });
        }

        if(Schema::hasColumn('usuarios', 'telefono_fijo')) {
            Schema::table('usuarios', function(Blueprint $table) {
                $table->dropColumn('telefono_fijo');
            });
        }
    }
}

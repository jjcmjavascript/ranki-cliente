<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateUsuarios02 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
   public function up()
    {
        Schema::table('usuarios', function(Blueprint $table) {
            $table->string('avatar')->nullable('telefono_fijo');
            $table->string('provider_id')->nullable('telefono_fijo');
            $table->string('provider')->nullable()->after('telefono_fijo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

        if (Schema::hasColumn('usuarios', 'provider')) {
            Schema::table('usuarios', function (Blueprint $table) {
                $table->dropColumn('provider');
            });
        }

        if(Schema::hasColumn('usuarios', 'provider_id')) {
            Schema::table('usuarios', function(Blueprint $table) {
                $table->dropColumn('provider_id');
            });
        }

        if(Schema::hasColumn('usuarios', 'avatar')) {
            Schema::table('usuarios', function(Blueprint $table) {
                $table->dropColumn('avatar');
            });
        }
    }
}

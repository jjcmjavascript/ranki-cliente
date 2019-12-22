<?php

namespace App\Extendidos;

class URL
{

    public static function previo()
    {
        $excepciones = [
            env('APP_URL').'reset_password',
        ];

        if( in_array( url()->previous(), $excepciones) ){

            return route('inicio');
        }

        return url()->previous();
    }
}

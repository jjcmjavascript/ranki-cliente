<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Sistema\Usuarios;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
   

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'nombre' => ['required', 'string'],
            'apellidos' => ['required', 'string'],
            'rut' => ['required', 'string'], // Agregar validación modulo 11
            'telefono_movil' => ['required', 'string', 'min:9'],
            'telefono_fijo' => ['nullable', 'string'],
            'direccion' => ['nullable', 'string'],
            'email' => ['required', 'email:rfc,dns', 'unique:usuarios'],
            'password' => ['required', 'confirmed', 'min:8'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return Usuarios::create([
            'nombre' => $data['nombre'],
            'apellidos' => $data['apellidos'],
            'rut' => $data['rut'], // Agregar validación modulo 11
            'telefono_fijo' => $data['telefono_fijo'],
            'telefono_movil' => $data['telefono_movil'],
            'direccion' => $data['direccion'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }
}

<?php

namespace App\Http\Controllers\Sistema;

use DB;

use App\Http\Controllers\Controller;
use App\Models\Sistema\Usuarios;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;

class UsuariosController extends Controller
{
    public function vue()
    {
        return view('vue');
    }

    public function index(Request $request)
    {
        $usuarios = Usuarios::buscar($request)->paginate(2);

        return response($usuarios);
    }

    public function crear(Request $request)
    {
        $this->validate($request, [
            'nombre' => 'required | string',
            'apellidos' => 'required | string',
            'rut' => 'required | string', // Agregar validación modulo 11
            'email' => 'required | email:rfc,dns',
            'clave' => 'required'
        ]);

        try {
            DB::beginTransaction();

            $usuario = new Usuarios;
            $usuario->fill($request->except('clave'));
            $usuario->clave = Hash::make($request->clave);
            $usuario->save();

            $mensaje = ['Usuario registrado exitosamente'];
            return response($mensaje, 200);
        }
        catch(\Exception $e) {
            $mensaje = [$e->getLine().' '.$e->getMessage()];
            return response($mensaje, 500);
        }
    }
}

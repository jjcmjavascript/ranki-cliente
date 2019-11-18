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

    public function editar(Request $request)
    {
        $this->validate($request, [
            'id' => 'required | exists:usuarios,id'
        ]);

        $usuarios = Usuarios::find($request->id);
        return response($usuarios, 200);
    }

    public function guardar(Request $request)
    {
        $this->validate($request, [
            'id' => 'nullable|exists:usuarios,id',
            'nombre' => 'required|string',
            'apellidos' => 'required|string',
            'rut' => 'required|string', // Agregar validación modulo 11
            'telefono_fijo' => 'sometimes|string',
            'telefono_movil' => 'sometimes|string',
            'direccion' => 'sometimes|string',
            'email' => 'required|email:rfc,dns',
            'clave' => 'required_without:id|confirmed|min:8',
        ]);

        try {
            DB::beginTransaction();

            if($request->id) {
                $usuario = Usuarios::find($request->id);
            }

            if(isset($usuario)) {
                $usuario->fill($request->all());
            }
            else {
                $usuario = new Usuarios;
                $usuario->fill($request->except('clave'));
                $usuario->password = Hash::make($request->clave);
            }
            
            $usuario->save();

            DB::commit();

            $mensaje = ['Usuario guardado exitosamente'];
            return response($mensaje, 200);
        }
        catch(\Exception $e) {
            DB::rollBack();
            $mensaje = [$e->getLine().' '.$e->getMessage()];
            return response($mensaje, 500);
        }
    }

    public function desactivar(Request $request)
    {
        $this->validate($request, [
            'id' => 'required | integer | exists:usuarios,id'
        ]);

        try {
            DB::beginTransaction();

            $usuario = Usuarios::find($request->id);
            $usuario->activo = 0;
            $usuario->save();

            DB::commit();

            $mensaje = ['Usuario desactivado exitosamente'];
            return response($mensaje, 200);
        }
        catch(\Exception $e) {
            DB::rollBack();
            $mensaje = [$e->getLine().' '.$e->getMessage()];
            return response($mensaje, 500);
        }
    }

    public function reactivar(Request $request)
    {
        $this->validate($request, [
            'id' => 'required | integer | exists:usuarios,id'
        ]);

        try {
            DB::beginTransaction();

            $usuario = Usuarios::find($request->id);
            $usuario->activo = 1;
            $usuario->save();

            DB::commit();

            $mensaje = ['Usuario reactivado exitosamente'];
            return response($mensaje, 200);
        }
        catch(\Exception $e) {
            DB::rollBack();
            $mensaje = [$e->getLine().' '.$e->getMessage()];
            return response($mensaje, 500);
        }
    }
}

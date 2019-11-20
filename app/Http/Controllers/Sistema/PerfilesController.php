<?php

namespace App\Http\Controllers\Sistema;

use DB;

use App\Http\Controllers\Controller;
use App\Models\Sistema\Perfiles;
use Illuminate\Http\Request;

class PerfilesController extends Controller
{
    public function vue()
    {
        return view('vue');
    }

    public function index(Request $request)
    {
        $perfiles = Perfiles::buscar($request)
        ->orderBy('id', 'DESC')
        ->paginate();

        return response($perfiles, 200);
    }

    public function guardar(Request $request)
    {
        $this->validate($request, [
            'id' => 'nullable|exists:perfiles,id',
            'nombre' => 'required|string',
        ]);

        try {
            DB::beginTransaction();

            if($request->id) {
                $perfil = Perfiles::find($request->id);
            }

            if(!isset($perfil)) {
                $perfil = new Perfiles;
            }

            $perfil->fill($request->all());
            $perfil->save();

            DB::commit();

            $mensaje = ['Perfil guardado exitosamente'];
            return response(compact('perfil', 'mensaje'), 200);
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
            'id' => 'required|integer|exists:perfiles,id'
        ]);

        try {
            DB::beginTransaction();

            $perfil = Perfiles::find($request->id);
            $perfil->activo = 0;
            $perfil->save();

            DB::commit();

            $mensaje = ['Perfil desactivado exitosamente'];
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
            'id' => 'required|integer|exists:perfiles,id'
        ]);

        try {
            DB::beginTransaction();

            $perfil = Perfiles::find($request->id);
            $perfil->activo = 1;
            $perfil->save();

            DB::commit();

            $mensaje = ['Perfil reactivado exitosamente'];
            return response($mensaje, 200);
        }
        catch(\Exception $e) {
            DB::rollBack();
            $mensaje = [$e->getLine().' '.$e->getMessage()];
            return response($mensaje, 500);
        }
    }
}
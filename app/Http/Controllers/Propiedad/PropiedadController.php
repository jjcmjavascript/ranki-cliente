<?php

namespace App\Http\Controllers\Propiedad;

use DB;
use Auth;
use Storage;
use ApiHelper;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\Sistema\Usuario;
use App\Models\Comun\Imagen;
use Carbon\Carbon;

class PropiedadController extends Controller
{
    public function vue()
    {
        return view('vue');
    }

    public function index ()
    {

    }

    public function crear()
    {
        try {

            $response = (new ApiHelper)->sendApiRequest('api/propiedades/crear');

            if(isset($response['error'])) throw new \Exception($response);

            return response($response,200);

        } catch (\Exception $e) {

            return response([
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function guardar( Request $request)
    {

        $request->merge(['amoblada' => filter_var($request->amoblada, FILTER_VALIDATE_BOOLEAN)]);

            $this->validate($request, [
                'titulo' => 'required|string',
                'id_tipo_propiedad' => 'required|integer|exists:subtipos,id',
                'id_subtipo_propiedad' => 'required|integer|exists:subtipos,id',
                'region_id' => 'required|integer|exists:regiones,id',
                'comuna_id' => 'required|integer|exists:comunas,id',
                'calle' => 'required|string',
                'numero_calle' => 'required|integer',
                'numero_departamento' => 'nullable|integer',
                'numero_piso' => 'nullable|integer',
                'superficie_util' => 'required|integer',
                'superficie_terraza' => 'nullable|integer',
                'banio' => 'nullable|integer',
                'descripcion' => 'required|string',
                'tipo_piso' => 'nullable|array',
                'anio_construccion' => 'nullable|integer',
                'privado' => 'nullable|integer',
                'bodega' => 'nullable|integer',
                'estacionamiento' => 'nullable|integer',
                'telefono' => 'nullable|integer|digits:8',
                'codigo_telefono' => 'required_with:telefono|integer',
                'telefono2' => 'nullable|integer|digits:8',
                'codigo_telefono2' => 'required_with:telefono2|integer',
                'id_orientacion' => 'nullable|integer',
                'id_tipo_operacion' => 'required|integer|exists:subtipos,id',
                'id_tipo_valor' => 'required|integer|exists:subtipos,id',
                'precio' => 'required|numeric',
                'id_periodicidad_arriendo' => 'required|integer|exists:subtipos,id',
                'usuario_id' => 'required|integer|exists:usuarios,id',
                'latitud' => 'nullable|numeric',
                'longitud' => 'nullable|numeric',
                'amoblada' => 'required|boolean',
                'imagenes_lista'=>'required',
                'imagenes_lista.*' => 'file|mimes:jpg,png,jpeg,ico,svg|max:2048',
            ]);

        try {

            $request->merge(['usuario_id'=>Auth::user()->id]);
            $files = json_encode($request->imagenes_lista);
            $request->merge(['imagenes'=>$files]);
            $response = (new ApiHelper)->sendApiRequest('api/propiedades/guardar', $request->all());

            if(isset($response['error'])) throw new \Exception($response['error']);

            return response(['url' => route('usuario.publicaciones') ],200);

        } catch (\Exception $e) {

            $e = $e->getMessage();

            return response([
                'error' => $e
            ], 500);
        }
    }

    public function comuna ( Request $request )
    {
        try {

            $response = (new ApiHelper)->sendApiRequest('combo_box.comunas',$request->all());

            if(isset($response['error'])) throw new \Exception($response);
            return response($response,200);

        } catch (\Exception $e) {

            return response([
                'error' => $e->getMessage()
            ], 500);

        }


    }

    public function desactivar ( Request $request ){

        $this->validate($request,[
            'id'=>'required|integer|exists:propiedades'
        ]);

        try {
            $response = (new ApiHelper)->sendApiRequest('api/propiedades/desactivar',[
                'id'=>$request->id,
                'id_usuario'=>Auth::user()->id]);
                
            if(isset($response['error'])) throw new \Exception($response);

            return response($response,200);

        } catch (\Exception $e) {
            return response([
                'error' => $e->getMessage()
            ], 500);
        }

    }

    public function reactivar ( Request $request)
    {
        $this->validate($request,[
            'id'=>'required|integer|exists:propiedades'
        ]);

        try {
            $response = (new ApiHelper)->sendApiRequest('api/propiedades/reactivar',['id'=>$request->id, 'id_usuario'=>Auth::user()->id]);
            if(isset($response['error'])) throw new \Exception($response);

            return response($response,200);

        } catch (\Exception $e) {
            return response([
                'error' => $e->getMessage()
            ], 500);
        }

    }
}

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

            return response($response, 200);

        } catch (\Exception $e) {

            return response([
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function editar( Request $request )
    {
        $this->validate($request, [
            'id' => 'required|integer|exists:propiedades,id'
        ]);

        try {

            $response = (new ApiHelper)->sendApiRequest('api/propiedades/editar', $request->all());

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
            'latitud' => 'nullable|numeric',
            'longitud' => 'nullable|numeric',
            'amoblada' => 'required|boolean',
            'imagenes'=>'required',
            'imagenes.*' => 'file|mimes:jpg,png,jpeg,ico,svg|max:2048',
        ]);

        try {

            $request->merge(['usuario_id'=>Auth::user()->id]);

            $multipart = $this->formatFileMultipartRequest([], $request->only('imagenes'), 'imagenes');
            $multipart = $this->formatDataMultipartRequest($multipart, $request->except('imagenes'));

            $response = (new ApiHelper)->sendApiRequest('api/propiedades/guardar', null, $multipart);

            if(isset($response['error'])) throw new \Exception($response['error']);

            return response(['url' => route('usuario.publicaciones') ],200);

        } catch (\Exception $e) {

            $e = $e->getMessage();

            return response([
                'error' => $e
            ], 500);
        }
    }

    public function actualizar ( Request $request )
    {
        $this->validate($request, [
            'id' => 'required|integer|exists:propiedades,id',
            'titulo' => 'required|string',
            'id_tipo_propiedad' => 'required|integer|exists:subtipos,id',
            'id_subtipo_propiedad' => 'required|integer|exists:subtipos,id',
            'region_id' => 'required|integer|exists:regiones,id',
            'comuna_id' => 'required|integer|exists:comunas,id',
            'calle' => 'required|string',
            'numero_calle' => 'required|integer',
            'numero_domicilio' => 'nullable|integer',
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
            //'usuario_id' => 'required|integer|exists:usuarios,id',
            'latitud' => 'nullable|numeric',
            'longitud' => 'nullable|numeric',
            'amoblada' => 'required|boolean',
            'portada_imagen_key' => 'required|integer',
            'portada_imagen_type' => 'required|string',
            'imagenes.*' => 'file|mimes:jpg,png,jpeg,ico,svg|max:2048',
            'imagenes_new.*' => 'file|mimes:jpg,png,jpeg,ico,svg|max:2048',
        ]);

        try {
            $multipart = $this->formatFileMultipartRequest([], $request->only('imagenes'), 'imagenes');
            $multipart = $this->formatDataMultipartRequest($multipart, $request->except('imagenes'));

            $response = (new ApiHelper)->sendApiRequest('api/propiedades/actualizar', null, $multipart);

            if(isset($response['error'])) throw new \Exception($response['error']);

            return response([
                'success' => $response['success'],
                'url' => route('usuario.publicaciones') 
            ],200);
        }
        catch(\Exception $e) {
            return response([
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function comunas ( Request $request )
    {
        try {

            $response = (new ApiHelper)->sendApiRequest('api/combo_box/comunas',$request->all());

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

    public function detalle($id_propieda)
    {

        try {
            $response = (new ApiHelper)->publicRequest('api/propiedades/mostrar',['id'=>$id_propieda]);
            if(isset($response['error'])) throw new \Exception($response);

            return response($response,200);

        } catch (\Exception $e) {
            return response([
                'error' => $e->getMessage()
            ], 500);
        }

    }


}

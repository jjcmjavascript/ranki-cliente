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

    public function crear()
    {
        try {

            $response = (new ApiHelper)->sendApiRequest('api/propiedades/crear');

            if(isset($response['error'])) throw new \Exception($response);

            return response($response, 200);

        }
        catch (\GuzzleHttp\Exception\BadResponseException $e) {

            $response = $e->getResponse();
            $error = json_decode($response->getBody()->getContents(),true);

            return response($error, 500);
        }
        catch (\Exception $e) {
            return response($e, 500);
        }
    }

    public function editar( Request $request )
    {
        $this->validate($request, [
            'id' => 'required|integer'
        ]);

        try {

            $response = (new ApiHelper)->sendApiRequest('api/propiedades/editar', $request->all());

            if(isset($response['error'])) throw new \Exception($response);

            return response($response,200);

        }
        catch (\GuzzleHttp\Exception\BadResponseException $e) {

            $response = $e->getResponse();
            $error = json_decode($response->getBody()->getContents(),true);

            return response($error, 500);
        }
        catch (\Exception $e) {
            return response($e, 500);
        }
    }

    public function guardar( Request $request)
    {
        $this->validate($request, [
            'titulo' => 'required|string',
            'id_tipo_propiedad' => 'required|integer',
            'id_subtipo_propiedad' => 'required|integer',
            'region_id' => 'required|integer',
            'comuna_id' => 'required|integer',
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
            'id_tipo_operacion' => 'required|integer',
            'id_tipo_valor' => 'required|integer',
            'precio' => 'required|numeric',
            'id_periodicidad_arriendo' => 'required|integer',
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

        }
        catch (\GuzzleHttp\Exception\BadResponseException $e) {

            $response = $e->getResponse();
            $error = json_decode($response->getBody()->getContents(),true);

            return response($error, 500);
        }
        catch (\Exception $e) {
            return response($e, 500);
        }
    }

    public function actualizar ( Request $request )
    {
        $this->validate($request, [
            'id' => 'required|integer',
            'titulo' => 'required|string',
            'id_tipo_propiedad' => 'required|integer',
            'id_subtipo_propiedad' => 'required|integer',
            'region_id' => 'required|integer',
            'comuna_id' => 'required|integer',
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
            'id_tipo_operacion' => 'required|integer',
            'id_tipo_valor' => 'required|integer',
            'precio' => 'required|numeric',
            'id_periodicidad_arriendo' => 'required|integer',
            'latitud' => 'nullable|numeric',
            //'usuario_id' => 'required|integer|exists:usuarios,id',
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
        catch(\GuzzleHttp\Exception\BadResponseException $e) {

            $response = $e->getResponse();
            $error = json_decode($response->getBody()->getContents(),true);

            return response($error, 500);
        }
        catch (\Exception $e) {
            return response(['error'=>$e->getMessage()], 500);
        }
    }

    public function comunas ( Request $request )
    {
        try {

            $response = (new ApiHelper)->sendApiRequest('api/combo_box/comunas',$request->all());

            if(isset($response['error'])) throw new \Exception($response);
            return response($response,200);

        } catch (\GuzzleHttp\Exception\BadResponseException $e) {

            $response = $e->getResponse();
            $error = json_decode($response->getBody()->getContents(),true);

            return response($error, 500);

        }

    }

    public function desactivar ( Request $request )
    {

        $this->validate($request,[
            'id'=>'required|integer'
        ]);

        try {
            $response = (new ApiHelper)->sendApiRequest('api/propiedades/desactivar',[
                'id'=>$request->id,
                'id_usuario'=>Auth::user()->id]);

            if(isset($response['error'])) throw new \Exception($response);

            return response($response,200);

        }
        catch (\GuzzleHttp\Exception\BadResponseException $e) {

            $response = $e->getResponse();
            $error = json_decode($response->getBody()->getContents(),true);

            return response($error, 500);
        }
        catch (\Exception $e) {
            return response($e, 500);
        }

    }

    public function reactivar ( Request $request)
    {
        $this->validate($request,[
            'id'=>'required|integer'
        ]);

        try {
            $response = (new ApiHelper)->sendApiRequest('api/propiedades/reactivar',['id'=>$request->id, 'id_usuario'=>Auth::user()->id]);
            if(isset($response['error'])) throw new \Exception($response);

            return response($response,200);

        }
        catch (\GuzzleHttp\Exception\BadResponseException $e) {

            $response = $e->getResponse();
            $error = json_decode($response->getBody()->getContents(),true);

            return response($error, 500);
        }
        catch (\Exception $e) {
            return response($e, 500);
        }

    }

    public function detalle($id_propieda)
    {

        try {
            if(!$id_propieda) throw new \Exception('La propiedad indicada no existe.');

            $datos = ['id' => $id_propieda];

            if( Auth::check() ){
                $datos['usuario_id'] = Auth::user()->id;
            }

            $response = (new ApiHelper)->publicRequest('api/propiedades/mostrar', $datos);

            return response($response,200);

        }
        catch (\GuzzleHttp\Exception\BadResponseException $e) {

            $response = $e->getResponse();
            $error = json_decode($response->getBody()->getContents(),true);

            return response($error, 500);
        }
        catch (\Exception $e) {
            return response($e, 500);
        }

    }

    public function comentarios_propiedad(Request $request)
    {
        $this->validate($request,[
            'id' => 'required|integer'
        ]);

        try {

            $datos = ['id' => $request->id];

            if( Auth::check() ){
                $datos['usuario_id'] = Auth::user()->id;
            }

            $response = (new ApiHelper)->publicRequest('api/propiedades/comentarios_propiedad', $datos);

            return response($response,200);

        }
        catch (\GuzzleHttp\Exception\BadResponseException $e) {

            $response = $e->getResponse();
            $error = json_decode($response->getBody()->getContents(),true);

            return response($error, 500);
        }
        catch (\Exception $e) {
            return response($e, 500);
        }
    }


    public function result( Request $request )
    {

        try {

            $datos = $request->all();

            if( Auth::check() ){
                $datos['usuario_id'] = Auth::user()->id;
            }

            $response = (new ApiHelper)->publicRequest('api/propiedades/results', $datos);
            if(isset($response['error'])) throw new \Exception($response);

            return response($response,200);

        }
        catch (\GuzzleHttp\Exception\BadResponseException $e) {
            $response = $e->getResponse();
            $error = json_decode($response->getBody()->getContents(),true);

            return response($error, 500);

        }
        catch (\Exception $e) {
            return response($e, 500);
        }

    }

    public function cotizar ( Request $request )
    {
        $this->validate($request,[
            'id'=>'required|integer',
            'comentario'=>'required|string|min:20|max:2000'
        ]);

        try {

            if( !Auth::check() ) throw new \Exception('Acción no autorizada');
            $request->merge(['usuario_id'=> Auth::user()->id]);

            $response = (new ApiHelper)->sendApiRequest('api/propiedades/cotizar',$request->all());

            if(isset($response['error'])) throw new \Exception($response);
            return  response($response,200);

        }
        catch ( \GuzzleHttp\Exception\BadResponseException $e) {

               $response = $e->getResponse();
               $error = json_decode($response->getBody()->getContents(),true);

            return response($error, 500);
        }
        catch (\Exception $e) {
            return response($e, 500);
        }

    }

    public function favorito_marcar ( Request $request )
    {
        $this->validate($request ,  [
            'id' => 'required|integer'
        ]);

        try {
            if(!Auth::check()) throw new \Exception("Accion no autorizada");

            $response = (new ApiHelper)->sendApiRequest('api/propiedades/favorito/marcar', [
                'id' => $request->id,
                'usuario_id' => Auth::user()->id
            ]);

            if(isset($response['error'])) throw new \Exception($response);

            return response($response,200);

        }
        catch (\GuzzleHttp\Exception\BadResponseException $e) {

            $response = $e->getResponse();
            $error = json_decode($response->getBody()->getContents(),true);

            return response($error, 500);
        }
        catch (\Exception $e) {
            return response($e, 500);
        }

    }

    public function like ( Request $request )
    {
        $this->validate($request ,  [
            'id' => 'required|integer'
        ]);

        try {
            if(!Auth::check()) throw new \Exception("Accion no autorizada");

            $response = (new ApiHelper)->sendApiRequest('api/propiedades/like', [
                'id' => $request->id,
                'usuario_id' => Auth::user()->id
            ]);

            if(isset($response['error'])) throw new \Exception($response);

            return response($response,200);

        }
        catch (\GuzzleHttp\Exception\BadResponseException $e) {

            $response = $e->getResponse();
            $error = json_decode($response->getBody()->getContents(),true);

            return response($error, 500);
        }
        catch (\Exception $e) {
            return response($e, 500);
        }

    }

    public function puntuar ( Request $request )
    {
        $this->validate($request ,  [
            'id' => 'required|integer',
            'comodidad' => 'required|numeric|max:5',
            'estado' => 'required|numeric|max:5',
            'servicio' => 'required|numeric|max:5',
            'facilidad' => 'required|numeric|max:5',
            'comentario' => 'string|max:2000|min:20',
        ]);

        try {
            if(!Auth::check()) throw new \Exception("Accion no autorizada");

            $datos = $request->all();
            $datos = array_merge(['usuario_id' => Auth::user()->id ],$datos);

            $response = (new ApiHelper)->sendApiRequest('api/propiedades/puntuar', $datos );

            if(isset($response['error'])) throw new \Exception($response);

            return response($response,200);

        }
        catch (\GuzzleHttp\Exception\BadResponseException $e) {

            $response = $e->getResponse();
            $error = json_decode($response->getBody()->getContents(),true);

            return response($error, 500);
        }
        catch (\Exception $e) {
            return response($e, 500);
        }

    }
}

<?php

namespace App\Http\Controllers\Usuario;

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

class UsuarioController extends Controller
{
    public function vue()
    {
        return view('vueDashboard');
    }

    public function perfil()
    {
        try{
            $usuario = Usuario::where('id', Auth::user()->id)
            ->with('_avatar')
            ->first();

            return response([ 'usuario' => $usuario ], 200);

        }
        catch( \Exception $e){

            return response([ 'error' => $e->getMessage() ], 500);
        }

    }

    public function guardar( Request $request )
    {
        $this->validate($request, [
            'id' =>'required|exists:usuarios,id',
            'nombre'  => 'nullable|string|max:30',
            'apellidos'=> 'nullable|string|max:100',
            'direccion'  => 'nullable|string',
            'telefono_fijo'  => 'nullable|numeric',
            'telefono_movil'  => 'nullable|numeric',
            'avatar' => 'nullable|image|max:2048',
        ]);

        try {

            $ruta = 'api/usuarios/guardar';
            $form_params = $request->all();

            $response = (new ApiHelper)->sendApiRequest($ruta, $form_params);

            if(isset($response['error'])) throw new \Exception($response);

            return response([ 'usuario' => $response ],200);
        }
        catch (\Exception $e) {
            return response([
                'error' => $e->getLine().':'.$e->getMessage()
            ], 500);
        }

    }

    public function editar_clave ( Request $request )
    {
        $this->validate($request, [
            'id' =>'required|exists:usuarios,id',
            'actual' => 'string|required',
            'password' => 'string|confirmed|min:8',
        ]);

        try {
            $ruta = 'api/usuarios/editar_clave';

            $form_params = $request->all();

            $response = (new ApiHelper)->sendApiRequest($ruta, $form_params);

            if(isset($response['error'])) throw new \Exception($response);

            return response([ 'usuario' => $response ], 200);
        }
        catch(\Exception $e){
            return response([ 'error'=> $e->getMessage() ], 500);
        }
    }

    public function crear(Request $request)
    {
        $this->validate($request, [
            'nombre' => 'required|string',
            'apellidos' => 'required|string',
            'rut' => 'required|string',
            'telefono_movil' => 'sometimes|string',
            'direccion' => 'sometimes|string',
            'email' => 'required|email:rfc,dns',
            // 'perfil_id' => 'required|exists:perfiles,id',
            'password' => 'required|confirmed|min:8',
        ]);

        $cliente = Usuario::where('email', $request->email)
            ->orWhere('rut', $request->rut)
            ->first();

        try {

            DB::beginTransaction();

            if($cliente) throw new \Exception('El usuario ya se encuentra registrado.');

            $cliente = new Usuario;
            $cliente->fill($request->except('clave'));
            $cliente->password = Hash::make($request->password);
            $cliente->save();

            DB::commit();

            Auth::attempt( $request->only('email', 'password') );

            return response(['url' => url()->previous() ],200);

        }catch(\Exception $e){

            DB::rollback();

            return response([ 'error' => $e->getMessage() ],500);

        }

    }

    public function login( Request $request )
    {

        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);

        $data = $request->only('email', 'password');

        try {

            if ( Auth::attempt($data,$request->remember) )
            {
                $response = (new ApiHelper)->sendCredentialsRequest();

                if(!$response || isset($response['error'])){
                    $this->logout();
                }

                return response([ 'url' => url()->previous() ], 200);
            }

            throw new \Exception('Cotraseña o correo incorrecto.');
        }
        catch(\Exception $e) {
            return response([ 'error'=> $e->getMessage() ],500);
        }
    }

    public function logout()
    {
        Auth::logout();

        session()->flush();

        return redirect()->to('/');
    }

    public function favoritos(Request $request)
    {

        try {

            $request->merge(['id_usuario' => Auth::user()->id]);

            if(!$request->telefono || !$request->codigo_telefono ){
                $request->request->remove('telefono');
                $request->request->remove('codigo_telefono');
            }

            if(!$request->telefono2 || !$request->codigo_telefono2)
            {
                $request->request->remove('telefono2');
                $request->request->remove('codigo_telefono2');
            }

            $response = (new ApiHelper)->sendApiRequest('api/usuarios/favoritos',$request->all());

            if(isset($response['error'])) throw new \Exception($response);

            return response()->json([
                'rows' => $response
            ], 200);

        } catch (\Exception $e) {

            return response()->json([
                'error' => $e->getLine().': '.$e->getMessage()
            ], 500);
        }
    }

    public function mis_propiedades(Request $request)
    {

        try {
            $request->merge([ 'id_usuario'=>Auth::user()->id ]);

            $response = (new ApiHelper)->sendApiRequest('api/usuarios/propiedades', $request->all());

            if(isset($response['error'])) throw new \Exception($response);

            return response()->json([
                'rows' => $response
            ],200);

        } catch (\Exception $e) {

            return response()->json([
                'error' => $e->getLine().': '.$e->getMessage()
            ],500);
        }
    }

    public function exportar( Request $request )
    {
        try {
            $request->merge([ 'id_usuario'=>Auth::user()->id ]);

            $response = (new ApiHelper)->sendApiRequest('api/usuarios/exportar', $request->all() );

            if(isset($response['error'])) throw new \Exception($response);

            if( count($response) ){
                $cabeza =[
                    'Titulo',
                    'Condicion',
                    'Tipo de Propiedad',
                    'Numero de piso',
                    'Numero de Domicilio',
                    'Numero de calle',
                    'Region',
                    'Comuna',
                    'Superficie',
                    'Terraza',
                    'Baños',
                    'Amoblado',
                    'Privado',
                    'Bodega',
                    'Estacionamiento',
                    'Estado'
                ];


                $response  = array_column($response, '_propiedades');
                $datos = [];
                foreach ($response as $key => $propiedad) {

                    $propiedad =(object) $propiedad;
                    $temp[$key]['Titulo'] = $propiedad->titulo ? $propiedad->titulo  : '-----';
                    $temp[$key]['Condicion'] = isset($propiedad->_tipo_propiedad) ? $propiedad->_tipo_propiedad :  '-----';
                    $temp[$key]['Tipo de Propiedad']=isset($propiedad->_subtipo_propiedad) ? $propiedad->_subtipo_propiedad : '-----';
                    $temp[$key]['Numero de piso'] = $propiedad->numero_piso ? $propiedad->numero_piso : '-----';
                    $temp[$key]['Numero de Domicilio'] = $propiedad->numero_domilicio ? $propiedad->numero_domilicio : '-----';
                    $temp[$key]['Numero de Calle'] = $propiedad->numero_calle ? $propiedad->numero_calle : '-----';
                    $temp[$key]['Region'] =  isset($propiedad->_region) ? $propiedad->_region['nombre'] : '-----';
                    $temp[$key]['Comuna'] = isset($propiedad->_comuna) ? $propiedad->_comuna['nombre'] : '-----';
                    $temp[$key]['Superficie'] = $propiedad->superficie_util ? $propiedad->superficie_util.' mts2' : '-----';
                    $temp[$key]['Terraza'] = $propiedad->superficie_terraza ? $propiedad->superficie_terraza.' mts2' : '-----';
                    $temp[$key]['Baños'] = $propiedad->banio > 0 ? $propiedad->banio : '0';
                    $temp[$key]['Amoblado'] = $propiedad->amoblada == 1 ? 'SI' : 'NO';
                    $temp[$key]['Privado'] = $propiedad->privado > 0 ? $propiedad->privado : '0';
                    $temp[$key]['Bodega'] = $propiedad->bodega > 0 ? $propiedad->bodega : '0';
                    $temp[$key]['Estacionamiento'] = $propiedad->estacionamiento > 0 ? $propiedad->estacionamiento : '0';
                    $temp[$key]['Estado'] = $propiedad->estado == 1 ? 'Activa' : 'Inactiva';
                    $datos[]= $temp;
                }
            }

            $this->excel($cabeza,$datos,'mis_favoritos_'.date('d-m-y'));

        } catch (\Exception $e) {

            return response()->json([
                'error' => $e->getLine().': '.$e->getMessage()
            ],500);
        }
    }
}

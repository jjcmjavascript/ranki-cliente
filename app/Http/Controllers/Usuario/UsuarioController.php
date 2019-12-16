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

                if(!$response){
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

    public function favoritos(Request $request){

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
    // propiedades ajustes
    public function mis_propiedades(Request $request){

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
}

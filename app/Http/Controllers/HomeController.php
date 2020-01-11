<?php

namespace App\Http\Controllers;

use DB;
use Auth;
use Illuminate\Http\Request;
use App\Models\Sistema\Usuario;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Extendidos\RecoveryPassword;
use ApiHelper;

class HomeController extends Controller
{
    use AuthenticatesUsers;

    public function index()
    {
        return view('vue');
    }

    public function ultimas_propieades ()
    {
        try {

            if( Auth::check() ){

                $response = (new ApiHelper)->publicRequest('api/propiedades/recientes', ['usuario_id'=> Auth::user()->id ]);

            }else{

                $response = (new ApiHelper)->publicRequest('api/propiedades/recientes');
            }

            if(isset($response['error'])) throw new \Exception($response);

            return response()->json( $response
            ,200);

        } catch (\GuzzleHttp\Exception\BadResponseException $e) {
            $response = $e->getResponse();
            $error = json_decode($response->getBody()->getContents(),true);

            return response($error, 500);
        }
    }

    public function reset_password ()
    {
        return view('vue');
    }

    public function send_mail (Request $request)
    {
        try {
            $user = Usuario::where('email', $request->email)
                ->whereNull('provider_id')
                ->first();
                // evitar los que tienen incio por google o gmail
            if(!$user)  throw new \Exception('Este usuario no esta habilitado para cambiar de contraseña.');

            $response = (new \App\Http\Controllers\Auth\ForgotPasswordController)->sendResetLinkEmail( $request );

            if(isset($response['error'])) throw new \Exception($response['error']);
            if(in_array('error',$response)) throw new \Exception($response[1]);

            return response($response, 200);

        } catch (\GuzzleHttp\Exception\BadResponseException $e) {

            $response = $e->getResponse();
            $error = json_decode($response->getBody()->getContents(),true);

            return response($error, 500);
        }

    }

    public function post_reset(Request $request)
    {
        try {
            $response = (new \App\Http\Controllers\Auth\ResetPasswordController)->reset( $request );

            if(isset($response['error'])) throw new \Exception($response['error']);
            if(in_array('error',$response)) throw new \Exception($response[1]);

            return response(['exito'=>'Tu contraseña ha sido modificada con exito'],200);

        } catch (\GuzzleHttp\Exception\BadResponseException $e) {

            $response = $e->getResponse();
            $error = json_decode($response->getBody()->getContents(),true);

            return response($error, 500);

        }

    }

    public function filtros( Request $request )
    {
        try {

            $response = (new ApiHelper)->publicRequest('api/propiedades/filtros', $request->all());

            if(isset($response['error'])) throw new \Exception($response);

            return response()->json($response ,200);

        } catch (\GuzzleHttp\Exception\BadResponseException $e) {

            $response = $e->getResponse();
            $error = json_decode($response->getBody()->getContents(),true);

            return response($error, 500);
        }
    }

    public function obtener_comuna( Request $request )
    {
        try {

            $response = (new ApiHelper)->publicRequest('api/propiedades/obtener_comuna', $request->all());

            if(isset($response['error'])) throw new \Exception($response);

            return response()->json($response ,200);

        } catch (\GuzzleHttp\Exception\BadResponseException $e) {

            $response = $e->getResponse();
            $error = json_decode($response->getBody()->getContents(),true);

            return response($error, 500);
        }
    }

    public function isLoged( Request $request )
    {
        if( Auth::check() ){

            return response([
                'isLoged' => Auth::check(),
                'rut' => Auth::user()->rut 
            ],200);
        }

        return response ([ 'isLoged' => false ],200);
    }

}

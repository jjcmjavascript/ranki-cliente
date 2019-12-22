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
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('vue');
    }

    public function ultimas_propieades ()
    {

        try {

            $response = (new ApiHelper)->publicRequest('api/propiedades/recientes');

            if(isset($response['error'])) throw new \Exception($response);

            return response()->json( $response
            ,200);

        } catch (\Exception $e) {

            return response()->json([
                'error' => $e->getLine().': '.$e->getMessage()
            ],500);
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

        } catch (\Exception $e) {

            return response(['error' =>$e->getMessage()],500);
        }

    }

    public function post_reset(Request $request)
    {
        try {
            $response = (new \App\Http\Controllers\Auth\ResetPasswordController)->reset( $request );

            if(isset($response['error'])) throw new \Exception($response['error']);
            if(in_array('error',$response)) throw new \Exception($response[1]);

            return response(['exito'=>'Tu contraseña ha sido modificada con exito'],200);

        } catch (\Exception $e) {
            return response(['error' =>$e->getMessage()],500);

        }

    }
}

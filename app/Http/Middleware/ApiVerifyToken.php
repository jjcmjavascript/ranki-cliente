<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use ApiHelper;
use Carbon\Carbon;

class ApiVerifyToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // if(!$this->verifyToken($request)){
        //     $this->closeAndRedirect($request);
        // };

        return $next($request);
    }

    private function verifyToken( $request )
    {

       if( !$this->exceptionRoutes( $request ) ) {
           $token_life = (int) session('api')->expires_in ; //expires in en segundos convertidos a minutos
           $diff = Carbon::parse( session('api')->created_at )->diffInSeconds( Carbon::now() );

           if( $diff  > $token_life ){
               $val = $this->getNewToken();

               if($val){
                   return true;
               }
               return false;
           }
           return true;
       }

    }

    private function getNewToken()
    {
        $ruta = 'oauth/token';
        $form_params = [
            'grant_type' => 'refresh_token',
            'client_id' => env('API_CLIENT_ID'),
            'client_secret' => env('API_CLIENT_SECRET'),
            'refresh_token'=> session('api')->refresh_token,
        ];
        $response = (new ApiHelper)->sendCredentialsRequest($ruta, $form_params);

    }


    private function closeAndRedirect($request)
    {
        session()->flush();

        if( $request->ajax() ){
            return response(
                [ 'exit' => env('APP_URL')]
            );
        }
        return redirect()->to('/');
    }

    private function exceptionRoutes( $request )
    {
        $ruta =  explode( '/', $request->getRequestUri() );
        $ruta = array_filter($ruta, function($ele){
            return !is_numeric($ele) ? trim($ele) : false;
        });
        $ruta = '/'.implode('/', $ruta);

        $exceptions = [
            '/',
            '/iniciar',
            '/perfil/logout'
        ];

        return in_array($ruta , $exceptions );
    }
}

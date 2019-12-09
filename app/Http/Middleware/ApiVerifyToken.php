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

        if(!$this->verifyToken($request)){

            session()->flush();

            if( $request->ajax() ){
                return response()->json([ 'exit' => env('APP_URL'),500]);
            }
            return redirect('/');
        };

        return $next($request);
    }

    private function verifyToken( $request )
    {

       if( !$this->exceptionRoutes( $request ) ) {
           // si estas logeado pero no tienes session api
           if(Auth::check() && !session('api') ) return false;
           // verificiacion del time
           $token_life = (int) session('api')->expires_in ; //expires in en segundos convertidos a minutos
           $diff = Carbon::parse( session('api')->created_at )->diffInSeconds( Carbon::now() );

           if( $diff  > $token_life ){
               return $this->getNewToken();
           }
           return true;
       }

    }

    private function getNewToken()
    {
        $response = (new ApiHelper)->sendCredentialsRequest('refresh');
        if($response){
            return true;
        }
        return false;
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
            '/perfil/logout',
            '/auth/google',
            '/auth/facebook',
        ];

        return in_array($ruta , $exceptions );
    }
}

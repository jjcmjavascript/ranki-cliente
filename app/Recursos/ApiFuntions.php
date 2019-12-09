<?php

namespace App\Recursos;

use Auth;
use ApiHelper;
use Carbon\Carbon;
trait ApiFuntions
{

  public function sendCredentialsRequest()
  {

    try {

      $ruta = 'oauth/token';
      $form_params = [
        'grant_type' => 'password',
        'client_id' => env('API_CLIENT_ID'),
        'client_secret' => env('API_CLIENT_SECRET'),
        'username' =>Auth::user()->email,
        'password'=> Auth::user()->password,
      ];

      $response = (new ApiHelper)->sendCredentialsRequest($ruta, $form_params);
      $response = array_merge($response, [ 'created_at', Carbon::now() ]);
      session(['api' => (object)$response]);

      return true;

    }
    catch (\Exception $e) {

      return false;

    }

  }

  public function verifyToken( $request )
  {
     if( !$this->exceptionRoutes( $request ) ) {

         $token_life = (int) session('api')->expires_in ; //expires in en segundos convertidos a minutos
         $diff = Carbon::parse( session('api')->created_at )->diffInSeconds( Carbon::now() );

         if( $diff  > $token_life ){
             $this->getNewToken();
         }
     }

  }

  public function exceptionRoutes( $request )
  {
      $exceptions = [
          '/iniciar',
      ];

      return in_array( $request->getRequestUri(), $exceptions );
  }

  public function getNewToken()
  {
    try {
      $ruta = 'oauth/token';
      $form_params = [
        'grant_type' => 'refresh_token',
        'client_id' => env('API_CLIENT_ID'),
        'client_secret' => env('API_CLIENT_SECRET'),
        'refresh_token'=> session('api')->refresh_token,
      ];

      $response = (new ApiHelper)->sendCredentialsRequest($ruta, $form_params);

    } catch (\Exception $e) {

      return false;

    }

  }

  public function closeAndRedirect()
  {
      session()->flush();

      return response(
        [ 'exit' => env('APP_URL')]
      );
  }

}

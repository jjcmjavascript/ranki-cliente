<?php

namespace App\Helpers;

use Auth;
use Carbon\Carbon;

class ApiHelper {

	function __construct()
	{
		$this->guzzle = new \GuzzleHttp\Client();
	}

	 /**
     * Returns a credentials API access
     *
     * @param string $ruta
     * Ruta para conexión API
     *
     * @param array $form_params
     * Parametros enviado a la peticición
     *
     * @param array $getOnlyBody
     * Obtener solo el cuerpo de la petición
     *
     * @return response on array with [token_type, expires_in ,access_token, refresh_token]
     *
     * */

	public function sendCredentialsRequest( $type = 'default', $getOnlyBody = true)
	{
		try {
			$ruta = 'oauth/token';
			$form_params = [];

			switch ($type) {

				case 'default':
				$form_params = [
					'grant_type' => 'password',
					'client_id' => 1,
					'client_secret' => 'ETmkZ9h6ytzjZ5pAFxdTFYDAjQsheByOf5U2yx4Y',
					'username' =>Auth::user()->email,
					'password'=> Auth::user()->password,
				];
				break;
				case 'refresh':
				$form_params = [
					'grant_type' => 'refresh_token',
					'client_id' => 1,
					'client_secret' => 'ETmkZ9h6ytzjZ5pAFxdTFYDAjQsheByOf5U2yx4Y',
					'refresh_token'=> session('api')->refresh_token,
				];
				break;
				case 'social':
				$form_params = [
					'grant_type' => 'social',
					'client_id' => 1,
					'client_secret' => 'ETmkZ9h6ytzjZ5pAFxdTFYDAjQsheByOf5U2yx4Y',
					'provider' => Auth::user()->provider, // provider
					'access_token' => Auth::user()->provider_id, // provider_id
				];
				break;
			}

			$response = $this->guzzle->post( env('API_CONNECTION').$ruta, [
				'form_params' => $form_params
			]);

			if($getOnlyBody) {
				$response = $response->getBody();
			}

			$response = json_decode( (string) $response, true);

			if( !isset($response['error']) ){
				$response = array_merge($response,['created_at'=>Carbon::now()]);
				session(['api' => (object)$response]);

				return true;
			}
			return false;

		} catch (\Exception $e) {
			return $e->getMessage();
		}

	}

	public function sendApiRequest($ruta, $form_params = null, $getOnlyBody = true)
    {

		$headers = [
			'Accept' => 'application/json',
			'Authorization' => session('api')->token_type.' '.session('api')->access_token
		];

        $response = $this->guzzle->post( \Config::get('app.api_connection'). $ruta, [
          'headers' => $headers,
          'form_params' => $form_params,
        ]);

        if($getOnlyBody){
        	$response = $response->getBody();
        }

        return json_decode((string) $response, true);
    }
}

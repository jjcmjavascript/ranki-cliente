<?php

namespace App\Helpers;

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

	public function sendCredentialsRequest($ruta, $form_params, $getOnlyBody = true) 
	{
		$response = $this->guzzle->post( env('API_CONNECTION').$ruta, [
        	'form_params' => $form_params
        ]);

        if($getOnlyBody) {
        	$response = $response->getBody();
        }

        return json_decode((string) $response, true);
	}

    /**
     * Returns a response request API
     *
     * @param string $ruta
     * Ruta para conexión API
     *
     * @param array $headers
     * Headers de la petición
     *
     * @param array $form_params
     * Parametros enviado a la peticición
     *
     * @param array $getOnlyBody
     * Obtener solo el cuerpo de la petición
     *
     * @return response on array
     *
     * */
    public function sendApiRequest($ruta, $headers, $form_params, $getOnlyBody = true)
    {
        $response = $this->guzzle->post( env('API_CONNECTION'). $ruta, [
          'headers' => $headers,
          'form_params' => $form_params,
        ]);

        if($getOnlyBody){
        	$response = $response->getBody();
        }

        return json_decode((string) $response, true);
    }
}
<?php
namespace App\Extendidos;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;

class RecoveryPassword
{
    use SendsPasswordResetEmails;

    public function sendMail($request){

        try {

            $response = $this->sendResetLinkEmail($request);

            // lo hago asi , pues tira dos tipos de errores
            // error validacion y de codigo en caso con estructuras diferentes
            if(in_array('error', $response ) ){
                throw new \Exception($response[1]);
            }
            if(isset($response['error'])){
                throw new \Exception($response['error']);
            }

            return $response;

        } catch (\Exception $e) {

            return ['error' => $e->getMessage() ];

        }
    }


}

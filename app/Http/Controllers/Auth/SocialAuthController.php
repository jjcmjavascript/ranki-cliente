<?php

namespace App\Http\Controllers\Auth;

use Auth;
use Socialite;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Helpers\ApiHelper;
use App\Models\Sistema\Usuario;

class SocialAuthController extends Controller
{
    // Metodo encargado de la redireccion a Red Social
    public function redirectToProvider($provider)
    {
        return Socialite::driver($provider)->redirect();
    }
    
    // Metodo encargado de obtener la información del usuario
    public function handleProviderCallback($provider)
    {
        // Obtenemos los datos del usuario
        $social_user = Socialite::driver($provider)->user(); 
        // Comprobamos si el usuario ya existe
        if ($user = Usuario::where('email', $social_user->email)->first()) { 
            return $this->authAndRedirect($user); // Login y redirección
        } else {  
            // En caso de que no exista creamos un nuevo usuario con sus datos.
            $user = Usuario::create([
                'nombre' => $social_user->name,
                'email' => $social_user->email,
                'avatar' => $social_user->avatar,
                'provider' => $provider,
                'provider_id' => $social_user->id,
            ]);

            return $this->authAndRedirect($user); // Login y redirección
        }
    }

    // Login y redirección
    public function authAndRedirect($user)
    {
        try {    
            Auth::login($user);      

            $ruta = 'oauth/token';
            
            $form_params = [
                'grant_type' => 'client_credentials',
                'client_id' => env('API_CLIENT_ID'),
                'client_secret' => env('API_CLIENT_SECRET'),
            ];
            
            $response = (new ApiHelper)->sendCredentialsRequest($ruta, $form_params);

            // SET API SESSION WITH CREDENTIALS
            session(['api' => (object)$response]);

            return \Redirect::back();
        }
        catch(\Exception $e) {
            return response([ 'error'=> $e->getMessage() ],500);
        }
    }
}

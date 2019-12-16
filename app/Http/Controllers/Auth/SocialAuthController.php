<?php

namespace App\Http\Controllers\Auth;

use Auth;
use Socialite;
use ApiHelper;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
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
            $response = (new ApiHelper)->sendCredentialsRequest('social');

            if($response['error']){
                session()->flush();
                return redirect('/');
            }
            // SET API SESSION WITH CREDENTIALS
            return \Redirect::back();
        }
        catch(\Exception $e) {
            session()->flush();
            return redirect('/');
        }
    }
}

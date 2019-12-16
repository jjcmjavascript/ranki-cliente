<?php

namespace App\Http\Controllers;

use DB;
use Auth;
use Illuminate\Http\Request;
use App\Models\Sistema\Usuario;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\AuthenticatesUsers;


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
    
    public function ultimas_propieades () {

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


}

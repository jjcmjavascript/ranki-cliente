<?php

namespace App\Http\Controllers;

use DB;
use Auth;
use Illuminate\Http\Request;
use App\Models\Sistema\Cliente;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\AuthenticatesUsers;


class HomeController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('vue');
    }

    public function crear(Request $request)
    {
        $this->validate($request, [
            'nombre' => 'required|string',
            'apellidos' => 'required|string',
            'rut' => 'required|string', 
            'telefono_movil' => 'sometimes|string',
            'direccion' => 'sometimes|string',
            'email' => 'required|email:rfc,dns',
            // 'perfil_id' => 'required|exists:perfiles,id',
            'password' => 'required|confirmed|min:8',
        ]);
        
        $cliente = Cliente::where('email', $request->email)
            ->orWhere('rut', $request->rut)
            ->first();

        try {

            DB::beginTransaction();

            if($cliente) throw new \Exception('El usuario ya se encuentra registrado.');

            $cliente = new Cliente;
            $cliente->fill($request->except('clave'));
            $cliente->password = Hash::make($request->clave);
            $cliente->save();

            DB::commit();

            return response(['url'=>env('APP_URL').'inicio'],200);

        }catch(\Exception $e){

            DB::rollback();

            return response([ 'error'=>$e->getMessage() ],500);

        }

    }
    public function login( Request $request )
    {


        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);

        $data = $request->only('email', 'password');

        try {

            if (Auth::attempt(['email'=>$request->email,'password'=>$request->password]))
                {
                    return response(['url'=>env('APP_URL').'inicio'],200);

                }

            throw new \Exception('El usuario no se encuentra registrado.');

        }catch(\Exception $e){

            return response(['error'=> $e->getMessage() ],500);

        }

    }

    public function logout()
    {
        Auth::logout();

        return redirect('/');
    }
}

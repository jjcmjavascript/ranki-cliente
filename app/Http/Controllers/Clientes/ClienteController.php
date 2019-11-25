<?php

namespace App\Http\Controllers\Clientes;

use DB;
use Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\Sistema\Cliente;
use App\Http\Controllers\Controller;

class ClienteController extends Controller
{
    
    
    public function vue() 
    {  
        return view('vueDashboard');  
    }

    public function logout( Request $request )
    {

        Auth::logout();

        return redirect()->to('/');
    }

    public function iniciar()
    {
        try{
            $usuario = Cliente::where('id',Auth::user()->id)->first();
            
            return response(['usuario'=>$usuario],200);

        }
        catch( \Exception $e){

            return response(['error'=>'Hubo un error al obtener sus datos.'],500);
        }

    }

    public function editar(Request $request)
    {
        $this->validate($request, [
            'id' =>'required|exists:clientes,id',
            'nombre'  => 'nullable|string|max:30',
            'apellidos'=> 'nullable|string|max:100',
            'direccion'  => 'nullable|string',
            'telefono_fijo'  => 'nullable|numeric',
            'telefono_movil'  => 'nullable|numeric',
            'email'=> 'email|unique:clientes,email'
        ]);
        try {
            DB::beginTransaction();

            $usuario = Cliente::where('id', $request->id)->first();
            $usuario->fill($request->all());
            $usuario->save();

            DB::commit();

            return response(['usuario'=>$usuario],200);

        }catch(\Exception $e){
            DB::rollback();

            return response(['error'=> $e->getMessage()],500);
        }


    }

    public function editar_clave( Request $request )
    {
        $this->validate($request, [
            'id' =>'required|exists:clientes,id',
            'actual' => 'string|required',
            'password' => 'string|confirmed|min:8',
        ]);
        
        try {
            DB::beginTransaction();

            $usuario = Cliente::where('id', $request->id)->first();

            if( Hash::check($request->actual, $usuario->password ) ){

                $usuario->password = Hash::make($request->password);
                $usuario->save();
            }else {

                throw new \Exception('Contraseña actual no coincide.');

            }

            DB::commit();

            return response(['usuario'=>$usuario],200);

        }catch(\Exception $e){
            DB::rollback();

            return response(['error'=> $e->getMessage()],500);
        }

    }


}

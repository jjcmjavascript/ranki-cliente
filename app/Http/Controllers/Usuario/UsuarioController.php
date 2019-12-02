<?php

namespace App\Http\Controllers\Usuario;

use DB;
use Auth;
use Storage;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\Sistema\Usuario;
use App\Models\Comun\Imagen;
use App\Http\Controllers\Controller;

class UsuarioController extends Controller
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

            $usuario = Usuario::where('id',Auth::user()->id)
            ->with('_avatar')
            ->first();

            return response(['usuario'=>$usuario],200);

        }
        catch( \Exception $e){

            return response(['error'=>$e->getMessage()],500);
        }

    }

    public function editar(Request $request)
    {
        $this->validate($request, [
            'id' =>'required|exists:usuarios,id',
            'nombre'  => 'nullable|string|max:30',
            'apellidos'=> 'nullable|string|max:100',
            'direccion'  => 'nullable|string',
            'telefono_fijo'  => 'nullable|numeric',
            'telefono_movil'  => 'nullable|numeric',
            'imagen' => 'nullable|image|max:2048',

        ]);
        try {

            $usuario = Usuario::where('id', $request->id)
            ->where('id',Auth::user()->id)
            ->with('_avatar')
            ->first();

            DB::beginTransaction();

            $usuario->fill($request->except('email'));

            if($request->email){

                if( $usuario->email != $request->email ){

                    $this->validate($request, [
                        'email'=> 'email|unique:usuarios,email'
                    ]);

                    $usuario->email = $request->email;
                }
            }
            // avatar
            if($request->imagen){

              $file = $request->imagen;
              $filename = base64_encode(time().'_avatar_').'.'.$file->getClientOriginalExtension();
              $original_name = $file->getClientOriginalName();
              $imagen = new Imagen;

              if( Storage::disk('public')->putFileAs('avatars/'.base64_encode(Auth::user()->id), $file, $filename) )
              {
                  $imagen = new Imagen;

                  $imagen->fill([
                      'nombre' => $filename,
                      'nombre_original'=> $original_name,
                      'ruta'=> 'avatars/'.base64_encode(Auth::user()->id).'/'.$filename,
                      'imageable_id'=>Auth::user()->id,
                      'imageable_type'=>'App\Models\Sistema\Usuario'
                  ]);

                  $imagen->save();

              }

              $imagen->save();

            }

            $usuario->save();

            DB::commit();
            $usuario->refresh();
            return response(['usuario'=>$usuario],200);

        }catch(\Exception $e){
            DB::rollback();

            return response(['error'=> $e->getMessage()],500);
        }


    }

    public function editar_clave( Request $request )
    {
        $this->validate($request, [
            'id' =>'required|exists:usuarios,id',
            'actual' => 'string|required',
            'password' => 'string|confirmed|min:8',
        ]);

        try {
            DB::beginTransaction();

            $usuario = Usuario::where('id', $request->id)->first();

            //si esta logeado por redes sociales no pude cambiar pass
            if($usuario->provider_id){
              throw new \Exception('Acción invalida para estra cuenta');
            }

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

    public function avatar(Request $request)
    {
        $this->validate($request, [
            'id' =>'required|exists:usuarios,id',
            'imagen' => 'required|image|max:2048',
        ]);

        try {
             $usuario = Usuario::where('id',$request->id)
            ->with('_avatar')
            ->first();

            if( $usuario->id != Auth::user()->id ) {
                throw new \Exception('Un error ha ocurrido.');
            };

            $file = $request->imagen;
            $filename = base64_encode(time().'_avatar_').'.'.$file->getClientOriginalExtension();
            $original_name = $file->getClientOriginalName();

            DB::beginTransaction();

            if( Storage::disk('public')->putFileAs('avatars/'.base64_encode(Auth::user()->id), $file, $filename) )
            {
                $imagen = new Imagen;

                $imagen->fill([
                    'nombre' => $filename,
                    'nombre_original'=> $original_name,
                    'ruta'=> 'avatars/'.base64_encode(Auth::user()->id).'/'.$filename,
                    'imageable_id'=>Auth::user()->id,
                    'imageable_type'=>'App\Models\Sistema\Usuario'
                ]);

                $imagen->save();

            }
            else{

                throw new \Exception('La imagen no pudo ser almaenada.');

            }

            DB::commit();
            //carga
            $usuario = Usuario::where('id',$request->id)
            ->with('_avatar')
            ->first();

            return response([
                'usuario'=> $usuario,
            ],200);

        }
        catch(\Exception $e){

            return response(['
                error'=>$e->getLine().':'.$e->getMessage()
            ],500);

        }

    }

}

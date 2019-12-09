<?php

namespace App\Http\Controllers\Propiedad;

use DB;
use Auth;
use Storage;
use ApiHelper;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\Sistema\Usuario;
use App\Models\Comun\Imagen;
use Carbon\Carbon;

class PropiedadController extends Controller
{
    public function vue()
    {
        return view('vue');
    }

    public function index ()
    {
        
    }

    public function crear()
    {
        try {

            $response = (new ApiHelper)->sendApiRequest('api/propiedades/crear');

            if(isset($response['error'])) throw new \Exception($response);

            return response($response,200);

        } catch (\Exception $e) {

            return response([
                'error' => $e->getMessage()
            ], 500);
        }
    }


}

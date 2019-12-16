<?php

namespace App\Http\Controllers\Comun;

use ApiHelper;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ComunaController extends Controller
{
    public function combo_box ( Request $request ) 
    {
    	 try {
            $response = (new ApiHelper)->sendApiRequest('api/combo_box/comunas', $request->all());

            if(isset($response['error'])) throw new \Exception($response);

            return response($response, 200);

        } catch (\Exception $e) {

            return response([
                'error' => $e->getMessage()
            ], 500);
        }
    }
}

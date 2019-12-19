<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Recursos\ApiFuntions;
use App\Traits\ExcelGenerador;
use Maatwebsite\Excel\Facades\Excel;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    function formatFileMultipartRequest($multipart, $request = [], $array_name = null, $set_array = true)
    {
        $array = $array_name ? $request[$array_name] : $request;

        foreach($array as $key => $value) {
            if(is_file($value->getPathname())) {
                $name = $array_name ? $array_name : $key;
                $name .= $set_array ? '[]' : '';

                $data = [
                    'name'         => $name,
                    'Mime-Type'    => $value->getmimeType(),
                    'filename'     => $value->getClientOriginalName(),
                    'contents'     => fopen($value->getPathname(), 'r')
                ];

                $multipart[] = $data;
            }
        }

        return $multipart;
    }

    function formatDataMultipartRequest($multipart, $request = [], $array_name = null, $set_array = false)
    {
    	foreach ($request as $key => $value) {
            if(is_array($value)) {
                $multipart = array_merge(
                    $multipart,
                    $this->formatDataMultipartRequest([], $value, $key, true)
                );
            }
            else {
                $name = $array_name ? $array_name : $key;
                $name .= $set_array ? '[]' : '';

                $data = [
                    'name' => $name,
                    'contents' => $value
                ];

                $multipart[] = $data;
            }
    	}

    	return $multipart;
    }

    public function generarExcel($datos,$cabezera,$nombre,$ext = 'xlsx')
    {
        return Excel::download(new ExcelGenerador($datos,$cabezera), $nombre.'.'.$ext);
    }
}

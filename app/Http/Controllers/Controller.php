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

    public function generarExcel($datos,$cabezera,$nombre,$ext = 'xlsx')
    {
        return Excel::download(new ExcelGenerador($datos,$cabezera), $nombre.'.'.$ext);
    }
}

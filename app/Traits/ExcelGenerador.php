<?php

namespace App\Traits;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ExcelGenerador implements FromCollection, WithHeadings
{

    function __construct($datos,$cabezera)
    {
        $this->datos = $datos;
        $this->cabezera = $cabezera;
    }

    public function collection()
    {
        return collect($this->datos);
    }

    public function headings(): array
    {
        return $this->cabezera;
    }
}

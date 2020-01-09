<?php

namespace App\Models\Comun;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Imagen extends Model
{
    use SoftDeletes;
    protected $table = 'com_imagenes';
    protected $fillable= [
        'nombre', 'nombre_original', 'ruta', 'imageable_id', 'imageable_type'
    ];

    public function imageable()
    {
        return $this->morphTo();
    }

}

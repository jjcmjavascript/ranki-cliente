<?php
namespace App\Models\Sistema;

use Illuminate\Database\Eloquent\Model;

class Perfiles extends Model
{
    protected $fillable = ['nombre', 'activo'];

    public function scopeActivo($query)
    {
        return $query->where('activo', 1);
    }

    public function scopeBuscar($query, $request)
    {
        if($request->id) {
            $query->where('id', $request->id); 
        }
        if($request->nombre) {
            $query->where('nombre', 'LIKE', '%'.$request->nombre.'%');     
        }
        if(isset($request->estado)) {
            $query->where('activo', $request->estado);
        }

        return $query;
    }
}
<?php
namespace App\Models\Sistema;

use Illuminate\Database\Eloquent\Model;

class Perfiles extends Model
{
<<<<<<< HEAD
    protected $table ="clt_perfiles";
    
=======
    protected $table = 'clt_perfiles';
>>>>>>> f4b3b7849daf8c72a4b0d2b84e0c0b56a100d371
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

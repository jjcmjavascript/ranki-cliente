<?php
namespace App\Models\Sistema;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
//use Illuminate\Database\Eloquent\SoftDeletes;

class Usuarios extends Authenticatable
{
    use Notifiable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre', 'apellidos', 'email', 'rut', 'direccion',
        'telefono_movil', 'telefono_fijo', 'avatar', 'provider', 
        'provider_id', 'perfil_id', 'activo', 'password',
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function _perfil()
    {
        return $this->belongsTo('App\Models\Sistema\Perfiles', 'perfil_id');
    }

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
        if($request->email) {
            $query->where('email', $request->email); 
        }
        if(isset($request->estado)) {
            $query->where('activo', $request->estado);
        }

        return $query;
    }
}
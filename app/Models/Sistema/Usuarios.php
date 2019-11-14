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
        'telefono_movil', 'telefono_fijo', 'password',
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

    public function scopeBuscar($query, $request)
    {
        if($request->id) {
            $query->where('id', $request->id); 
        }
        if($request->nombre) {
            $query->where('nombre', $request->nombre);     
        }
        if($request->email) {
            $query->where('email', $request->email); 
        }

        return $query;
    }
}
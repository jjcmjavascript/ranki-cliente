<?php
namespace App\Models\Sistema;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Notifications\Notifiable;
// use Illuminate\Database\Eloquent\SoftDeletes;

class Usuario extends Authenticatable
{
    use Notifiable;
    // use softDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

     public $api;

    protected $table = 'usuarios';
    protected $primaryKey = 'id';
    protected $fillable = [
        'id','nombre', 'apellidos', 'email', 'rut', 'direccion',
        'telefono_movil', 'telefono_fijo', 'avatar', 'provider',
        'provider_id', 'perfil_id', 'activo', 'password',
    ];
    protected $appends = [ 'api_token'];
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

    public function _avatar()
    {
        return $this->morphMany('App\Models\Comun\Imagen','imageable');
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

    public function getApiTokenAttribute()
    {
      return $this->api;
    }

}

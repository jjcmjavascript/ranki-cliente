<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Exceptions extends Model
{
    const UPDATED_AT = null;
    protected $table = 'com_exceptions';
    protected $fillable = ['usuario_id' , 'code' , 'file' , 'line' , 'message' , 'action', 'input' ];
}
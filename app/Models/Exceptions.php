<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Exceptions extends Model
{
    const UPDATED_AT = null;
    protected $table = 'com_exceptions';
<<<<<<< HEAD
    protected $fillable = [ 'user_type', 'user_id', 'code', 'file', 'line', 'message', 'action', 'input'];
}
=======
    protected $fillable = ['usuario_id' , 'code' , 'file' , 'line' , 'message' , 'action', 'input' ];
}
>>>>>>> f4b3b7849daf8c72a4b0d2b84e0c0b56a100d371

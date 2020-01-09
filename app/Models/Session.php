<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Session extends Model{
    protected $table = 'clt_sessions';
    protected $timestamps = false;
    protected $fillable = ['user_id'];
}
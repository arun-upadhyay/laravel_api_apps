<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostUser extends Model
{
    use HasFactory;

    protected $table = "post_user";

    protected $fillable = [
        'user_id',
        'post_id',
    ];
    private $post_id;
    private $user_id;

}

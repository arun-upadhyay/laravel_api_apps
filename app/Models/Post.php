<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
    ];
    private $title;
    /**
     * @var false|string
     */
    private $body;
    /**
     * @var \Illuminate\Support\Carbon
     */
    private $created_at;
    /**
     * @var \Illuminate\Support\Carbon
     */
    private $updated_at;

}

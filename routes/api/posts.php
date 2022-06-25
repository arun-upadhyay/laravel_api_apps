<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;

Route::group([
    'middleware' => 'api'
], function ($router) {
    Route::get('/post', [PostController::class, 'getPosts']);
    Route::post('/post/add', [PostController::class, 'addPost']);
    Route::delete('/post', [PostController::class, 'deletePost']);
});

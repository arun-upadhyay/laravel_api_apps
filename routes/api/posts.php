<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;

Route::group([
    'middleware' => 'api'
], function ($router) {
    Route::get('/post', [PostController::class, 'getPosts']);
    Route::post('/post', [PostController::class, 'addPost']);
    Route::put('/post', [PostController::class, 'editPost']);
    Route::delete('/post', [PostController::class, 'deletePost']);
});
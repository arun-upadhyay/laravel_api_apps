<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;

Route::group([
    'middleware' => 'api'
], function ($router) {
    Route::get('/post', [PostController::class, 'get']);
    Route::post('/post', [PostController::class, 'create']);
    Route::put('/post', [PostController::class, 'update']);
    Route::delete('/post', [PostController::class, 'delete']);
});

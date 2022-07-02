<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostUser;
use App\Repositories\PostRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    protected $user;

    public function __construct()
    {
        $this->user = JWTAuth::parseToken()->authenticate();
    }

    public function get()
    {
        return Post::query()->paginate(5);
    }

    public function update(Request $request, PostRepository $repository)
    {
        return $repository->update($request->only([
            'id',
            'title',
            'body'
        ]));
    }

    public function create(Request $request, PostRepository $repository)
    {
        return $repository->create($request->only([
            'user_id',
            'title',
            'body'
        ]));
    }

    public function delete(Request $request, PostRepository $repository)
    {

        return $repository->delete($request->only(['id']));

    }
}

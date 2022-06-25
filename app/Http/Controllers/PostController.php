<?php

namespace App\Http\Controllers;

use App\Models\Post;
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

    public function getPosts()
    {
        return Post::all();
    }

    public function editPost(Request $request)
    {
        $id = $request->id;
        $post = Post::find($id);
        if ($post instanceof Post) {
            $post->title = $request->title;
            $post->description = $request->description;
            $post->save();
            return response()->json(['success' => true, 'last_id_saved' => $post->id], 200);
        } else {
            return response()->json(['success' => false, 'message' => "database record not found"], 4500);
        }

        return response()->json(['success' => false, 'message' => "Error in DB Operation"], 500);
    }

    public function addPost(Request $request)
    {
        $post = new Post();
        $post->title = $request->title;
        $post->description = $request->description;
        $post->created_at = now();
        $post->updated_at = now();
        if ($post->save()) {
            return response()->json(['success' => true, 'last_insert_id' => $post->id], 200);
        } else {
            return response()->json(['success' => 0, 'message' => "Error in DB Operation"], 500);
        }
    }

    public function deletePost(Request $request)
    {
        $id = $request->id;
        $post = Post::find($id); //primary id
        if ($post instanceof Post && $post->delete()) {
            return response()->json(['success' => true, 'last_deleted_id' => $id], 200);
        } else {
            return response()->json(['success' => false, 'message' => "{$id} is not found"], 200);
        }
    }
}

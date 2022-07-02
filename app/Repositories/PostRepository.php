<?php

namespace App\Repositories;

use App\Models\Post;
use App\Models\PostUser;
use App\Models\User;

class PostRepository extends BaseRepository
{

    public function create(array $attributes)
    {
        $user_id = data_get($attributes, 'user_id');
        if (!User::find($user_id)) {
            return response()->json(['success' => 0, 'message' => "User with ID{$user_id} is not found"], 500);
        }
        $post = new Post();
        $post->title = data_get($attributes, 'title');
        $post->body = json_encode(data_get($attributes, 'body'));
        $post->created_at = now();
        $post->updated_at = now();

        if ($post->save()) {
            $postUser = new PostUser();
            $postUser->post_id = $post->id;
            $postUser->user_id = $user_id;
            $postUser->save();

            return response()->json(['success' => true, 'last_insert_id' => $post->id], 200);
        } else {
            return response()->json(['success' => 0, 'message' => "Error in DB Operation"], 500);
        }
    }

    public function update(array $attributes)
    {
        $id = data_get($attributes, 'id');
        $post = Post::find($id);
        if ($post instanceof Post) {
            $post->title = data_get($attributes, 'title');
            $post->body = json_encode(data_get($attributes, 'body'));

            $post->save();
            return response()->json(['success' => true, 'last_id_saved' => $post->id], 200);
        } else {
            return response()->json(['success' => false, 'message' => "database record not found"], 4500);
        }
        return response()->json(['success' => false, 'message' => "Error in DB Operation"], 500);
    }

    public function delete(array $attributes)
    {
        $id = data_get($attributes, 'id');
        $post = Post::find($id);
        if ($post instanceof Post && $post->id >= 0) {
            PostUser::where('post_id', $id)->delete();
            $post->delete();
            return response()->json(['success' => true, 'last_deleted_id' => $id], 200);
        } else {
            return response()->json(['success' => false, 'message' => "{$id} is not found"], 200);
        }
    }
}

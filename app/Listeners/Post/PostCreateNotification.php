<?php

namespace App\Listeners\Post;

use App\Events\Post\PostCreateEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use function Symfony\Component\String\append;

class PostCreateNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param \App\Events\PostCreateEvent $event
     * @return void
     */
    public function handle(PostCreateEvent $event)
    {
        $post = $event->getPost();
        $message = "Post with Id {$post->id} is created";
        $path = base_path() . '/logger/async_logs.txt';
        if (file_exists($path)) {
            file_put_contents($path, PHP_EOL . $message, FILE_APPEND | LOCK_EX);
        }
    }
}

<?php

namespace App\Subscribers\Models;

use App\Events\Post\PostCreateEvent;
use App\Listeners\Post\PostCreateNotification;
use Illuminate\Events\Dispatcher;

class  PostSubcriber
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(PostCreateEvent::class, PostCreateNotification::class);
    }
}

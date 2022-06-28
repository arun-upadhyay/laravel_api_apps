<?php

namespace App\Repositories;

abstract class BaseRepository
{
    abstract public function create();

    abstract public function update();

    abstract public function delete();

}

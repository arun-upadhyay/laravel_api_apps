<?php

namespace App\Repositories;

abstract class BaseRepository
{
    abstract public function create(array $attribute);

    abstract public function update(array $attribute);

    abstract public function delete(array $attribute);

}

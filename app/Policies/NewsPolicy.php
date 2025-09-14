<?php

namespace App\Policies;

use App\Models\News;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class NewsPolicy
{
    use HandlesAuthorization;

    public function before(User $user, $ability)
    {
        if ($user->role === 'admin') {
            return true; // admin bisa semua
        }
    }

    public function update(User $user, News $news)
    {
        return $user->id === $news->user_id;
    }

    public function delete(User $user, News $news)
    {
        return $user->id === $news->user_id;
    }
}

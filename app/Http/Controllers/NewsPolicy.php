<?php

namespace App\Policies;

use App\Models\News;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class NewsPolicy
{
    use HandlesAuthorization;

    /**
     * Admin otomatis bisa melakukan apa saja
     */
    public function before(User $user, $ability)
    {
        if ($user->role === 'admin') {
            return true;
        }
    }

    /**
     * Cek apakah user bisa update news
     */
    public function update(User $user, News $news)
    {
        return $user->id === $news->user_id;
    }

    /**
     * Cek apakah user bisa delete news
     */
    public function delete(User $user, News $news)
    {
        return $user->id === $news->user_id;
    }
}

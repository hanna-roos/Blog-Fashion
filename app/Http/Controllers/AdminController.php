<?php

namespace App\Http\Controllers;
use App\Models\User;
use Inertia\Inertia;
use App\Models\News;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function dashboard()
    {
        $news = News::latest()->get();
        $users = User::all();
        return Inertia::render('Admin/Dashboard', [
            'news' => $news,
            'users' => $users,
        ]);
    }
}
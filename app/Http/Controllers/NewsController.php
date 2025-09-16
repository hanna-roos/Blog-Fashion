<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth'); // semua method butuh login
    }

    public function index()
    {
        $news = News::latest()->get();
        return Inertia::render('News/Index', ['news' => $news]);
    }

    public function create()
    {
        return Inertia::render('News/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'judul'     => 'required|string|max:255',
            'deskripsi' => 'required|string|max:255',
            'kategori'  => 'required|string|max:255',
            'author'    => 'required|string|max:255',
            'image'     => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        // limit post user
        $limit = 10;
        if (auth()->user()->news()->count() >= $limit && auth()->user()->role !== 'admin') {
            return back()->with('error', 'Limit post blog sudah tercapai');
        }

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('news_images', 'public');
        }

        News::create([
            'judul'     => $request->judul,
            'deskripsi' => $request->deskripsi,
            'kategori'  => $request->kategori,
            'author'    => $request->author,
            'image'     => $imagePath,
            'user_id'   => auth()->id(),
        ]);

        return redirect()->route('news.index')->with('success', 'News created successfully');
    }

    public function edit(News $news)
    {
        $this->authorize('update', $news);

        return Inertia::render('News/Edit', ['news' => $news]);
    }

    public function update(Request $request, News $news)
    {
        $this->authorize('update', $news);

        $request->validate([
            'judul'     => 'required|string|max:255',
            'deskripsi' => 'required|string|max:255',
            'kategori'  => 'required|string|max:255',
            'author'    => 'required|string|max:255',
            'image'     => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        $imagePath = $news->image;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('news_images', 'public');
        }

        $news->update([
            'judul'     => $request->judul,
            'deskripsi' => $request->deskripsi,
            'kategori'  => $request->kategori,
            'author'    => $request->author,
            'image'     => $imagePath,
        ]);

        return redirect()->route('news.index')->with('success', 'News updated successfully');
    }

    public function destroy(News $news)
    {
        $this->authorize('delete', $news);

        $news->delete();
        return redirect()->route('news.index')->with('success', 'News deleted successfully');
    }

    public function show(News $news)
    {
        return Inertia::render('News/Show', ['news' => $news]);
    }
}

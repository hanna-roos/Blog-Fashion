<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        $news = News::latest()->get();
        return Inertia::render('News/Index', [
            'news' => $news
        ]);
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

        $imagePath = null;

        if ($request->hasFile('image')) {
            // Simpan gambar ke storage/app/public/news_images
            $imagePath = $request->file('image')->store('news_images', 'public');
        }

        News::create([
            'judul'     => $request->judul,
            'deskripsi' => $request->deskripsi,
            'kategori'  => $request->kategori,
            'author'    => $request->author,
            'image'     => $imagePath,
        ]);

        return redirect()->route('news.index')->with('success', 'News created successfully');
    }

    public function edit(News $news)
    {
        return Inertia::render('News/Edit', [
            'news' => $news
        ]);
    }

    public function update(Request $request, News $news)
    {
        $request->validate([
            'judul'     => 'required|string|max:255',
            'deskripsi' => 'required|string|max:255',
            'kategori'  => 'required|string|max:255',
            'author'    => 'required|string|max:255',
            'image'     => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        $imagePath = $news->image; // default pakai gambar lama

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
        $news->delete();

        return redirect()->route('news.index')->with('success', 'News deleted successfully');
    }
}

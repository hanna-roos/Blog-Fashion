<?php

use Illuminate\Support\Facades\Storage;

$imagePath = null;

// copy dummy image ke storage jika ada
$dummyImage = public_path('dummy.jpg'); // pastikan file dummy.jpg ada di public/
if (file_exists($dummyImage)) {
    $imagePath = Storage::disk('public')->putFile('news_images', new \Illuminate\Http\File($dummyImage));
}

// Buat post untuk User1
News::create([
    'judul' => 'Post User1 #1',
    'deskripsi' => 'Deskripsi Post User1 #1',
    'kategori' => 'Fashion',
    'author' => $user1->name,
    'user_id' => $user1->id,
    'image' => $imagePath,
]);

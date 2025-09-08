import React from "react";
import { Link } from "@inertiajs/react";
import Navbar from "./news_components/Navbar";
import Footer from "./news_components/Footer";

export default function Index({ news }) {
    console.log("data = ", news);

    return (
        <>
            <Navbar />

            <section className="bg-black text-white py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold mb-4">Blog</h2>
                    <p className="font-light mb-5">
                        Stay Tune About OOTD Every Day
                    </p>

                    <div className="mb-6">
                        <Link
                            href={route("news.create")}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                        >
                            + Tambah News
                        </Link>
                    </div>

                    {/* Grid Bento untuk berita pertama & kedua */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {news.slice(0, 2).map((post) => (
                            <div
                                key={post.id}
                                className="bg-zinc-900 rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col"
                            >
                                {post.image && (
                                    <img
                                        src={`/storage/${post.image}`}
                                        alt={post.judul}
                                        className="w-full h-[45vh] object-cover"
                                    />
                                )}
                                <div className="p-5 flex flex-col flex-grow">
                                    <p className="text-sm text-indigo-400 font-medium">
                                        {post.kategori}
                                    </p>
                                    <h3 className="text-lg font-semibold mt-2 line-clamp-2">
                                        {post.judul}
                                    </h3>
                                    <p className="text-sm text-gray-400 mt-2 line-clamp-3 flex-grow">
                                        {post.deskripsi}
                                    </p>
                                    <div className="flex items-center justify-between mt-4 text-sm text-gray-300">
                                        <span>{post.author}</span>
                                        <span>
                                            {new Date(
                                                post.created_at
                                            ).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Grid Bento untuk berita ke-3,4, dst */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                        {news.slice(2, 5).map((post) => (
                            <div
                                key={post.id}
                                className="bg-zinc-900 rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col"
                            >
                                {post.image && (
                                    <img
                                        src={`/storage/${post.image}`}
                                        alt={post.judul}
                                        className="w-full h-[45vh] object-cover"
                                    />
                                )}
                                <div className="p-5 flex flex-col flex-grow">
                                    <p className="text-sm text-indigo-400 font-medium">
                                        {post.kategori}
                                    </p>
                                    <h3 className="text-lg font-semibold mt-2 line-clamp-2">
                                        {post.judul}
                                    </h3>
                                    <p className="text-sm text-gray-400 mt-2 line-clamp-3 flex-grow">
                                        {post.deskripsi}
                                    </p>
                                    <div className="flex items-center justify-between mt-4 text-sm text-gray-300">
                                        <span>{post.author}</span>
                                        <span>
                                            {new Date(
                                                post.created_at
                                            ).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* List Blog biasa */}
                    <div className="max-w-6xl mx-auto px-4 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {news.map((post) => (
                                <div
                                    key={post.id}
                                    className="flex flex-col gap-2"
                                >
                                    <p className="text-sm text-indigo-400 font-medium">
                                        {post.kategori}
                                    </p>
                                    <h3 className="text-xl font-semibold text-white hover:text-indigo-400 transition cursor-pointer">
                                        {post.judul}
                                    </h3>
                                    <p className="text-gray-400 text-sm line-clamp-3">
                                        {post.deskripsi}
                                    </p>
                                    <div className="flex items-center justify-between mt-3 text-sm text-gray-300 hover:text-indigo-400">
                                        <span>{post.author}</span>
                                        <span>
                                            {new Date(
                                                post.created_at
                                            ).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

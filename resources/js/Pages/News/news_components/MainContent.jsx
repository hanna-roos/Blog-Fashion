// BlogBento.jsx
import React from "react";

const posts = [
    {
        id: 1,
        category: "Engineering",
        title: "Advancing cybersecurity with next-gen solutions",
        description:
            "Our next-generation cybersecurity solutions are setting new standards...",
        authors: [
            { name: "Agnes Walker", avatar: "https://i.pravatar.cc/40?img=1" },
            {
                name: "Trevor Henderson",
                avatar: "https://i.pravatar.cc/40?img=2",
            },
        ],
        date: "July 14, 2021",
        colSpan: "md:col-span-2",
    },
    {
        id: 2,
        category: "Product",
        title: "Enhancing customer experience through innovation",
        description:
            "Our innovative approaches are enhancing customer experience...",
        authors: [
            { name: "Travis Howard", avatar: "https://i.pravatar.cc/40?img=3" },
        ],
        date: "July 14, 2021",
    },
    {
        id: 3,
        category: "Product",
        title: "Enhancing customer experience through innovation",
        description:
            "Our innovative approaches are enhancing customer experience...",
        authors: [
            { name: "Travis Howard", avatar: "https://i.pravatar.cc/40?img=3" },
        ],
        date: "July 14, 2021",
    },
    {
        id: 4,
        category: "Product",
        title: "Enhancing customer experience through innovation",
        description:
            "Our innovative approaches are enhancing customer experience...",
        authors: [
            { name: "Travis Howard", avatar: "https://i.pravatar.cc/40?img=3" },
        ],
        date: "July 14, 2021",
        colSpan: "md:col-span-2",
    },
];

const BlogBento = () => {
    return (
        <section className="bg-black text-white py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold mb-4">Blog</h2>
                <p className="font-light mb-5   ">
                    Stay Tune About OOTD Every Day
                </p>
                <div className="flex space-x-4 mb-8">
                    <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-2    sm font-bold text-gray-400 inset-ring inset-ring-gray-400/20">
                        Badge
                    </span>
                    <span className="inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-2 sm font-medium text-red-400 inset-ring inset-ring-red-400/20">
                        Badge
                    </span>
                    <span className="inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-2  sm font-medium text-yellow-500 inset-ring inset-ring-yellow-400/20">
                        Badge
                    </span>
                    <span className="inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-2   sm font-medium text-green-400 inset-ring inset-ring-green-500/20">
                        Badge
                    </span>
                    <span className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-2    sm font-medium text-blue-400 inset-ring inset-ring-blue-400/30">
                        Badge
                    </span>
                    <span className="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-2  sm font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30">
                        Badge
                    </span>
                    <span className="inline-flex items-center rounded-md bg-purple-400/10 px-2 py-1 text-2  sm font-medium text-purple-400 inset-ring inset-ring-purple-400/30">
                        Badge
                    </span>
                    <span className="inline-flex items-center rounded-md bg-pink-400/10 px-2 py-1 text-2    sm font-medium text-pink-400 inset-ring inset-ring-pink-400/20">
                        Badge
                    </span>
                </div>
                {/* Grid Bento */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {posts
                        .filter((post) => post.id === 1 || post.id === 2) // ambil hanya id 1 & 2
                        .map((post) => (
                            <div
                                key={post.id}
                                className="bg-zinc-900 rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col"
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-[45vh] object-cover"
                                />
                                <div className="p-5 flex flex-col flex-grow">
                                    <p className="text-sm text-indigo-400 font-medium">
                                        {post.category}
                                    </p>
                                    <h3 className="text-lg font-semibold mt-2 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 mt-2 line-clamp-3 flex-grow">
                                        {post.description}
                                    </p>
                                    <div className="flex items-center justify-between mt-4 text-sm text-gray-300">
                                        <span>{post.author}</span>
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {posts
                        .filter((post) => post.id === 3 || post.id === 4)
                        .map((post) => (
                            <div
                                key={post.id}
                                className={`bg-zinc-900 rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col ${
                                    post.colSpan || ""
                                }`}
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-52 object-cover"
                                />
                                <div className="p-5 flex flex-col flex-grow">
                                    <p className="text-sm text-indigo-400 font-medium">
                                        {post.category}
                                    </p>
                                    <h3 className="text-lg font-semibold mt-2 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 mt-2 line-clamp-3 flex-grow">
                                        {post.description}
                                    </p>
                                    <div className="flex items-center justify-between mt-4 text-sm text-gray-300">
                                        <span>{post.author}</span>
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {posts.map((post) => (
                            <div key={post.id} className="flex flex-col gap-2">
                                <p className="text-sm text-indigo-400 font-medium">
                                    {post.category}
                                </p>
                                <h3 className="text-xl font-semibold text-white hover:text-indigo-400 transition">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 text-sm line-clamp-3">
                                    {post.description}
                                </p>
                                <div className="flex items-center justify-between mt-3 text-sm text-gray-300">
                                    <div className="flex items-center gap-2">
                                        {post.authors.map((author, i) => (
                                            <span
                                                key={i}
                                                className="flex items-center gap-1"
                                            >
                                                <img
                                                    src={author.avatar}
                                                    alt={author.name}
                                                    className="w-6 h-6 rounded-full"
                                                />
                                                {author.name}
                                                {i !==
                                                    post.authors.length - 1 &&
                                                    ","}
                                            </span>
                                        ))}
                                    </div>
                                    <span>{post.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-10">
                        <nav className="flex gap-2">
                            {[...Array(10)].map((_, i) => (
                                <button
                                    key={i}
                                    className={`px-3 py-1 rounded-full ${
                                        i === 0
                                            ? "bg-white text-black font-semibold"
                                            : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogBento;

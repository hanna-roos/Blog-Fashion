import { useForm } from "@inertiajs/react";

export default function Edit({ news }) {
    const { data, setData, put, errors } = useForm({
        judul: news.judul,
        deskripsi: news.deskripsi,
        kategori: news.kategori,
        author: news.author,
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("news.update", news.id), data, {
            forceFormData: true, // biar bisa kirim file
        });
    };
    return (
        <div className="max-w-2xl mx-auto mt-10 bg-[#141E7E] p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4 text-center">Edit News</h1>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-3">
                    <label className="block text-sm font-medium">Judul</label>
                    <input
                        type="text"
                        value={data.judul}
                        onChange={(e) => setData("judul", e.target.value)}
                        className="w-full border rounded p-2 text-black"
                    />
                    {errors.judul && (
                        <p className="text-red-600 text-sm">{errors.judul}</p>
                    )}
                </div>

                <div className="mb-3">
                    <label className="block text-sm font-medium">
                        Deskripsi
                    </label>
                    <textarea
                        value={data.deskripsi}
                        onChange={(e) => setData("deskripsi", e.target.value)}
                        className="w-full border rounded p-2 text-black"
                    ></textarea>
                    {errors.deskripsi && (
                        <p className="text-red-600 text-sm">
                            {errors.deskripsi}
                        </p>
                    )}
                </div>

                <div className="mb-3">
                    <label className="block text-sm font-medium">
                        Kategori
                    </label>
                    <input
                        type="text"
                        value={data.kategori}
                        onChange={(e) => setData("kategori", e.target.value)}
                        className="w-full border rounded p-2 text-black"
                    />
                    {errors.kategori && (
                        <p className="text-red-600 text-sm">
                            {errors.kategori}
                        </p>
                    )}
                </div>

                <div className="mb-3">
                    <label className="block text-sm font-medium">Author</label>
                    <input
                        type="text"
                        value={data.author}
                        onChange={(e) => setData("author", e.target.value)}
                        className="w-full border rounded p-2 text-black"
                    />
                    {errors.author && (
                        <p className="text-red-600 text-sm">{errors.author}</p>
                    )}
                </div>

                <div className="mb-3">
                    <label className="block text-sm font-medium">Image</label>
                    <input
                        type="file"
                        onChange={(e) => setData("image", e.target.files[0])}
                        className="w-full"
                    />
                    {errors.image && (
                        <p className="text-red-600 text-sm">{errors.image}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Update
                </button>
            </form>
        </div>
    );
}

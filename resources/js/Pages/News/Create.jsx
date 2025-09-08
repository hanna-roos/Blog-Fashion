import { useForm, Head } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, progress, errors } = useForm({
        judul: "",
        deskripsi: "",
        kategori: "",
        author: "",
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("news.store"), {
            forceFormData: true, // biar bisa kirim file
        });
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 bg-[#141E7E] p-6 rounded-lg shadow">
            <Head title="Create News" />
            <h1 className="text-2xl font-bold mb-4 text-center">Tambah News</h1>

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <label className="block font-medium">Judul</label>
                    <input
                        type="text"
                        value={data.judul}
                        onChange={(e) => setData("judul", e.target.value)}
                        className="w-full border rounded p-2 text-black"
                    />
                    {errors.judul && (
                        <div className="text-red-500">{errors.judul}</div>
                    )}
                </div>

                <div>
                    <label className="block font-medium">Deskripsi</label>
                    <textarea
                        value={data.deskripsi}
                        onChange={(e) => setData("deskripsi", e.target.value)}
                        className="w-full border rounded p-2 text-black"
                    />
                    {errors.deskripsi && (
                        <div className="text-red-500">{errors.deskripsi}</div>
                    )}
                </div>

                <div>
                    <label className="block font-medium">Kategori</label>
                    <input
                        type="text"
                        value={data.kategori}
                        onChange={(e) => setData("kategori", e.target.value)}
                        className="w-full border rounded p-2 text-black"
                    />
                    {errors.kategori && (
                        <div className="text-red-500">{errors.kategori}</div>
                    )}
                </div>

                <div>
                    <label className="block font-medium">Author</label>
                    <input
                        type="text"
                        value={data.author}
                        onChange={(e) => setData("author", e.target.value)}
                        className="w-full border rounded p-2 text-black"
                    />
                    {errors.author && (
                        <div className="text-red-500">{errors.author}</div>
                    )}
                </div>

                <div>
                    <label className="block font-medium">Gambar</label>
                    <input
                        type="file"
                        onChange={(e) => setData("image", e.target.files[0])}
                        className="w-full"
                    />
                    {progress && (
                        <progress value={progress.percentage} max="100">
                            {progress.percentage}%
                        </progress>
                    )}
                    {errors.image && (
                        <div className="text-red-500">{errors.image}</div>
                    )}
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 transition-all text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Simpan
                </button>
            </form>
        </div>
    );
}

import { Head, Link } from "@inertiajs/react";
import { Bar } from "react-chartjs-2";
import {
    Chart,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js";
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const sidebarMenu = [
    { title: "Dashboard", path: "/admin/dashboard" },
    { title: "News", path: "/news" },
    { title: "Users", path: "/admin/users" },
    { title: "Profile", path: "/profile" },
    { title: "Logout", path: "/logout", method: "post" },
];

function getMonthlyCounts(news) {
    // Ambil jumlah post per bulan dari data news
    const counts = {};
    news.forEach((item) => {
        const date = new Date(item.created_at);
        const key = `${date.getFullYear()}-${String(date.getDay() + 1).padStart(
            2,
            "0"
        )}`;
        counts[key] = (counts[key] || 0) + 1;
    });
    // Sort by month
    const sortedKeys = Object.keys(counts).sort();
    return {
        labels: sortedKeys,
        data: sortedKeys.map((k) => counts[k]),
    };
}

export default function Dashboard({ news = [], users = [] }) {
    const monthly = getMonthlyCounts(news);

    const chartData = {
        labels: monthly.labels,
        datasets: [
            {
                label: "Blog Posts per Month",
                data: monthly.data,
                backgroundColor: "rgba(79, 70, 229, 0.7)",
            },
        ],
    };

    return (
        <>
            <Head title="Admin Dashboard" />
            <div className="flex min-h-screen bg-gray-100">
                {/* Side Navbar */}
                <aside className="w-64 bg-blue-900 text-white flex-shrink-0 min-h-screen shadow-lg">
                    <div className="p-6 font-bold text-2xl border-b border-blue-800">
                        Admin Panel
                    </div>
                    <nav className="mt-6">
                        <ul>
                            {sidebarMenu.map((item, idx) =>
                                item.method ? (
                                    <li key={idx}>
                                        <Link
                                            href={item.path}
                                            method={item.method}
                                            as="button"
                                            className="w-full text-left block px-6 py-3 hover:bg-blue-800 transition"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ) : (
                                    <li key={idx}>
                                        <Link
                                            href={item.path}
                                            className="block px-6 py-3 hover:bg-blue-800 transition"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2 text-indigo-700">
                            Admin Dashboard
                        </h1>
                        <p className="text-gray-600">Welcome, admin!</p>
                    </div>

                    {/* Chart Section */}
                    <div className="bg-white rounded-xl shadow p-6 mb-10 w-full">
                        <h2 className="text-xl font-semibold mb-4 text-indigo-700">
                            Blog Posts per Month
                        </h2>
                        <Bar data={chartData} />
                    </div>

                    {/* ...existing dashboard content... */}
                    {/* Total News & Users */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        <div className="bg-white rounded-xl shadow p-6 text-indigo-700">
                            <h2 className="text-xl font-semibold mb-4 ">
                                Total News
                            </h2>
                            <p className="text-4xl font-bold text-blue-700">
                                {news.length}
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow p-6 text-indigo-700">
                            <h2 className="text-xl font-semibold mb-4">
                                Total Users
                            </h2>
                            <p className="text-4xl font-bold text-green-700">
                                {users.length}
                            </p>
                        </div>
                    </div>

                    {/* Latest News */}
                    <div className="bg-indigo-700 rounded-xl shadow p-6 mb-8">
                        <h2 className="text-xl font-semibold mb-4">
                            Latest News
                        </h2>
                        <table className="w-full text-left">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">
                                        Title
                                    </th>
                                    <th className="py-2 px-4 border-b">
                                        Category
                                    </th>
                                    <th className="py-2 px-4 border-b">
                                        Author
                                    </th>
                                    <th className="py-2 px-4 border-b">
                                        Image
                                    </th>
                                    <th className="py-2 px-4 border-b">
                                        Created At
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {news.slice(0, 3).map((item) => (
                                    <tr key={item.id}>
                                        <td className="py-2 px-4 border-b">
                                            {item.judul}
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            {item.kategori}
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            {item.author}
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            {item.image ? (
                                                <img
                                                    src={`/storage/${item.image}`}
                                                    alt={item.judul}
                                                    className="h-12 w-20 object-cover rounded"
                                                />
                                            ) : (
                                                <span className="text-gray-400 italic">
                                                    No Image
                                                </span>
                                            )}
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            {new Date(
                                                item.created_at
                                            ).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* User List */}
                    <div className="bg-indigo-700 rounded-xl shadow p-6">
                        <h2 className="text-xl font-semibold mb-4">
                            User List
                        </h2>
                        <table className="w-full text-left">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Name</th>
                                    <th className="py-2 px-4 border-b">
                                        Email
                                    </th>
                                    <th className="py-2 px-4 border-b">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.slice(0, 6 ).map((user) => (
                                    <tr key={user.id}>
                                        <td className="py-2 px-4 border-b">
                                            {user.name}
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            {user.email}
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            {user.role}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </>
    );
}

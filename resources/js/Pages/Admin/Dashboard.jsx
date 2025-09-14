import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
  return (
    <AuthenticatedLayout header={<h2 className="text-xl font-semibold">Admin Dashboard</h2>}>
      <Head title="Admin Dashboard" />
      <div className="p-6">
        <div className="rounded-xl border bg-white p-6">Welcome, admin!</div>
      </div>
    </AuthenticatedLayout>
  );
}

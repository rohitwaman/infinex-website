"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn");

    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router]);

  function handleLogout() {
    localStorage.removeItem("isAdminLoggedIn");
    router.push("/login");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900 px-8 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1 className="text-3xl font-bold">
            Infinex Admin Dashboard
          </h1>

          <div className="flex gap-4">
            <Link
              href="/"
              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-700"
            >
              Visit Website
            </Link>

            <button
              onClick={handleLogout}
              className="rounded-xl bg-red-600 px-5 py-3 font-semibold hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Dashboard */}
      <section className="mx-auto grid max-w-7xl gap-8 px-8 py-12 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
          <h2 className="text-2xl font-bold">
            Portfolio
          </h2>

          <p className="mt-3 text-slate-400">
            Add & Manage Projects
          </p>
        </div>

        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
          <h2 className="text-2xl font-bold">
            Blogs
          </h2>

          <p className="mt-3 text-slate-400">
            Publish Articles
          </p>
        </div>

        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
          <h2 className="text-2xl font-bold">
            Messages
          </h2>

          <p className="mt-3 text-slate-400">
            Client Enquiries
          </p>
        </div>

        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
          <h2 className="text-2xl font-bold">
            Careers
          </h2>

          <p className="mt-3 text-slate-400">
            Job Applications
          </p>
        </div>

      </section>
    </main>
  );
}
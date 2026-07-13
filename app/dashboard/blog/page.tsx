"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Blog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  published: boolean;
  createdAt: string;
};

export default function BlogDashboard() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    loadBlogs();
  }, []);

  async function loadBlogs() {
    try {
      setLoading(true);

      const response = await fetch("/api/blog", {
        cache: "no-store",
      });

      const data = await response.json();

      setBlogs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Blog loading error:", error);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  }

  async function deleteBlog(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);

      const response = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Delete failed");
        return;
      }

      setBlogs((currentBlogs) =>
        currentBlogs.filter((blog) => blog.id !== id)
      );

      alert("Blog deleted successfully");
    } catch (error) {
      console.error("Delete blog error:", error);
      alert("Server error");
    } finally {
      setDeletingId(null);
    }
  }

  const filteredBlogs = blogs.filter((blog) => {
    const searchText = `
      ${blog.title}
      ${blog.slug}
      ${blog.excerpt}
      ${blog.category || "Technology"}
    `.toLowerCase();

    return searchText.includes(search.toLowerCase());
  });

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              href="/dashboard"
              className="text-sm font-semibold text-blue-400 hover:text-blue-300"
            >
              ← Back to Dashboard
            </Link>

            <h1 className="mt-4 text-4xl font-bold">
              Blog Management
            </h1>

            <p className="mt-2 text-slate-400">
              Add, edit, view and delete company blogs.
            </p>
          </div>

          <Link
            href="/dashboard/blog/new"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
          >
            + Add Blog
          </Link>
        </div>

        <input
          type="search"
          placeholder="Search by title, slug, excerpt or category..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="mt-8 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-blue-500"
        />

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
          {loading ? (
            <div className="p-12 text-center text-slate-400">
              Loading blogs...
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="p-12 text-center text-slate-400">
              No blogs found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1100px]">
                <thead className="bg-slate-950/70 text-left text-sm text-slate-400">
                  <tr>
                    <th className="px-6 py-4">Title</th>
                    <th className="px-6 py-4">Slug</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredBlogs.map((blog) => {
                    const isDeleting = deletingId === blog.id;

                    return (
                      <tr
                        key={blog.id}
                        className="border-t border-slate-800"
                      >
                        <td className="px-6 py-5">
                          <p className="font-semibold">
                            {blog.title}
                          </p>

                          <p className="mt-1 max-w-md text-sm text-slate-400">
                            {blog.excerpt}
                          </p>
                        </td>

                        <td className="px-6 py-5 text-sm text-slate-400">
                          {blog.slug}
                        </td>

                        <td className="px-6 py-5">
                          <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-400">
                            {blog.category || "Technology"}
                          </span>
                        </td>

                        <td className="px-6 py-5">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              blog.published
                                ? "bg-green-500/15 text-green-400"
                                : "bg-yellow-500/15 text-yellow-400"
                            }`}
                          >
                            {blog.published ? "Published" : "Draft"}
                          </span>
                        </td>

                        <td className="px-6 py-5 text-sm text-slate-400">
                          {new Date(blog.createdAt).toLocaleDateString(
                            "en-IN"
                          )}
                        </td>

                        <td className="px-6 py-5">
                          <div className="flex gap-3">
                            <Link
                              href={`/blog/${blog.slug}`}
                              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-700"
                            >
                              View
                            </Link>

                            <Link
                              href={`/dashboard/blog/edit/${blog.id}`}
                              className="rounded-lg bg-yellow-600 px-4 py-2 text-sm font-semibold hover:bg-yellow-700"
                            >
                              Edit
                            </Link>

                            <button
                              disabled={isDeleting}
                              onClick={() => deleteBlog(blog.id)}
                              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-700 disabled:opacity-50"
                            >
                              {isDeleting ? "Deleting..." : "Delete"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
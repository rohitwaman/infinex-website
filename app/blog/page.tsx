"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Blog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string | null;
  author: string;
  category: string;
  published: boolean;
  createdAt: string;
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

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

      const publishedBlogs = Array.isArray(data)
        ? data.filter((blog: Blog) => blog.published)
        : [];

      setBlogs(publishedBlogs);
    } catch (error) {
      console.error("Failed to load blogs:", error);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  }

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(blogs.map((blog) => blog.category || "Technology"))
    );

    return ["All", ...uniqueCategories];
  }, [blogs]);

  const filteredBlogs = blogs.filter((blog) => {
    const searchText = `
      ${blog.title}
      ${blog.excerpt}
      ${blog.category}
      ${blog.author}
    `.toLowerCase();

    const matchesSearch = searchText.includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || blog.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Infinex Insights
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Latest Technology Articles
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Read practical articles about software development, AI, websites,
            mobile applications and business technology.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-[1fr_auto]">
          <input
            type="search"
            placeholder="Search articles..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-blue-500"
          />

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-blue-500"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <div className="mt-16 text-center text-slate-400">
            Loading blogs...
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center text-slate-400">
            No matching blogs found.
          </div>
        ) : (
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition hover:-translate-y-2 hover:border-blue-500"
              >
                {blog.coverImage ? (
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="h-56 w-full object-cover"
                  />
                ) : (
                  <div className="h-56 bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600" />
                )}

                <div className="p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-400">
                      {blog.category || "Technology"}
                    </span>

                    <span className="text-sm text-slate-500">
                      {new Date(blog.createdAt).toLocaleDateString("en-IN")}
                    </span>
                  </div>

                  <h2 className="mt-5 text-2xl font-bold">
                    {blog.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-400">
                    {blog.excerpt}
                  </p>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="mt-6 inline-block font-semibold text-blue-400 hover:text-blue-300"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
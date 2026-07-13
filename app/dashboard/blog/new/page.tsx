"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddBlogPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [category, setCategory] = useState("Technology");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          excerpt,
          content,
          coverImage,
          category,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.message || "Blog publish failed.");
        return;
      }

      setStatus("Blog published successfully.");

      setTitle("");
      setExcerpt("");
      setContent("");
      setCoverImage("");
      setCategory("Technology");

      router.push("/dashboard/blog");
      router.refresh();
    } catch (error) {
      console.error("Create blog error:", error);
      setStatus("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/dashboard/blog"
          className="text-sm font-semibold text-blue-400 hover:text-blue-300"
        >
          ← Back to Blogs
        </Link>

        <div className="mt-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Blog Management
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Publish New Blog
          </h1>

          <p className="mt-3 text-slate-400">
            Create an article for your company website and improve SEO.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-3xl border border-slate-800 bg-slate-900 p-8"
        >
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-semibold text-slate-300"
            >
              Blog Title
            </label>

            <input
              id="title"
              required
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Example: How AI Can Help Small Businesses"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="excerpt"
              className="mb-2 block text-sm font-semibold text-slate-300"
            >
              Short Excerpt
            </label>

            <textarea
              id="excerpt"
              required
              rows={3}
              value={excerpt}
              onChange={(event) => setExcerpt(event.target.value)}
              placeholder="Write a short summary for the blog card and search results."
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-semibold text-slate-300"
            >
              Category
            </label>

            <select
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none transition focus:border-blue-500"
            >
              <option value="Technology">Technology</option>
              <option value="Artificial Intelligence">
                Artificial Intelligence
              </option>
              <option value="Web Development">
                Web Development
              </option>
              <option value="Mobile Apps">
                Mobile Apps
              </option>
              <option value="Business">
                Business
              </option>
              <option value="Software Development">
                Software Development
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="coverImage"
              className="mb-2 block text-sm font-semibold text-slate-300"
            >
              Cover Image URL
            </label>

            <input
              id="coverImage"
              type="url"
              value={coverImage}
              onChange={(event) => setCoverImage(event.target.value)}
              placeholder="https://example.com/blog-image.jpg"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none transition focus:border-blue-500"
            />

            <p className="mt-2 text-xs text-slate-500">
              Optional. Image upload आपण नंतर Supabase Storage सोबत जोडू.
            </p>
          </div>

          <div>
            <label
              htmlFor="content"
              className="mb-2 block text-sm font-semibold text-slate-300"
            >
              Blog Content
            </label>

            <textarea
              id="content"
              required
              rows={16}
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="Write the complete blog article here..."
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 leading-7 outline-none transition focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 px-8 py-4 font-bold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Publishing..." : "Publish Blog"}
          </button>

          {status && (
            <p
              className={`text-center font-medium ${
                status.toLowerCase().includes("success")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
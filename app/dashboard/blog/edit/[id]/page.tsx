"use client";

import { FormEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();

  const id = params.id as string;

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [category, setCategory] = useState("Technology");
  const [published, setPublished] = useState(true);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (id) {
      loadBlog();
    }
  }, [id]);

  async function loadBlog() {
    try {
      setLoading(true);

      const response = await fetch(`/api/blog/${id}`, {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.message || "Failed to load blog.");
        return;
      }

      setTitle(data.title || "");
      setExcerpt(data.excerpt || "");
      setContent(data.content || "");
      setCoverImage(data.coverImage || "");
      setCategory(data.category || "Technology");
      setPublished(Boolean(data.published));
    } catch (error) {
      console.error("Load blog error:", error);
      setStatus("Server error while loading blog.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setSaving(true);
      setStatus("");

      const response = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          excerpt,
          content,
          coverImage,
          category,
          published,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.message || "Blog update failed.");
        return;
      }

      alert("Blog updated successfully!");
      router.push("/dashboard/blog");
      router.refresh();
    } catch (error) {
      console.error("Update blog error:", error);
      setStatus("Server error. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="text-slate-400">Loading blog...</p>
      </main>
    );
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

          <h1 className="mt-3 text-4xl font-bold">Edit Blog</h1>

          <p className="mt-3 text-slate-400">
            Update the article information, category and publishing status.
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
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-blue-500"
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
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-blue-500"
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
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-blue-500"
            >
              <option value="Technology">Technology</option>
              <option value="Artificial Intelligence">
                Artificial Intelligence
              </option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Apps">Mobile Apps</option>
              <option value="Business">Business</option>
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
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-blue-500"
            />
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
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 leading-7 outline-none focus:border-blue-500"
            />
          </div>

          <label className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 p-4">
            <input
              type="checkbox"
              checked={published}
              onChange={(event) => setPublished(event.target.checked)}
              className="h-5 w-5"
            />

            <span className="font-semibold">Published</span>
          </label>

          <button
            type="submit"
            disabled={saving}
            className="w-full rounded-xl bg-blue-600 px-8 py-4 font-bold hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {saving ? "Updating..." : "Update Blog"}
          </button>

          {status && (
            <p className="text-center font-medium text-red-400">{status}</p>
          )}
        </form>
      </div>
    </main>
  );
}
"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddPortfolio() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tech, setTech] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/portfolio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, tech, imageUrl, liveUrl }),
    });

    setLoading(false);

    if (res.ok) {
      alert("Project Added Successfully!");
      router.push("/dashboard/portfolio");
      router.refresh();
    } else {
      alert("Something went wrong");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/dashboard/portfolio" className="text-blue-400">
          ← Back to Portfolio
        </Link>

        <h1 className="mb-8 mt-6 text-4xl font-bold">
          Add Portfolio Project
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            required
            placeholder="Project Title"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            required
            placeholder="Description"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-blue-500"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            required
            placeholder="Technologies"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-blue-500"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
          />

          <input
            placeholder="Image URL"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-blue-500"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <input
            placeholder="Live URL"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-blue-500"
            value={liveUrl}
            onChange={(e) => setLiveUrl(e.target.value)}
          />

          <button
            disabled={loading}
            className="rounded-xl bg-blue-600 px-8 py-4 font-bold hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Adding..." : "Add Project"}
          </button>
        </form>
      </div>
    </main>
  );
}
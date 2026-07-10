"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPortfolio() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tech, setTech] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/portfolio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        tech,
        imageUrl,
        liveUrl,
      }),
    });

    if (res.ok) {
      alert("Project Added Successfully!");
      router.push("/dashboard/portfolio");
    } else {
      alert("Something went wrong");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Add Portfolio Project
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            placeholder="Project Title"
            className="w-full rounded-xl bg-slate-900 p-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Description"
            className="w-full rounded-xl bg-slate-900 p-4"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            placeholder="Technologies"
            className="w-full rounded-xl bg-slate-900 p-4"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
          />

          <input
            placeholder="Image URL"
            className="w-full rounded-xl bg-slate-900 p-4"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <input
            placeholder="Live URL"
            className="w-full rounded-xl bg-slate-900 p-4"
            value={liveUrl}
            onChange={(e) => setLiveUrl(e.target.value)}
          />

          <button
            className="rounded-xl bg-blue-600 px-8 py-4 font-bold hover:bg-blue-700"
          >
            Add Project
          </button>

        </form>

      </div>
    </main>
  );
}
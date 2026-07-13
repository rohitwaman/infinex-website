"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddJobPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Pune");
  const [type, setType] = useState("Full Time");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          location,
          type,
          description,
          requirements,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.message || "Failed to create job");
        return;
      }

      setStatus("Job created successfully ✅");

      setTitle("");
      setLocation("Pune");
      setType("Full Time");
      setDescription("");
      setRequirements("");

      router.push("/dashboard/jobs");
      router.refresh();
    } catch (error) {
      console.error(error);
      setStatus("Server error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">

        <Link
          href="/dashboard/jobs"
          className="text-blue-400 hover:text-blue-300"
        >
          ← Back
        </Link>

        <h1 className="text-4xl font-bold mt-6">
          Add New Job
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6"
        >
          <div>
            <label className="block mb-2">
              Job Title
            </label>

            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl bg-slate-950 border border-slate-700 p-4"
              placeholder="Frontend Developer"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2">
                Location
              </label>

              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-xl bg-slate-950 border border-slate-700 p-4"
              />
            </div>

            <div>
              <label className="block mb-2">
                Job Type
              </label>

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full rounded-xl bg-slate-950 border border-slate-700 p-4"
              >
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Internship</option>
                <option>Remote</option>
                <option>Contract</option>
              </select>
            </div>

          </div>

          <div>
            <label className="block mb-2">
              Job Description
            </label>

            <textarea
              rows={8}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-xl bg-slate-950 border border-slate-700 p-4"
            />
          </div>

          <div>
            <label className="block mb-2">
              Requirements
            </label>

            <textarea
              rows={8}
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              className="w-full rounded-xl bg-slate-950 border border-slate-700 p-4"
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl py-4 font-bold"
          >
            {loading ? "Creating..." : "Create Job"}
          </button>

          {status && (
            <p className="text-center text-green-400">
              {status}
            </p>
          )}
        </form>

      </div>
    </main>
  );
}
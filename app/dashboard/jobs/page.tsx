"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  active: boolean;
  createdAt: string;
};

export default function JobsDashboard() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadJobs();
  }, []);

  async function loadJobs() {
    try {
      const res = await fetch("/api/jobs", {
        cache: "no-store",
      });

      const data = await res.json();

      setJobs(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function deleteJob(id: string) {
    if (!confirm("Delete this job?")) return;

    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setJobs(jobs.filter((job) => job.id !== id));
    } else {
      alert("Delete failed");
    }
  }

  const filtered = jobs.filter((job) =>
    `${job.title} ${job.location} ${job.type}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-4xl font-bold">
              Jobs Dashboard
            </h1>

            <p className="text-slate-400 mt-2">
              Manage Careers
            </p>

          </div>

          <Link
            href="/dashboard/jobs/new"
            className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            + Add Job
          </Link>

        </div>

        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 mb-8"
        />

        <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-700">

          <table className="w-full">

            <thead className="bg-slate-800">

              <tr>

                <th className="text-left p-5">
                  Title
                </th>

                <th>
                  Location
                </th>

                <th>
                  Type
                </th>

                <th>
                  Status
                </th>

                <th>
                  Date
                </th>

                <th>
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {loading ? (

                <tr>
                  <td
                    colSpan={6}
                    className="text-center p-10"
                  >
                    Loading...
                  </td>
                </tr>

              ) : filtered.length === 0 ? (

                <tr>
                  <td
                    colSpan={6}
                    className="text-center p-10"
                  >
                    No Jobs
                  </td>
                </tr>

              ) : (

                filtered.map((job) => (

                  <tr
                    key={job.id}
                    className="border-t border-slate-800"
                  >

                    <td className="p-5">
                      {job.title}
                    </td>

                    <td className="text-center">
                      {job.location}
                    </td>

                    <td className="text-center">
                      {job.type}
                    </td>

                    <td className="text-center">
                      {job.active ? (
                        <span className="text-green-400">
                          Active
                        </span>
                      ) : (
                        <span className="text-red-400">
                          Closed
                        </span>
                      )}
                    </td>

                    <td className="text-center">
                      {new Date(job.createdAt).toLocaleDateString()}
                    </td>

                    <td>

                      <div className="flex justify-center gap-3">

                        <button
                          className="bg-yellow-600 px-4 py-2 rounded-lg"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => deleteJob(job.id)}
                          className="bg-red-600 px-4 py-2 rounded-lg"
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}
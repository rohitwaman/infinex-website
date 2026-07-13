"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Application = {
  id: string;
  name: string;
  email: string;
  phone: string;
  resumeUrl?: string | null;
  message?: string | null;
  status: string;
  createdAt: string;
  job: {
    id: string;
    title: string;
    slug: string;
  };
};

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [processingId, setProcessingId] = useState<string | null>(null);

  useEffect(() => {
    loadApplications();
  }, []);

  async function loadApplications() {
    try {
      setLoading(true);

      const response = await fetch("/api/apply", {
        cache: "no-store",
      });

      const data = await response.json();

      setApplications(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Load applications error:", error);
      setApplications([]);
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: string, status: string) {
    try {
      setProcessingId(id);

      const response = await fetch(`/api/apply/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Status update failed");
        return;
      }

      setApplications((current) =>
        current.map((application) =>
          application.id === id
            ? { ...application, status }
            : application
        )
      );
    } catch (error) {
      console.error("Status update error:", error);
      alert("Server error");
    } finally {
      setProcessingId(null);
    }
  }

  async function deleteApplication(id: string) {
    if (!window.confirm("Delete this application?")) return;

    try {
      setProcessingId(id);

      const response = await fetch(`/api/apply/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        alert("Delete failed");
        return;
      }

      setApplications((current) =>
        current.filter((application) => application.id !== id)
      );
    } catch (error) {
      console.error("Delete application error:", error);
      alert("Server error");
    } finally {
      setProcessingId(null);
    }
  }

  const filteredApplications = applications.filter((application) => {
    const text = `
      ${application.name}
      ${application.email}
      ${application.phone}
      ${application.job.title}
      ${application.status}
    `.toLowerCase();

    return text.includes(search.toLowerCase());
  });

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/dashboard"
          className="text-sm font-semibold text-blue-400"
        >
          ← Back to Dashboard
        </Link>

        <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              Job Applications
            </h1>

            <p className="mt-2 text-slate-400">
              Review and manage candidate applications.
            </p>
          </div>

          <button
            onClick={loadApplications}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
          >
            Refresh
          </button>
        </div>

        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search candidate, email, job or status..."
          className="mt-8 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-blue-500"
        />

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
          {loading ? (
            <div className="p-12 text-center text-slate-400">
              Loading applications...
            </div>
          ) : filteredApplications.length === 0 ? (
            <div className="p-12 text-center text-slate-400">
              No applications found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1250px]">
                <thead className="bg-slate-950/70 text-left text-sm text-slate-400">
                  <tr>
                    <th className="px-6 py-4">Candidate</th>
                    <th className="px-6 py-4">Job</th>
                    <th className="px-6 py-4">Phone</th>
                    <th className="px-6 py-4">Resume</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredApplications.map((application) => {
                    const processing =
                      processingId === application.id;

                    return (
                      <tr
                        key={application.id}
                        className="border-t border-slate-800 align-top"
                      >
                        <td className="px-6 py-5">
                          <p className="font-semibold">
                            {application.name}
                          </p>

                          <a
                            href={`mailto:${application.email}`}
                            className="mt-1 block text-sm text-blue-400"
                          >
                            {application.email}
                          </a>
                        </td>

                        <td className="px-6 py-5 text-slate-300">
                          {application.job.title}
                        </td>

                        <td className="px-6 py-5">
                          <a
                            href={`tel:${application.phone}`}
                            className="text-slate-300 hover:text-blue-400"
                          >
                            {application.phone}
                          </a>
                        </td>

                        <td className="px-6 py-5">
                          {application.resumeUrl ? (
                            <a
                              href={application.resumeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-blue-400"
                            >
                              View Resume
                            </a>
                          ) : (
                            <span className="text-slate-500">
                              Not provided
                            </span>
                          )}
                        </td>

                        <td className="px-6 py-5">
                          <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-400">
                            {application.status}
                          </span>
                        </td>

                        <td className="px-6 py-5 text-sm text-slate-400">
                          {new Date(
                            application.createdAt
                          ).toLocaleDateString("en-IN")}
                        </td>

                        <td className="px-6 py-5">
                          <div className="flex min-w-[180px] flex-col gap-2">
                            <select
                              disabled={processing}
                              value={application.status}
                              onChange={(event) =>
                                updateStatus(
                                  application.id,
                                  event.target.value
                                )
                              }
                              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm"
                            >
                              <option value="New">New</option>
                              <option value="Reviewed">Reviewed</option>
                              <option value="Shortlisted">
                                Shortlisted
                              </option>
                              <option value="Rejected">Rejected</option>
                              <option value="Hired">Hired</option>
                            </select>

                            <button
                              disabled={processing}
                              onClick={() =>
                                deleteApplication(application.id)
                              }
                              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-700 disabled:opacity-50"
                            >
                              {processing ? "Processing..." : "Delete"}
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
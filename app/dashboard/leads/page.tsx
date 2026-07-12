"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Contact = {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  message: string;
  status: string;
  createdAt: string;
};

export default function LeadsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [processingId, setProcessingId] = useState<string | null>(null);

  useEffect(() => {
    loadContacts();
  }, []);

  async function loadContacts() {
    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        cache: "no-store",
      });

      const data = await response.json();

      setContacts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to load contacts:", error);
      setContacts([]);
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: string, status: string) {
    try {
      setProcessingId(id);

      const response = await fetch(`/api/contact/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Status update failed");
        return;
      }

      setContacts((previousContacts) =>
        previousContacts.map((contact) =>
          contact.id === id
            ? { ...contact, status }
            : contact
        )
      );
    } catch (error) {
      console.error("Status update error:", error);
      alert("Server error");
    } finally {
      setProcessingId(null);
    }
  }

  async function deleteContact(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmed) return;

    try {
      setProcessingId(id);

      const response = await fetch(`/api/contact/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Delete failed");
        return;
      }

      setContacts((previousContacts) =>
        previousContacts.filter(
          (contact) => contact.id !== id
        )
      );
    } catch (error) {
      console.error("Delete contact error:", error);
      alert("Server error");
    } finally {
      setProcessingId(null);
    }
  }

  const filteredContacts = contacts.filter((contact) => {
    const searchableText = `
      ${contact.name}
      ${contact.email}
      ${contact.phone || ""}
      ${contact.company || ""}
      ${contact.status || ""}
      ${contact.message || ""}
    `.toLowerCase();

    return searchableText.includes(search.toLowerCase());
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
              Client Enquiries
            </h1>

            <p className="mt-2 text-slate-400">
              View, update and manage enquiries received from the website.
            </p>
          </div>

          <button
            onClick={loadContacts}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
          >
            Refresh
          </button>
        </div>

        <div className="mt-8">
          <input
            type="search"
            placeholder="Search by name, email, phone, company, message or status..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-blue-500"
          />
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
          {loading ? (
            <div className="p-12 text-center text-slate-400">
              Loading enquiries...
            </div>
          ) : filteredContacts.length === 0 ? (
            <div className="p-12 text-center text-slate-400">
              No enquiries found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1250px]">
                <thead className="bg-slate-950/70 text-left text-sm text-slate-400">
                  <tr>
                    <th className="px-6 py-4">Client</th>
                    <th className="px-6 py-4">Phone</th>
                    <th className="px-6 py-4">Company</th>
                    <th className="px-6 py-4">Message</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredContacts.map((contact) => {
                    const isProcessing =
                      processingId === contact.id;

                    return (
                      <tr
                        key={contact.id}
                        className="border-t border-slate-800 align-top"
                      >
                        <td className="px-6 py-5">
                          <p className="font-semibold">
                            {contact.name}
                          </p>

                          <a
                            href={`mailto:${contact.email}`}
                            className="mt-1 block text-sm text-blue-400 hover:text-blue-300"
                          >
                            {contact.email}
                          </a>
                        </td>

                        <td className="px-6 py-5 text-slate-300">
                          {contact.phone ? (
                            <a
                              href={`tel:${contact.phone}`}
                              className="hover:text-blue-400"
                            >
                              {contact.phone}
                            </a>
                          ) : (
                            "Not provided"
                          )}
                        </td>

                        <td className="px-6 py-5 text-slate-300">
                          {contact.company || "Not provided"}
                        </td>

                        <td className="max-w-sm px-6 py-5 text-sm leading-6 text-slate-400">
                          {contact.message}
                        </td>

                        <td className="px-6 py-5">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              contact.status === "New"
                                ? "bg-blue-500/15 text-blue-400"
                                : contact.status === "Contacted"
                                  ? "bg-yellow-500/15 text-yellow-400"
                                  : "bg-green-500/15 text-green-400"
                            }`}
                          >
                            {contact.status || "New"}
                          </span>
                        </td>

                        <td className="px-6 py-5 text-sm text-slate-400">
                          {new Date(
                            contact.createdAt
                          ).toLocaleString("en-IN")}
                        </td>

                        <td className="px-6 py-5">
                          <div className="flex min-w-[190px] flex-col gap-2">
                            {contact.status !== "Contacted" && (
                              <button
                                disabled={isProcessing}
                                onClick={() =>
                                  updateStatus(
                                    contact.id,
                                    "Contacted"
                                  )
                                }
                                className="rounded-lg bg-yellow-600 px-4 py-2 text-sm font-semibold hover:bg-yellow-700 disabled:opacity-50"
                              >
                                Mark Contacted
                              </button>
                            )}

                            {contact.status !== "Closed" && (
                              <button
                                disabled={isProcessing}
                                onClick={() =>
                                  updateStatus(
                                    contact.id,
                                    "Closed"
                                  )
                                }
                                className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold hover:bg-green-700 disabled:opacity-50"
                              >
                                Mark Closed
                              </button>
                            )}

                            <button
                              disabled={isProcessing}
                              onClick={() =>
                                deleteContact(contact.id)
                              }
                              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-700 disabled:opacity-50"
                            >
                              {isProcessing
                                ? "Processing..."
                                : "Delete"}
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
"use client";

import { FormEvent, useState } from "react";

export default function ApplyForm({
  jobId,
  jobTitle,
}: {
  jobId: string;
  jobTitle: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resumeUrl: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setLoading(true);
      setStatus("");

      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobId,
          ...formData,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.message || "Application failed.");
        return;
      }

      setStatus("✅ Application submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        resumeUrl: "",
        message: "",
      });
    } catch (error) {
      console.error("Application error:", error);
      setStatus("❌ Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900 p-7 md:p-10">
      <h2 className="text-3xl font-bold">
        Apply for {jobTitle}
      </h2>

      <p className="mt-3 text-slate-400">
        Fill in your details and submit your application.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <input
          required
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-blue-500"
        />

        <input
          required
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-blue-500"
        />

        <input
          required
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-blue-500"
        />

        <input
          name="resumeUrl"
          type="url"
          value={formData.resumeUrl}
          onChange={handleChange}
          placeholder="Resume PDF / Google Drive Link"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-blue-500"
        />

        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Why would you like to join Infinex?"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-blue-600 px-7 py-4 font-bold hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>

        {status && (
          <p
            className={`text-center font-medium ${
              status.includes("✅")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
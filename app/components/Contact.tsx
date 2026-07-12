"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./ui/SectionTitle";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("✅ Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setStatus(data.message || "❌ Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Server error.");
    }

    setLoading(false);
  };

  return (
    <AnimatedSection>
      <section
        id="contact"
        className="bg-slate-900 text-white py-24 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            label="CONTACT"
            title="Let's Build Something Amazing"
            description="Tell us about your project and we'll get back to you within 24 hours."
          />

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
            />

            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
            />

            <textarea
              required
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 py-4 rounded-xl font-semibold transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <div
                className={`text-center font-medium ${
                  status.includes("✅")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {status}
              </div>
            )}
          </form>
        </div>
      </section>
    </AnimatedSection>
  );
}
"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./ui/SectionTitle";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully ✅");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Something went wrong ❌");
      }
    } catch (error) {
      setStatus("Server error ❌");
    }

    setLoading(false);
  };

  return (
    <AnimatedSection>
      <section id="contact" className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            label="CONTACT"
            title="Let's Build Something Amazing"
            description="Tell us about your project and we'll get back to you within 24 hours."
          />

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              required
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
            />

            <input
              required
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
            />

            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Tell us about your project..."
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 px-8 py-4 rounded-xl font-semibold transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="text-green-400 font-medium">{status}</p>}
          </form>
        </div>
      </section>
    </AnimatedSection>
  );
}
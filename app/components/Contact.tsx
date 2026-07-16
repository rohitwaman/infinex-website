"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./ui/SectionTitle";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    value: "admin@infinexhub.com",
    description: "Send your project requirements",
    href: "mailto:admin@infinexhub.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 9307415281",
    description: "Monday to Saturday",
    href: "tel:+919307415281",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Pune, Maharashtra",
    description: "Serving clients across India",
    href: "#contact",
  },
  {
    icon: Clock3,
    title: "Response Time",
    value: "Within 24 Hours",
    description: "Fast business communication",
    href: "#contact",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (status) {
      setStatus("");
      setSuccess(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setStatus("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.message || "Unable to send your enquiry.");
        return;
      }

      setSuccess(true);
      setStatus("Thank you! Your enquiry has been submitted successfully.");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("Server error. Please try again after some time.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatedSection>
      <section
        id="contact"
        className="relative overflow-hidden bg-slate-900 px-6 py-24 text-white"
      >
        <div className="absolute -left-40 top-20 h-[460px] w-[460px] rounded-full bg-blue-600/15 blur-[140px]" />

        <div className="absolute -right-40 bottom-10 h-[460px] w-[460px] rounded-full bg-purple-600/15 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />

        <div className="relative mx-auto max-w-7xl">
          <SectionTitle
            label="CONTACT US"
            title="Let’s Build Something Powerful Together"
            description="Tell us about your software, AI, website, mobile application or business automation requirement. Our team will help you plan the right solution."
          />

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="glass-card rounded-[34px] p-7 md:p-9">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 text-white shadow-lg shadow-blue-500/20">
                  <MessageCircle size={30} />
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Start a Conversation
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  Have an Idea? Let&apos;s Turn It Into a{" "}
                  <span className="gradient-text">
                    Successful Digital Product
                  </span>
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-400">
                  Share your project goals, business challenges and required
                  features. We will review your enquiry and contact you with the
                  next steps.
                </p>

                <div className="mt-8 space-y-4">
                  <ContactPoint text="Clear project requirement discussion" />
                  <ContactPoint text="Technology and feature recommendations" />
                  <ContactPoint text="Transparent development roadmap" />
                  <ContactPoint text="Support from planning to launch" />
                </div>

                <div className="mt-9 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <Send size={21} />
                    </div>

                    <div>
                      <p className="font-black text-white">
                        Quick Response Promise
                      </p>

                      <p className="mt-1 text-sm text-slate-400">
                        We normally respond within 24 business hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      className="group rounded-3xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/25 to-cyan-500/20 text-cyan-300">
                        <Icon size={23} />
                      </div>

                      <p className="mt-4 text-sm text-slate-500">
                        {item.title}
                      </p>

                      <h3 className="mt-1 font-black text-white">
                        {item.value}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {item.description}
                      </p>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="glass-card rounded-[34px] p-7 md:p-10">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    Project Enquiry
                  </p>

                  <h2 className="mt-3 text-3xl font-black">
                    Tell Us About Your Project
                  </h2>

                  <p className="mt-3 leading-7 text-slate-400">
                    Complete the form and our team will contact you.
                  </p>
                </div>

                <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white sm:flex">
                  <Building2 size={27} />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-9 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <FormField
                    label="Full Name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <FormField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  <FormField
                    label="Company Name"
                    name="company"
                    type="text"
                    placeholder="Enter company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-slate-300"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, features, budget, timeline or business challenge..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/70 p-4 leading-7 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-400/5"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="primary-button flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-4 font-black text-white transition duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    "Sending Enquiry..."
                  ) : (
                    <>
                      Send Project Enquiry
                      <ArrowRight size={20} className="ml-3" />
                    </>
                  )}
                </button>

                {status && (
                  <div
                    className={`rounded-2xl border p-4 text-center font-semibold ${
                      success
                        ? "border-green-400/20 bg-green-400/10 text-green-300"
                        : "border-red-400/20 bg-red-400/10 text-red-300"
                    }`}
                  >
                    {status}
                  </div>
                )}

                <p className="text-center text-xs leading-6 text-slate-500">
                  By submitting this form, you agree to be contacted regarding
                  your project enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

function ContactPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2
        size={20}
        className="mt-0.5 shrink-0 text-cyan-300"
      />

      <p className="text-sm leading-6 text-slate-300">
        {text}
      </p>
    </div>
  );
}

type FormFieldProps = {
  label: string;
  name: keyof FormData;
  type: string;
  placeholder: string;
  value: string;
  required?: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  required = false,
  onChange,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-bold text-slate-300"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-400/5"
      />
    </div>
  );
}
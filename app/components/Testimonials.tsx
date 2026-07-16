"use client";

import {
  Quote,
  Star,
  Building2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./ui/SectionTitle";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder",
    company: "GrowthEdge Solutions",
    review:
      "The Infinex Technologies understood our requirements clearly and delivered a modern, fast and professional digital solution. Communication was smooth throughout the project.",
    rating: 5,
    initials: "RS",
  },
  {
    name: "Priya Mehta",
    role: "Operations Head",
    company: "NovaCare Services",
    review:
      "Their team converted our business process into a simple and scalable software system. The product has helped us manage work more efficiently.",
    rating: 5,
    initials: "PM",
  },
  {
    name: "Amit Kulkarni",
    role: "Director",
    company: "NextWave Enterprises",
    review:
      "We were impressed by the clean design, technical understanding and attention to detail. The final website feels premium and performs very well.",
    rating: 5,
    initials: "AK",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Reliable Delivery",
    description:
      "Structured development, transparent communication and dependable support.",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description:
      "Modern design, clean interactions and a strong focus on business value.",
  },
  {
    icon: Building2,
    title: "Business Focused",
    description:
      "Every solution is planned around practical goals, efficiency and growth.",
  },
];

export default function Testimonials() {
  return (
    <AnimatedSection>
      <section className="relative overflow-hidden bg-slate-900 px-6 py-24 text-white">
        <div className="absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-[130px]" />

        <div className="absolute -right-32 bottom-16 h-[420px] w-[420px] rounded-full bg-purple-600/15 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <SectionTitle
            label="CLIENT EXPERIENCE"
            title="What Businesses Say About Working With Us"
            description="We focus on clear communication, thoughtful execution and digital solutions that create real business value."
          />

          <div className="mt-16 grid gap-7 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.name}-${testimonial.company}`}
                className={`group glass-card relative overflow-hidden rounded-[32px] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 md:p-8 ${
                  index === 1 ? "lg:-translate-y-5" : ""
                }`}
              >
                <div className="absolute right-6 top-6 text-cyan-300/10 transition group-hover:text-cyan-300/20">
                  <Quote size={70} />
                </div>

                <div className="relative">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map(
                      (_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={18}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>

                  <p className="mt-6 text-lg leading-8 text-slate-300">
                    “{testimonial.review}”
                  </p>

                  <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 text-sm font-black text-white shadow-lg shadow-blue-500/20">
                      {testimonial.initials}
                    </div>

                    <div>
                      <h3 className="font-black text-white">
                        {testimonial.name}
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        {testimonial.role}
                      </p>

                      <p className="mt-1 text-sm font-semibold text-cyan-300">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {trustPoints.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-slate-950/70 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/40"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/25 to-cyan-500/20 text-cyan-300">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-5 text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-16 overflow-hidden rounded-[36px] border border-cyan-400/20 bg-gradient-to-br from-blue-600/15 via-slate-950 to-purple-600/15 p-8 backdrop-blur-xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Your Success Story Could Be Next
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
                  Let&apos;s Build a Solution That Creates Real Impact for Your
                  Business
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                  Share your project idea with our team and let us help you turn
                  it into a reliable, scalable and memorable digital product.
                </p>
              </div>

              <a
                href="/#contact"
                className="primary-button inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white transition hover:-translate-y-1"
              >
                Start Your Project
                <ArrowRight size={20} className="ml-3" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
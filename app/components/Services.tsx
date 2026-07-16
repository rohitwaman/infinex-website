"use client";

import Link from "next/link";
import {
  Brain,
  Code2,
  Globe2,
  Smartphone,
  CloudCog,
  ShieldCheck,
  Database,
  ArrowUpRight,
} from "lucide-react";

import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./ui/SectionTitle";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Powerful, secure and scalable software designed around your exact business workflows and long-term growth.",
    link: "/services/custom-software",
    accent: "from-blue-600/25 to-cyan-500/15",
    iconColor: "text-cyan-300",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "AI chatbots, automation systems, intelligent tools and machine learning solutions for modern businesses.",
    link: "/services/ai-solutions",
    accent: "from-purple-600/25 to-blue-500/15",
    iconColor: "text-purple-300",
  },
  {
    icon: Globe2,
    title: "Web Development",
    description:
      "Fast, responsive, SEO-friendly and conversion-focused websites built with modern technologies.",
    link: "/services/web-development",
    accent: "from-cyan-600/25 to-blue-500/15",
    iconColor: "text-blue-300",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Modern Android and iOS applications with smooth performance, secure architecture and premium UI.",
    link: "/services/mobile-app-development",
    accent: "from-emerald-600/25 to-cyan-500/15",
    iconColor: "text-emerald-300",
  },
  {
    icon: CloudCog,
    title: "Cloud & DevOps",
    description:
      "Reliable cloud deployment, automation, hosting and DevOps systems for secure and scalable products.",
    link: "/services/cloud-devops",
    accent: "from-indigo-600/25 to-blue-500/15",
    iconColor: "text-indigo-300",
  },
  {
    icon: Database,
    title: "ERP & CRM Systems",
    description:
      "Business management platforms for sales, customers, operations, employees and reporting.",
    link: "/services/erp-crm",
    accent: "from-orange-600/20 to-purple-500/15",
    iconColor: "text-orange-300",
  },
  {
    icon: ShieldCheck,
    title: "Security & Maintenance",
    description:
      "Continuous maintenance, security improvements, monitoring and technical support for your digital products.",
    link: "/services/maintenance",
    accent: "from-rose-600/20 to-blue-500/15",
    iconColor: "text-rose-300",
  },
];

const processPoints = [
  "Business-first planning",
  "Modern technology stack",
  "Clean and scalable architecture",
  "Transparent communication",
];

export default function Services() {
  return (
    <AnimatedSection>
      <section
        id="services"
        className="relative overflow-hidden bg-slate-900 px-6 py-24 text-white"
      >
        <div className="absolute left-[-120px] top-20 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]" />

        <div className="absolute bottom-0 right-[-140px] h-[420px] w-[420px] rounded-full bg-purple-600/15 blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />

        <div className="relative mx-auto max-w-7xl">
          <SectionTitle
            label="OUR SERVICES"
            title="Technology Services Built for Real Business Growth"
            description="From strategy and design to development, deployment and support, we provide end-to-end technology solutions for startups, companies and growing businesses."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className={`group glass-card relative overflow-hidden rounded-3xl p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 ${
                    index === 0 ? "xl:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 transition duration-300 group-hover:opacity-100`}
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-5">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 ${service.iconColor}`}
                      >
                        <Icon size={28} />
                      </div>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition group-hover:border-cyan-400/30 group-hover:text-cyan-300">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-black">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                      {service.description}
                    </p>

                    <Link
                      href={service.link}
                      className="mt-7 inline-flex items-center font-bold text-cyan-300 transition hover:text-cyan-200"
                    >
                      Explore Service
                      <ArrowUpRight
                        size={17}
                        className="ml-2 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-16 overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/70 p-7 backdrop-blur-xl md:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  How We Work
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  From Your Idea to a{" "}
                  <span className="gradient-text">
                    Scalable Digital Product
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                  We understand your goals, plan the right technology, build
                  carefully and support the product after launch.
                </p>

                <Link
                  href="/#contact"
                  className="primary-button mt-7 inline-flex rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-bold text-white transition hover:-translate-y-1"
                >
                  Discuss Your Project
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {processPoints.map((point, index) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 font-black text-white">
                      {index + 1}
                    </div>

                    <p className="mt-4 font-bold text-slate-200">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
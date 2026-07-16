"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Globe2,
  Layers3,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

const stats = [
  {
    value: "20+",
    label: "Digital Solutions",
  },
  {
    value: "24/7",
    label: "Technical Support",
  },
  {
    value: "100%",
    label: "Growth Focused",
  },
  {
    value: "Fast",
    label: "Project Delivery",
  },
];

const capabilities = [
  {
    icon: Cpu,
    title: "AI Solutions",
    description: "Automation, chatbots and intelligent business tools.",
  },
  {
    icon: Globe2,
    title: "Web Platforms",
    description: "Modern, responsive and scalable web experiences.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Powerful mobile products for Android and iOS.",
  },
  {
    icon: Layers3,
    title: "Custom Software",
    description: "Business software designed around your workflow.",
  },
];

const trustPoints = [
  "Business-focused planning",
  "Modern technology stack",
  "Secure and scalable architecture",
];

export default function Hero() {
  return (
    <section className="premium-background grid-background relative isolate min-h-screen overflow-hidden px-6 pb-20 pt-36 text-white">
      <div className="glow-one absolute -left-40 top-20 h-[460px] w-[460px] rounded-full bg-blue-600/30 blur-[120px]" />

      <div className="glow-two absolute -right-40 top-32 h-[500px] w-[500px] rounded-full bg-purple-600/25 blur-[130px]" />

      <div className="absolute bottom-[-240px] left-1/2 h-[460px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[130px]" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
            </span>

            Software • AI • Web • Mobile • Cloud
          </div>

          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
            We Build Powerful Digital Products for{" "}
            <span className="gradient-text">
              Modern Businesses
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            The Infinex Technologies helps startups and businesses build
            software, AI solutions, premium websites, SaaS platforms and mobile
            applications that are fast, secure and ready to scale.
          </p>

          <div className="mt-8 space-y-3">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 text-sm font-semibold text-slate-300"
              >
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-cyan-300"
                />

                {point}
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="primary-button inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-4 text-base font-black text-white transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
            >
              Start Your Project
              <ArrowRight size={20} className="ml-3" />
            </Link>

            <Link
              href="/#portfolio"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/50 px-8 py-4 text-base font-black text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800/80"
            >
              View Our Work
            </Link>
          </div>

          <div className="mt-12 grid max-w-3xl grid-cols-2 gap-4 border-t border-slate-700/70 pt-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-black text-white sm:text-3xl">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-12 rounded-[54px] bg-gradient-to-br from-blue-500/20 via-cyan-500/5 to-purple-500/25 blur-3xl" />

          <div className="floating-card glass-card relative overflow-hidden rounded-[36px] p-3">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-400">
                infinex-digital-platform
              </div>

              <div className="w-12" />
            </div>

            <div className="relative min-h-[520px] overflow-hidden rounded-[28px] bg-[#050b18] p-6 sm:p-8">
              <div className="absolute right-5 top-5 rounded-xl border border-green-400/20 bg-green-400/10 px-3 py-1.5 text-xs font-semibold text-green-300">
                System Online
              </div>

              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900 shadow-lg shadow-blue-500/20">
                  <Image
                    src="/logo.png"
                    alt="The Infinex Technologies logo"
                    fill
                    priority
                    sizes="64px"
                    className="object-contain p-1"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                    Digital Engineering
                  </p>

                  <h3 className="mt-1 text-xl font-black text-white">
                    The Infinex Technologies
                  </h3>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="font-mono text-sm leading-7 sm:text-base">
                  <p className="text-purple-400">
                    const{" "}
                    <span className="text-blue-300">
                      infinex
                    </span>{" "}
                    = {"{"}
                  </p>

                  <p className="code-pulse ml-5 text-slate-300">
                    focus:{" "}
                    <span className="text-green-300">
                      &quot;Digital Growth&quot;
                    </span>
                    ,
                  </p>

                  <p className="ml-5 text-slate-300">
                    solutions: [
                  </p>

                  <p className="code-pulse ml-10 text-cyan-300">
                    &quot;Artificial Intelligence&quot;,
                  </p>

                  <p className="ml-10 text-blue-300">
                    &quot;Software Development&quot;,
                  </p>

                  <p className="code-pulse ml-10 text-purple-300">
                    &quot;SaaS Platforms&quot;,
                  </p>

                  <p className="ml-10 text-emerald-300">
                    &quot;Mobile Applications&quot;,
                  </p>

                  <p className="ml-5 text-slate-300">
                    ],
                  </p>

                  <p className="ml-5 text-slate-300">
                    mission:{" "}
                    <span className="text-yellow-300">
                      &quot;Build. Scale. Innovate.&quot;
                    </span>
                  </p>

                  <p className="text-purple-400">
                    {"}"};
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {capabilities.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-500/20 text-cyan-300">
                        <Icon size={20} />
                      </div>

                      <h4 className="mt-3 text-sm font-black text-white">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="glass-card absolute -left-8 top-36 hidden rounded-2xl px-5 py-4 md:block">
            <div className="flex items-center gap-3">
              <Zap size={20} className="text-yellow-300" />

              <div>
                <p className="text-xs text-slate-400">
                  Performance
                </p>

                <p className="mt-1 font-black text-green-400">
                  Optimized
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card absolute -bottom-7 right-5 hidden rounded-2xl px-5 py-4 md:block">
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} className="text-cyan-300" />

              <div>
                <p className="text-xs text-slate-400">
                  Architecture
                </p>

                <p className="mt-1 font-black text-cyan-400">
                  Secure & Scalable
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card absolute -right-8 top-60 hidden rounded-2xl px-4 py-3 xl:block">
            <div className="flex items-center gap-3">
              <Sparkles size={18} className="text-purple-300" />

              <p className="text-sm font-bold text-slate-200">
                Premium Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";

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
];

export default function Hero() {
  return (
    <section className="premium-background grid-background relative isolate min-h-screen overflow-hidden px-6 pb-20 pt-36 text-white">
      {/* Animated glowing background */}

      <div className="glow-one absolute -left-32 top-20 h-[430px] w-[430px] rounded-full bg-blue-600/30 blur-[110px]" />

      <div className="glow-two absolute -right-32 top-32 h-[470px] w-[470px] rounded-full bg-purple-600/25 blur-[120px]" />

      <div className="absolute bottom-[-230px] left-1/2 h-[430px] w-[850px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px]" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left side */}

        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
            </span>

            Software • Artificial Intelligence • Digital Growth
          </div>

          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
            We Build Digital Products That{" "}
            <span className="gradient-text">
              Move Businesses Forward
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            The Infinex Technologies creates powerful
            software, AI products, premium websites, SaaS
            platforms and scalable mobile applications for
            modern businesses.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="primary-button inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-4 text-base font-bold text-white transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
            >
              Build Your Project

              <span className="ml-3 text-xl">
                →
              </span>
            </Link>

            <Link
              href="/#services"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/50 px-8 py-4 text-base font-bold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800/80"
            >
              Explore Our Services
            </Link>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-slate-700/70 pt-8">
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

        {/* Right side */}

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-10 rounded-[50px] bg-gradient-to-br from-blue-500/20 via-cyan-500/5 to-purple-500/25 blur-3xl" />

          <div className="floating-card glass-card relative overflow-hidden rounded-[34px] p-3">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />

                <span className="h-3 w-3 rounded-full bg-yellow-400" />

                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-400">
                infinex-platform
              </div>

              <div className="w-12" />
            </div>

            <div className="relative min-h-[460px] overflow-hidden rounded-[26px] bg-[#050b18] p-6 sm:p-8">
              <div className="absolute right-5 top-5 rounded-xl border border-green-400/20 bg-green-400/10 px-3 py-1.5 text-xs font-semibold text-green-300">
                System Online
              </div>

              <div className="mt-14 font-mono text-sm leading-7 sm:text-base">
                <p className="text-purple-400">
                  const{" "}
                  <span className="text-blue-300">
                    infinex
                  </span>{" "}
                  = {"{"}
                </p>

                <p className="code-pulse ml-5 text-slate-300">
                  company:{" "}
                  <span className="text-green-300">
                    &quot;The Infinex Technologies&quot;
                  </span>
                  ,
                </p>

                <p className="ml-5 text-slate-300">
                  capabilities: [
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
                  ,
                </p>

                <p className="ml-5 text-slate-300">
                  future:{" "}
                  <span className="text-green-300">
                    &quot;Ready&quot;
                  </span>
                </p>

                <p className="text-purple-400">
                  {"}"};
                </p>
              </div>

              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                <FeatureBadge label="Fast" />
                <FeatureBadge label="Secure" />
                <FeatureBadge label="Scalable" />
              </div>
            </div>
          </div>

          <div className="glass-card absolute -left-7 top-32 hidden rounded-2xl px-5 py-4 md:block">
            <p className="text-xs text-slate-400">
              Performance
            </p>

            <p className="mt-1 text-lg font-black text-green-400">
              99.9%
            </p>
          </div>

          <div className="glass-card absolute -bottom-7 right-5 hidden rounded-2xl px-5 py-4 md:block">
            <p className="text-xs text-slate-400">
              Business Growth
            </p>

            <p className="mt-1 font-black text-cyan-400">
              Accelerated
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureBadge({
  label,
}: {
  label: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center text-xs font-semibold text-slate-300">
      {label}
    </div>
  );
}
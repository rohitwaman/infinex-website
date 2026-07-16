"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiSupabase,
  SiVercel,
  SiDocker,
  SiGit,
  SiFigma,
} from "react-icons/si";

import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./ui/SectionTitle";

const technologies = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Frontend",
  },
  {
    name: "React",
    icon: SiReact,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Development",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "Database",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    category: "Database",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Design",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    category: "Backend",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    category: "Deployment",
  },
  {
    name: "Docker",
    icon: SiDocker,
    category: "DevOps",
  },
  {
    name: "Git",
    icon: SiGit,
    category: "Development",
  },
  {
    name: "Figma",
    icon: SiFigma,
    category: "Design",
  },
];

const capabilities = [
  {
    title: "Modern Frontend",
    description:
      "Fast and responsive interfaces built with React, Next.js and TypeScript.",
  },
  {
    title: "Scalable Backend",
    description:
      "Secure APIs, databases and server-side architecture designed for growth.",
  },
  {
    title: "Cloud Deployment",
    description:
      "Reliable deployment, monitoring and optimization using modern cloud tools.",
  },
  {
    title: "Product Design",
    description:
      "Clean, intuitive and conversion-focused user experiences for web and mobile.",
  },
];

export default function TechStack() {
  return (
    <AnimatedSection>
      <section className="relative overflow-hidden bg-slate-900 px-6 py-24 text-white">
        <div className="absolute left-[-140px] top-24 h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-[130px]" />

        <div className="absolute bottom-[-100px] right-[-140px] h-[420px] w-[420px] rounded-full bg-cyan-600/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <SectionTitle
            label="TECHNOLOGY STACK"
            title="Modern Technologies for Reliable Products"
            description="We select the right tools for every project to deliver fast, secure, maintainable and scalable digital products."
          />

          <div className="mt-16 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {technologies.map((technology) => {
              const Icon = technology.icon;

              return (
                <article
                  key={technology.name}
                  className="group glass-card rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-cyan-300 transition group-hover:scale-110 group-hover:text-white">
                      <Icon size={30} />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-400">
                      {technology.category}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-black">
                    {technology.name}
                  </h3>

                  <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-24" />
                </article>
              );
            })}
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="rounded-3xl border border-white/10 bg-slate-950/70 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-5 text-xl font-black">
                  {capability.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/80 p-8 backdrop-blur-xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Built for Performance
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  The Right Technology for{" "}
                  <span className="gradient-text">
                    Every Business Challenge
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                  We do not force every project into the same stack. We evaluate
                  your requirements and choose technologies that support
                  performance, security, scalability and future growth.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <TechPoint
                  title="Fast"
                  description="Optimized applications and modern delivery."
                />

                <TechPoint
                  title="Secure"
                  description="Strong architecture and secure data handling."
                />

                <TechPoint
                  title="Scalable"
                  description="Systems designed to grow with your business."
                />

                <TechPoint
                  title="Maintainable"
                  description="Clean code and structured development practices."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

function TechPoint({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

      <h3 className="mt-4 text-lg font-black">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        {description}
      </p>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  FolderKanban,
  Loader2,
  Sparkles,
} from "lucide-react";

import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./ui/SectionTitle";

type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  tech: string;
  imageUrl?: string | null;
  liveUrl?: string | null;
  createdAt: string;
};

export default function Portfolio() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    try {
      setLoading(true);

      const response = await fetch("/api/portfolio", {
        cache: "no-store",
      });

      const data = await response.json();

      setProjects(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Portfolio loading error:", error);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatedSection>
      <section
        id="portfolio"
        className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
      >
        <div className="absolute -left-36 top-24 h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-[130px]" />

        <div className="absolute -right-36 bottom-10 h-[420px] w-[420px] rounded-full bg-purple-600/15 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <SectionTitle
            label="OUR PORTFOLIO"
            title="Digital Products Built for Real Business Impact"
            description="Explore selected software, AI, web and business management solutions designed to improve efficiency, customer experience and growth."
          />

          <div className="mt-10 flex flex-col gap-5 rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20">
                <Sparkles size={24} />
              </div>

              <div>
                <h3 className="text-xl font-black">
                  Solutions Designed to Scale
                </h3>

                <p className="mt-2 max-w-2xl leading-7 text-slate-400">
                  Every project is planned around business requirements,
                  performance, security and long-term maintainability.
                </p>
              </div>
            </div>

            <Link
              href="/#contact"
              className="primary-button inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-bold text-white transition hover:-translate-y-1"
            >
              Start Your Project
              <ArrowUpRight size={18} className="ml-2" />
            </Link>
          </div>

          {loading ? (
            <div className="mt-16 flex min-h-[320px] items-center justify-center rounded-3xl border border-white/10 bg-slate-900/50">
              <div className="text-center">
                <Loader2
                  size={38}
                  className="mx-auto animate-spin text-cyan-300"
                />

                <p className="mt-4 text-slate-400">
                  Loading projects...
                </p>
              </div>
            </div>
          ) : projects.length === 0 ? (
            <div className="mt-16 rounded-3xl border border-white/10 bg-slate-900/60 p-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                <FolderKanban size={30} />
              </div>

              <h3 className="mt-5 text-2xl font-black">
                Projects Coming Soon
              </h3>

              <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-400">
                We are preparing detailed case studies of our software, AI,
                website and mobile application work.
              </p>
            </div>
          ) : (
            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className={`group glass-card relative overflow-hidden rounded-[32px] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 ${
                    index === 0 ? "xl:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      index === 0 ? "h-72 md:h-96" : "h-64"
                    }`}
                  >
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-700/50 via-slate-900 to-purple-700/40">
                        <FolderKanban
                          size={56}
                          className="text-cyan-300/70"
                        />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-xs font-semibold text-cyan-300 backdrop-blur-xl">
                      Featured Project
                    </div>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-white backdrop-blur-xl transition hover:border-cyan-400 hover:text-cyan-300"
                        aria-label={`Open ${project.title}`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>

                  <div className="relative p-7">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                          Infinex Project
                        </p>

                        <h3 className="mt-3 text-2xl font-black md:text-3xl">
                          {project.title}
                        </h3>
                      </div>

                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition group-hover:border-cyan-400/30 group-hover:text-cyan-300">
                        <ArrowUpRight size={19} />
                      </span>
                    </div>

                    <p className="mt-5 leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech
                        .split(",")
                        .map((technology) => technology.trim())
                        .filter(Boolean)
                        .map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300"
                          >
                            {technology}
                          </span>
                        ))}
                    </div>

                    <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                      <p className="text-sm text-slate-500">
                        {new Date(project.createdAt).toLocaleDateString(
                          "en-IN",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </p>

                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center font-bold text-cyan-300 transition hover:text-cyan-200"
                        >
                          View Live Project
                          <ArrowUpRight size={17} className="ml-2" />
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-slate-500">
                          Private Project
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="mt-16 rounded-[36px] border border-cyan-400/20 bg-gradient-to-br from-blue-600/15 via-slate-900 to-purple-600/15 p-8 text-center backdrop-blur-xl md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Have a Project in Mind?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
              Let&apos;s Build a Digital Product Your Customers Will Remember
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Share your idea with our team and get a clear technology plan for
              design, development, deployment and future scaling.
            </p>

            <Link
              href="/#contact"
              className="primary-button mt-8 inline-flex items-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white transition hover:-translate-y-1"
            >
              Discuss Your Project
              <ArrowUpRight size={20} className="ml-3" />
            </Link>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
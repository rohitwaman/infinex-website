"use client";

import { useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string;
  imageUrl?: string;
  liveUrl?: string;
};

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/portfolio")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <AnimatedSection>
      <section id="portfolio" className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-5xl font-bold">
            Our Portfolio
          </h2>

          <p className="mb-14 text-center text-slate-400">
            Real software projects and digital solutions by Infinex Technologies.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-3xl border border-slate-700 bg-slate-900 p-7"
              >
                <div className="mb-6 h-36 rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600" />

                <h3 className="text-xl font-bold">{project.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                <p className="mt-5 text-sm font-semibold text-blue-400">
                  {project.tech}
                </p>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-700"
                  >
                    View Live
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
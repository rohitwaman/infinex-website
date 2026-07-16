"use client";

import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Lightbulb,
  Rocket,
  Search,
} from "lucide-react";

import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./ui/SectionTitle";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Research",
    description:
      "We understand your business, users, goals, challenges and technical requirements before writing any code.",
    points: [
      "Business requirement analysis",
      "User and competitor research",
      "Feature planning",
    ],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy & Design",
    description:
      "We define the right product strategy, user experience, visual direction and technical architecture.",
    points: [
      "Product roadmap",
      "UI/UX wireframes",
      "Technology selection",
    ],
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description:
      "Our team builds the solution with clean code, scalable architecture and modern development practices.",
    points: [
      "Frontend and backend development",
      "Database and API integration",
      "Security and performance",
    ],
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Testing & Quality",
    description:
      "Every feature is tested carefully to ensure the product is reliable, responsive, secure and easy to use.",
    points: [
      "Functional testing",
      "Mobile responsiveness",
      "Bug fixing and optimization",
    ],
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We deploy the product, monitor performance and continue supporting improvements after launch.",
    points: [
      "Production deployment",
      "Monitoring and maintenance",
      "Future feature upgrades",
    ],
  },
];

export default function Process() {
  return (
    <AnimatedSection>
      <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white">
        <div className="absolute -left-36 top-40 h-[420px] w-[420px] rounded-full bg-cyan-600/10 blur-[130px]" />

        <div className="absolute -right-36 bottom-16 h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <SectionTitle
            label="OUR PROCESS"
            title="A Clear Process From Idea to Launch"
            description="We follow a structured and transparent development process to deliver reliable products without confusion, delays or unnecessary complexity."
          />

          <div className="relative mt-16">
            <div className="absolute bottom-0 left-8 top-0 hidden w-px bg-gradient-to-b from-cyan-400/50 via-blue-500/40 to-purple-500/40 lg:block" />

            <div className="space-y-7">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="group relative grid gap-6 lg:grid-cols-[80px_1fr]"
                  >
                    <div className="relative hidden lg:flex lg:justify-center">
                      <div className="z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-slate-900 text-lg font-black text-cyan-300 shadow-lg shadow-cyan-500/10">
                        {step.number}
                      </div>
                    </div>

                    <div className="glass-card rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 md:p-9">
                      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                        <div>
                          <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 text-white shadow-lg shadow-blue-500/20">
                              <Icon size={27} />
                            </div>

                            <div>
                              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                                Step {step.number}
                              </p>

                              <h3 className="mt-1 text-2xl font-black sm:text-3xl">
                                {step.title}
                              </h3>
                            </div>
                          </div>

                          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                            {step.description}
                          </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                          <div className="space-y-4">
                            {step.points.map((point) => (
                              <div
                                key={point}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle2
                                  size={20}
                                  className="mt-0.5 shrink-0 text-cyan-300"
                                />

                                <p className="text-sm leading-6 text-slate-300">
                                  {point}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {index < steps.length - 1 && (
                        <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-slate-500">
                          <span>Next step</span>
                          <ArrowRight
                            size={17}
                            className="transition group-hover:translate-x-1 group-hover:text-cyan-300"
                          />
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-16 rounded-[34px] border border-cyan-400/20 bg-gradient-to-br from-blue-600/15 via-slate-900 to-purple-600/15 p-8 text-center backdrop-blur-xl md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Ready to Start?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
              Let&apos;s Turn Your Business Idea Into a Powerful Digital Product
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Share your project idea with our team and get a clear plan for
              design, development and launch.
            </p>

            <a
              href="/#contact"
              className="primary-button mt-8 inline-flex items-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white transition hover:-translate-y-1"
            >
              Start Your Project
              <ArrowRight size={20} className="ml-3" />
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
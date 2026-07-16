"use client";

import {
  Brain,
  Code2,
  Globe2,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./ui/SectionTitle";

const highlights = [
  {
    icon: Code2,
    title: "Modern Engineering",
    description:
      "We build fast, secure and scalable products using modern technologies and clean development practices.",
  },
  {
    icon: Brain,
    title: "AI-Driven Innovation",
    description:
      "We combine intelligent automation and artificial intelligence to solve real business problems.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Solutions",
    description:
      "Every solution is designed with performance, security, stability and long-term growth in mind.",
  },
  {
    icon: Rocket,
    title: "Business Growth",
    description:
      "Our goal is not only to build software, but to help businesses launch, scale and grow faster.",
  },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To transform business ideas into powerful digital products that create real value, improve efficiency and support long-term growth.",
  },
  {
    icon: Globe2,
    title: "Our Vision",
    description:
      "To become a trusted global technology company known for innovation, quality, reliability and meaningful digital transformation.",
  },
  {
    icon: Users,
    title: "Our Approach",
    description:
      "We work closely with every client, understand their goals and deliver practical solutions with clear communication at every stage.",
  },
];

const stats = [
  {
    value: "20+",
    label: "Digital Solutions",
  },
  {
    value: "10+",
    label: "Technology Services",
  },
  {
    value: "24/7",
    label: "Support Focus",
  },
  {
    value: "100%",
    label: "Growth Mindset",
  },
];

export default function About() {
  return (
    <AnimatedSection>
      <section
        id="about"
        className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
      >
        <div className="absolute left-[-120px] top-24 h-80 w-80 rounded-full bg-blue-600/15 blur-[110px]" />

        <div className="absolute right-[-120px] bottom-20 h-96 w-96 rounded-full bg-purple-600/15 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <SectionTitle
            label="ABOUT INFINEX"
            title="Technology Built Around Your Business"
            description="The Infinex Technologies creates modern software, AI solutions, websites, SaaS platforms and mobile applications that help businesses move forward."
          />

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                <Sparkles size={16} />
                Building digital possibilities
              </div>

              <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
                We Turn Ideas Into{" "}
                <span className="gradient-text">
                  Powerful Digital Products
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                The Infinex Technologies is a modern technology company focused
                on software development, artificial intelligence, web
                applications, mobile apps and enterprise digital solutions.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                We help startups, growing businesses and organizations convert
                ideas into reliable products through thoughtful design, strong
                engineering and a clear understanding of business needs.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card rounded-2xl p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
                  >
                    <p className="text-3xl font-black text-white">
                      {stat.value}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-blue-500/15 via-cyan-500/5 to-purple-500/20 blur-3xl" />

              <div className="glass-card relative overflow-hidden rounded-[32px] p-7 md:p-9">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                      Infinex Advantage
                    </p>

                    <h3 className="mt-3 text-3xl font-black">
                      Why Businesses Choose Us
                    </h3>
                  </div>

                  <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/20 sm:flex">
                    <Rocket size={28} />
                  </div>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {highlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/25 to-cyan-500/20 text-cyan-300">
                          <Icon size={24} />
                        </div>

                        <h4 className="mt-4 text-lg font-bold">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="glass-card rounded-3xl p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-400/40"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 text-white shadow-lg shadow-blue-500/20">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
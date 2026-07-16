"use client";

import { useState } from "react";
import {
  ChevronDown,
  CircleHelp,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./ui/SectionTitle";

const faqs = [
  {
    question: "What services does The Infinex Technologies provide?",
    answer:
      "We provide custom software development, AI solutions, website development, mobile app development, SaaS platforms, ERP and CRM systems, cloud solutions, maintenance and technical support.",
  },
  {
    question: "Can you build a complete product from idea to launch?",
    answer:
      "Yes. We can support the complete journey including requirement analysis, product planning, UI/UX design, frontend development, backend development, database integration, testing, deployment and post-launch support.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes. We work with startups, small businesses, growing companies and organizations. We plan solutions according to the business stage, budget, goals and technical requirements.",
  },
  {
    question: "How long does a software or website project take?",
    answer:
      "The timeline depends on the project scope and complexity. A basic website may take a few weeks, while larger software, SaaS, ERP or mobile app projects may take several weeks or months.",
  },
  {
    question: "Will I receive support after the project is launched?",
    answer:
      "Yes. We can provide maintenance, monitoring, bug fixes, security updates, performance improvements and future feature development after launch.",
  },
  {
    question: "Can you improve or redesign an existing website or application?",
    answer:
      "Yes. We can review your existing product, identify performance, design and technical issues, and provide a structured upgrade or complete redesign.",
  },
  {
    question: "Do you provide AI chatbot and automation solutions?",
    answer:
      "Yes. We build AI chatbots, workflow automation, intelligent assistants, business automation tools and custom AI-based solutions for different industries.",
  },
  {
    question: "How do I start a project with Infinex?",
    answer:
      "You can submit the contact form with your project details. Our team will review your requirements, discuss the scope and provide the next steps for planning and development.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  function toggleFAQ(index: number) {
    setActiveIndex((current) => (current === index ? null : index));
  }

  return (
    <AnimatedSection>
      <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white">
        <div className="absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-[130px]" />

        <div className="absolute -right-32 bottom-16 h-[420px] w-[420px] rounded-full bg-purple-600/15 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <SectionTitle
            label="FREQUENTLY ASKED QUESTIONS"
            title="Answers to Common Questions About Working With Us"
            description="Learn more about our services, process, project timelines, support and how to start your digital project with The Infinex Technologies."
          />

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="glass-card h-fit rounded-[32px] p-7 md:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 text-white shadow-lg shadow-blue-500/20">
                <CircleHelp size={28} />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Need More Information?
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight">
                Let&apos;s Discuss Your Project Requirements
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Every business requirement is different. Share your idea,
                challenge or technical requirement and our team will guide you
                with the right solution.
              </p>

              <a
                href="/#contact"
                className="primary-button mt-8 inline-flex items-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-bold text-white transition hover:-translate-y-1"
              >
                Talk to Our Team
                <MessageCircle size={19} className="ml-3" />
              </a>

              <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                <div className="flex items-center gap-3">
                  <Sparkles size={19} className="text-cyan-300" />

                  <p className="font-bold text-slate-200">
                    Clear and Transparent Process
                  </p>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  We explain project scope, timeline, technology and development
                  stages clearly before starting.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                  <article
                    key={faq.question}
                    className={`overflow-hidden rounded-3xl border transition duration-300 ${
                      isOpen
                        ? "border-cyan-400/40 bg-slate-900"
                        : "border-white/10 bg-slate-900/60 hover:border-blue-400/30"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left md:px-7"
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black transition ${
                            isOpen
                              ? "bg-gradient-to-br from-blue-600 to-cyan-500 text-white"
                              : "border border-white/10 bg-white/5 text-slate-400"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="pt-1 text-lg font-black leading-7 md:text-xl">
                          {faq.question}
                        </h3>
                      </div>

                      <ChevronDown
                        size={22}
                        className={`shrink-0 text-cyan-300 transition duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-white/10 px-6 py-6 md:px-7">
                          <p className="pl-14 leading-8 text-slate-400">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-16 rounded-[36px] border border-cyan-400/20 bg-gradient-to-br from-blue-600/15 via-slate-900 to-purple-600/15 p-8 text-center backdrop-blur-xl md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Still Have Questions?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
              Get a Clear Technology Plan for Your Business Idea
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Tell us what you want to build and our team will help you
              understand the right design, features, technology and development
              approach.
            </p>

            <a
              href="/#contact"
              className="primary-button mt-8 inline-flex items-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white transition hover:-translate-y-1"
            >
              Contact Infinex
              <MessageCircle size={20} className="ml-3" />
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
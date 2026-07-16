"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUp,
  Mail,
  MapPin,
  Phone,
  Globe,
} from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/#contact" },
];

const serviceLinks = [
  {
    label: "Custom Software",
    href: "/services/custom-software",
  },
  {
    label: "AI Solutions",
    href: "/services/ai-solutions",
  },
  {
    label: "Web Development",
    href: "/services/web-development",
  },
  {
    label: "Mobile Apps",
    href: "/services/mobile-app-development",
  },
  {
    label: "ERP & CRM",
    href: "/services/erp-crm",
  },
  {
    label: "Cloud & DevOps",
    href: "/services/cloud-devops",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: FaFacebookF,
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: FaGithub,
  },
];

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-white">
      <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900 shadow-lg shadow-blue-500/20">
                <Image
                  src="/logo.png"
                  alt="The Infinex Technologies logo"
                  fill
                  sizes="64px"
                  className="object-contain p-1"
                />
              </div>

              <div>
                <p className="text-2xl font-black tracking-wide">
                  INFINEX
                </p>

                <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                  Technologies
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              The Infinex Technologies builds modern software, AI solutions,
              premium websites, SaaS platforms and scalable mobile
              applications for growing businesses.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black">Quick Links</h3>

            <div className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-slate-400 transition hover:translate-x-1 hover:text-cyan-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black">Services</h3>

            <div className="mt-6 space-y-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-slate-400 transition hover:translate-x-1 hover:text-cyan-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black">Contact</h3>

            <div className="mt-6 space-y-5">
              <a
                href="mailto:admin@infinexhub.com"
                className="group flex items-start gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="mt-1 text-sm font-semibold text-slate-300 transition group-hover:text-cyan-300">
                    admin@infinexhub.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919307415281"
                className="group flex items-start gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-400/10 text-blue-300">
                  <Phone size={19} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Phone</p>
                  <p className="mt-1 text-sm font-semibold text-slate-300 transition group-hover:text-cyan-300">
                    +91 9307415281
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-400/10 text-purple-300">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="mt-1 text-sm font-semibold text-slate-300">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-[32px] border border-cyan-400/20 bg-gradient-to-r from-blue-600/15 via-slate-900 to-purple-600/15 p-7 md:p-9">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Have a Project in Mind?
              </p>

              <h2 className="mt-3 text-2xl font-black md:text-3xl">
                Let&apos;s Build Something Powerful Together
              </h2>

              <p className="mt-3 max-w-2xl text-slate-400">
                Share your business idea and get a clear technology plan from
                our team.
              </p>
            </div>

            <Link
              href="/#contact"
              className="primary-button inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-bold text-white transition hover:-translate-y-1"
            >
              Start Your Project
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} The Infinex Technologies Pvt. Ltd.
            All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/privacy-policy"
              className="transition hover:text-cyan-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-cyan-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-slate-900/90 text-cyan-300 shadow-lg shadow-cyan-500/10 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-slate-800"
      >
        <ArrowUp size={21} />
      </button>
    </footer>
  );
}
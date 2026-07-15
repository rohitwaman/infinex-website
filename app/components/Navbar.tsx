"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Services",
    href: "/#services",
  },
  {
    label: "Portfolio",
    href: "/#portfolio",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Careers",
    href: "/careers",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <nav className="glass-card mx-auto max-w-7xl rounded-2xl px-5 py-4 md:px-7">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 text-lg font-black text-white shadow-lg shadow-blue-500/30">
              IX
            </div>

            <div>
              <p className="text-xl font-black tracking-wide text-white">
                INFINEX
              </p>

              <p className="hidden text-[10px] uppercase tracking-[0.25em] text-slate-400 sm:block">
                Technologies
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/#contact"
            className="primary-button hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 lg:inline-flex"
          >
            Start a Project
          </Link>

          <button
            type="button"
            aria-label="Open navigation"
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            className="rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white lg:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-5 border-t border-white/10 pt-5 lg:hidden">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 font-semibold text-slate-300 transition hover:bg-white/5 hover:text-cyan-300"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-center font-bold text-white"
              >
                Start a Project
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
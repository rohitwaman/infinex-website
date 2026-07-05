"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-6 py-4 backdrop-blur-xl">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
        >
          INFINEX
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#contact">Contact</Link>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-700">
          Get Started
        </button>
      </nav>
    </header>
  );
}
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#020617]">
        {/* Background Glow */}
        <div className="absolute -left-32 top-16 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="relative h-24 w-24 animate-pulse overflow-hidden rounded-3xl border border-cyan-400/30 bg-slate-900 shadow-2xl shadow-cyan-500/20">
            <Image
              src="/logo.png"
              alt="Infinex Logo"
              fill
              priority
              className="object-contain p-2"
            />
          </div>

          {/* Company Name */}
          <h1 className="mt-8 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-4xl font-black tracking-wider text-transparent md:text-5xl">
            THE INFINEX
          </h1>

          <p className="mt-3 text-sm uppercase tracking-[0.45em] text-slate-400">
            Technologies
          </p>

          {/* Loader */}
          <div className="mt-10 h-2 w-64 overflow-hidden rounded-full bg-slate-800">
            <div className="loading-bar h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" />
          </div>

          <p className="mt-5 text-sm text-slate-500">
            Loading Experience...
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
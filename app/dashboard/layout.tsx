"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "▦",
  },
  {
    title: "Leads",
    href: "/dashboard/leads",
    icon: "◎",
  },
  {
    title: "Portfolio",
    href: "/dashboard/portfolio",
    icon: "◆",
  },
  {
    title: "Blogs",
    href: "/dashboard/blog",
    icon: "▤",
  },
  {
    title: "Jobs",
    href: "/dashboard/jobs",
    icon: "▣",
  },
  {
    title: "Applications",
    href: "/dashboard/applications",
    icon: "◉",
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  function isActive(href: string) {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }

    return pathname.startsWith(href);
  }

  async function handleLogout() {
    try {
      setLoggingOut(true);

      await fetch("/api/logout", {
        method: "POST",
      });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      router.replace("/login");
      router.refresh();
      setLoggingOut(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-40 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white shadow-xl lg:hidden"
      >
        ☰
      </button>

      {mobileOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`fixed bottom-0 left-0 top-0 z-50 flex w-72 flex-col border-r border-slate-800 bg-slate-950/95 p-5 text-white backdrop-blur-xl transition-transform duration-300 ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/dashboard"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 text-lg font-black shadow-lg shadow-blue-500/20">
              IX
            </div>

            <div>
              <p className="text-xl font-black tracking-wide">
                INFINEX
              </p>

              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Admin Panel
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg border border-slate-700 px-3 py-2 text-slate-300 lg:hidden"
          >
            ✕
          </button>
        </div>

        <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Workspace
          </p>

          <p className="mt-2 font-bold">
            The Infinex Technologies
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Website Management System
          </p>
        </div>

        <nav className="mt-8 flex-1 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-4 rounded-2xl px-4 py-3.5 font-semibold transition ${
                  active
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/20"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-lg">
                  {item.icon}
                </span>

                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-slate-800 pt-5">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-4 py-3 font-semibold text-slate-400 transition hover:bg-slate-900 hover:text-white"
          >
            <span>↗</span>
            Visit Website
          </Link>

          <button
            type="button"
            onClick={() => void handleLogout()}
            disabled={loggingOut}
            className="mt-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 font-semibold text-red-400 transition hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span>⇥</span>

            {loggingOut ? "Logging out..." : "Logout"}
          </button>
        </div>
      </aside>
    </>
  );
}
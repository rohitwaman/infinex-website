"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      email === "admin@infinexhub.com" &&
      password === "Infinex@2026"
    ) {
      localStorage.setItem("isAdminLoggedIn", "true");
      router.push("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">

        <Link
          href="/"
          className="text-sm text-blue-400 hover:text-blue-300"
        >
          ← Back to Home
        </Link>

        <h1 className="mt-8 text-4xl font-bold">
          Admin Login
        </h1>

        <p className="mt-3 text-slate-400">
          Login to manage website content.
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-blue-500"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-4 font-bold transition hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div className="mt-8 rounded-xl bg-slate-800 p-4 text-sm text-slate-300">
          <p className="font-semibold">Demo Credentials</p>
          <p>Email: admin@infinexhub.com</p>
          <p>Password: Infinex@2026</p>
        </div>

      </div>
    </main>
  );
}
"use client";

import { useState } from "react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (
      email === "admin@infinextech.in" &&
      password === "Admin@123"
    ) {
      alert("Login Successful ✅");
      window.location.href = "/admin";
    } else {
      alert("Invalid Email or Password ❌");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-700 p-8">
        <h1 className="text-3xl font-bold text-center text-white">
          Admin Login
        </h1>

        <p className="text-slate-400 text-center mt-2">
          The Infinex Technologies
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 text-white outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 text-white outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
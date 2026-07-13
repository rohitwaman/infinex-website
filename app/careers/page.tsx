import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function CareersPage() {
  const jobs = await prisma.job.findMany({
    where: {
      active: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Join Our Team
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Build the Future with Infinex
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Explore open opportunities at The Infinex Technologies and work on
            software, AI, web and mobile products.
          </p>
        </div>

        {jobs.length === 0 ? (
          <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center text-slate-400">
            No open positions are available right now.
          </div>
        ) : (
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {jobs.map((job) => (
              <article
                key={job.id}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-blue-500"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-blue-500/15 px-3 py-1 text-sm font-semibold text-blue-400">
                    {job.type}
                  </span>

                  <span className="text-sm text-slate-500">
                    {job.location}
                  </span>
                </div>

                <h2 className="mt-6 text-3xl font-bold">
                  {job.title}
                </h2>

                <p className="mt-4 line-clamp-4 leading-7 text-slate-400">
                  {job.description}
                </p>

                <Link
                  href={`/careers/${job.slug}`}
                  className="mt-7 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
                >
                  View Job
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
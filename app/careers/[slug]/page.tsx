import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ApplyForm from "./ApplyForm";

type JobPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const { slug } = await params;

  const job = await prisma.job.findUnique({
    where: {
      slug,
    },
  });

  if (!job) {
    return {
      title: "Job Not Found",
    };
  }

  return {
    title: `${job.title} Career Opportunity`,
    description: job.description.slice(0, 160),
    alternates: {
      canonical: `/careers/${job.slug}`,
    },
  };
}

export default async function JobDetailsPage({
  params,
}: JobPageProps) {
  const { slug } = await params;

  const job = await prisma.job.findUnique({
    where: {
      slug,
    },
  });

  if (!job || !job.active) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/careers"
          className="text-sm font-semibold text-blue-400 hover:text-blue-300"
        >
          ← Back to Careers
        </Link>

        <header className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-12">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-blue-500/15 px-4 py-2 text-sm font-semibold text-blue-400">
              {job.type}
            </span>

            <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
              {job.location}
            </span>
          </div>

          <h1 className="mt-7 text-4xl font-bold md:text-6xl">
            {job.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Join The Infinex Technologies and work on modern software, AI, web
            and mobile products.
          </p>
        </header>

        <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-3xl font-bold">
            Job Description
          </h2>

          <div className="mt-5 whitespace-pre-wrap leading-8 text-slate-300">
            {job.description}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-3xl font-bold">
            Requirements
          </h2>

          <div className="mt-5 whitespace-pre-wrap leading-8 text-slate-300">
            {job.requirements}
          </div>
        </section>

        <ApplyForm
          jobId={job.id}
          jobTitle={job.title}
        />
      </div>
    </main>
  );
}
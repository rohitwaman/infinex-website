"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Contact = {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  message: string;
  status: string;
  createdAt: string;
};

type Portfolio = {
  id: string;
  title: string;
  description: string;
  tech: string;
  imageUrl?: string | null;
  liveUrl?: string | null;
  createdAt: string;
};

type Blog = {
  id: string;
  title: string;
  published: boolean;
};

type Job = {
  id: string;
  title: string;
  active: boolean;
};

type Application = {
  id: string;
  status: string;
};

export default function DashboardPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [projects, setProjects] = useState<Portfolio[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    void loadDashboardData();
  }, []);

  async function loadDashboardData(isRefresh = false) {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const [
        contactsResponse,
        portfolioResponse,
        blogsResponse,
        jobsResponse,
        applicationsResponse,
      ] = await Promise.all([
        fetch("/api/contact", {
          cache: "no-store",
        }),
        fetch("/api/portfolio", {
          cache: "no-store",
        }),
        fetch("/api/blog", {
          cache: "no-store",
        }),
        fetch("/api/jobs", {
          cache: "no-store",
        }),
        fetch("/api/apply", {
          cache: "no-store",
        }),
      ]);

      const contactsData = contactsResponse.ok
        ? await contactsResponse.json()
        : [];

      const portfolioData = portfolioResponse.ok
        ? await portfolioResponse.json()
        : [];

      const blogsData = blogsResponse.ok
        ? await blogsResponse.json()
        : [];

      const jobsData = jobsResponse.ok
        ? await jobsResponse.json()
        : [];

      const applicationsData = applicationsResponse.ok
        ? await applicationsResponse.json()
        : [];

      setContacts(Array.isArray(contactsData) ? contactsData : []);
      setProjects(Array.isArray(portfolioData) ? portfolioData : []);
      setBlogs(Array.isArray(blogsData) ? blogsData : []);
      setJobs(Array.isArray(jobsData) ? jobsData : []);

      setApplications(
        Array.isArray(applicationsData)
          ? applicationsData
          : []
      );
    } catch (error) {
      console.error("Dashboard data error:", error);

      setContacts([]);
      setProjects([]);
      setBlogs([]);
      setJobs([]);
      setApplications([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  const today = new Date().toDateString();

  const todaysEnquiries = contacts.filter((contact) => {
    return new Date(contact.createdAt).toDateString() === today;
  }).length;

  const newEnquiries = contacts.filter((contact) => {
    return contact.status?.toLowerCase() === "new";
  }).length;

  const publishedBlogs = blogs.filter((blog) => {
    return blog.published;
  }).length;

  const activeJobs = jobs.filter((job) => {
    return job.active;
  }).length;

  const newApplications = applications.filter((application) => {
    return application.status?.toLowerCase() === "new";
  }).length;

  const recentContacts = contacts.slice(0, 5);

  return (
    <main className="min-h-screen px-5 pb-12 pt-24 text-white sm:px-8 lg:px-10 lg:pt-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Overview
            </p>

            <h1 className="mt-3 text-4xl font-black sm:text-5xl">
              Admin Dashboard
            </h1>

            <p className="mt-3 max-w-2xl text-slate-400">
              Manage your website content, enquiries, portfolio,
              blogs, jobs and applications.
            </p>
          </div>

          <button
            type="button"
            onClick={() => void loadDashboardData(true)}
            disabled={refreshing}
            className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 font-bold shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {refreshing ? "Refreshing..." : "Refresh Dashboard"}
          </button>
        </header>

        {loading ? (
          <DashboardLoading />
        ) : (
          <>
            <section className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              <DashboardCard
                title="Total Enquiries"
                value={contacts.length}
                description="All client enquiries"
                href="/dashboard/leads"
                icon="✉"
              />

              <DashboardCard
                title="New Enquiries"
                value={newEnquiries}
                description="Need your attention"
                href="/dashboard/leads"
                icon="◎"
              />

              <DashboardCard
                title="Today's Enquiries"
                value={todaysEnquiries}
                description="Received today"
                href="/dashboard/leads"
                icon="◷"
              />

              <DashboardCard
                title="Portfolio Projects"
                value={projects.length}
                description="Published projects"
                href="/dashboard/portfolio"
                icon="◆"
              />

              <DashboardCard
                title="Published Blogs"
                value={publishedBlogs}
                description="Live company articles"
                href="/dashboard/blog"
                icon="▤"
              />

              <DashboardCard
                title="Active Jobs"
                value={activeJobs}
                description="Open career positions"
                href="/dashboard/jobs"
                icon="▣"
              />

              <DashboardCard
                title="Applications"
                value={applications.length}
                description="Total applications"
                href="/dashboard/applications"
                icon="◉"
              />

              <DashboardCard
                title="New Applications"
                value={newApplications}
                description="Candidates to review"
                href="/dashboard/applications"
                icon="★"
              />
            </section>

            <section className="mt-10 grid gap-8 xl:grid-cols-[1.7fr_0.8fr]">
              <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <div className="flex flex-col gap-4 border-b border-slate-800 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">
                      Recent Enquiries
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                      Latest messages received from clients
                    </p>
                  </div>

                  <Link
                    href="/dashboard/leads"
                    className="text-sm font-semibold text-blue-400 transition hover:text-cyan-300"
                  >
                    View All Leads →
                  </Link>
                </div>

                {recentContacts.length === 0 ? (
                  <div className="px-6 py-16 text-center">
                    <p className="text-lg font-semibold text-slate-300">
                      No enquiries received yet
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      New website enquiries will appear here.
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px]">
                      <thead className="bg-slate-950/60 text-left text-xs uppercase tracking-widest text-slate-500">
                        <tr>
                          <th className="px-6 py-4">Client</th>
                          <th className="px-6 py-4">Company</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4">Date</th>
                        </tr>
                      </thead>

                      <tbody>
                        {recentContacts.map((contact) => (
                          <tr
                            key={contact.id}
                            className="border-t border-slate-800/80 transition hover:bg-slate-800/40"
                          >
                            <td className="px-6 py-5">
                              <p className="font-semibold text-white">
                                {contact.name}
                              </p>

                              <p className="mt-1 text-sm text-slate-400">
                                {contact.email}
                              </p>
                            </td>

                            <td className="px-6 py-5 text-sm text-slate-300">
                              {contact.company || "Not provided"}
                            </td>

                            <td className="px-6 py-5">
                              <StatusBadge
                                status={contact.status || "New"}
                              />
                            </td>

                            <td className="px-6 py-5 text-sm text-slate-400">
                              {new Date(
                                contact.createdAt
                              ).toLocaleDateString("en-IN")}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <h2 className="text-2xl font-bold">
                  Quick Actions
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  Manage your website quickly
                </p>

                <div className="mt-6 space-y-3">
                  <QuickAction
                    title="View Leads"
                    description="Manage client enquiries"
                    href="/dashboard/leads"
                    icon="◎"
                  />

                  <QuickAction
                    title="Add Project"
                    description="Create a portfolio project"
                    href="/dashboard/portfolio/new"
                    icon="+"
                  />

                  <QuickAction
                    title="Add New Blog"
                    description="Publish a company article"
                    href="/dashboard/blog/new"
                    icon="▤"
                  />

                  <QuickAction
                    title="Add New Job"
                    description="Create a career opening"
                    href="/dashboard/jobs/new"
                    icon="▣"
                  />

                  <QuickAction
                    title="Applications"
                    description="Review candidates"
                    href="/dashboard/applications"
                    icon="◉"
                  />

                  <QuickAction
                    title="Visit Website"
                    description="Open public website"
                    href="/"
                    icon="↗"
                  />
                </div>
              </div>
            </section>

            <section className="mt-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
                  Management
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Manage Your Platform
                </h2>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                <ManagementLink
                  title="Leads"
                  description="Manage client enquiries and update their status."
                  href="/dashboard/leads"
                  icon="◎"
                />

                <ManagementLink
                  title="Portfolio"
                  description="Add, edit and manage company projects."
                  href="/dashboard/portfolio"
                  icon="◆"
                />

                <ManagementLink
                  title="Blogs"
                  description="Publish and manage company articles."
                  href="/dashboard/blog"
                  icon="▤"
                />

                <ManagementLink
                  title="Careers"
                  description="Manage jobs and candidate applications."
                  href="/dashboard/jobs"
                  icon="▣"
                />
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}

function DashboardCard({
  title,
  value,
  description,
  href,
  icon,
}: {
  title: string;
  value: number;
  description: string;
  href: string;
  icon: string;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-500/70"
    >
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-cyan-500/20" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-400">
            {title}
          </p>

          <p className="mt-4 text-4xl font-black text-white">
            {value}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {description}
          </p>
        </div>

        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-400">
          {icon}
        </span>
      </div>
    </Link>
  );
}

function QuickAction({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-blue-500/60 hover:bg-slate-900"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 font-bold text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </span>

      <div>
        <p className="font-bold text-white">
          {title}
        </p>

        <p className="mt-1 text-xs text-slate-400">
          {description}
        </p>
      </div>
    </Link>
  );
}

function ManagementLink({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-500/60"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-xl text-cyan-400 transition group-hover:bg-cyan-500 group-hover:text-slate-950">
        {icon}
      </span>

      <h3 className="mt-5 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        {description}
      </p>

      <p className="mt-5 text-sm font-semibold text-blue-400">
        Open Module →
      </p>
    </Link>
  );
}

function StatusBadge({
  status,
}: {
  status: string;
}) {
  const normalizedStatus = status.toLowerCase();

  let styles = "bg-slate-500/15 text-slate-400";

  if (normalizedStatus === "new") {
    styles = "bg-blue-500/15 text-blue-400";
  }

  if (normalizedStatus === "contacted") {
    styles = "bg-yellow-500/15 text-yellow-400";
  }

  if (normalizedStatus === "closed") {
    styles = "bg-green-500/15 text-green-400";
  }

  if (normalizedStatus === "shortlisted") {
    styles = "bg-purple-500/15 text-purple-400";
  }

  if (normalizedStatus === "rejected") {
    styles = "bg-red-500/15 text-red-400";
  }

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${styles}`}
    >
      {status}
    </span>
  );
}

function DashboardLoading() {
  return (
    <div className="mt-10">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="h-40 animate-pulse rounded-3xl border border-slate-800 bg-slate-900/70"
          />
        ))}
      </div>

      <div className="mt-10 grid gap-8 xl:grid-cols-[1.7fr_0.8fr]">
        <div className="h-[420px] animate-pulse rounded-3xl border border-slate-800 bg-slate-900/70" />

        <div className="h-[420px] animate-pulse rounded-3xl border border-slate-800 bg-slate-900/70" />
      </div>
    </div>
  );
}
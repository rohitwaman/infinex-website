"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [projects, setProjects] = useState<Portfolio[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn");

    if (isLoggedIn !== "true") {
      router.replace("/login");
      return;
    }

    loadDashboardData();
  }, [router]);

  async function loadDashboardData() {
    try {
      setLoading(true);

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

      setProjects(
        Array.isArray(portfolioData) ? portfolioData : []
      );

      setBlogs(Array.isArray(blogsData) ? blogsData : []);

      setJobs(Array.isArray(jobsData) ? jobsData : []);

      setApplications(
        Array.isArray(applicationsData)
          ? applicationsData
          : []
      );
    } catch (error) {
      console.error("Dashboard data error:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem("isAdminLoggedIn");
    router.replace("/login");
  }

  const today = new Date().toDateString();

  const todaysEnquiries = contacts.filter((contact) => {
    return new Date(contact.createdAt).toDateString() === today;
  }).length;

  const newEnquiries = contacts.filter(
    (contact) =>
      contact.status?.toLowerCase() === "new"
  ).length;

  const publishedBlogs = blogs.filter(
    (blog) => blog.published
  ).length;

  const activeJobs = jobs.filter((job) => job.active).length;

  const newApplications = applications.filter(
    (application) =>
      application.status?.toLowerCase() === "new"
  ).length;

  const recentContacts = contacts.slice(0, 5);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-900 px-6 py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-blue-400">
              THE INFINEX TECHNOLOGIES
            </p>

            <h1 className="mt-1 text-3xl font-bold">
              Admin Dashboard
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold transition hover:bg-slate-800"
            >
              Visit Website
            </Link>

            <button
              type="button"
              onClick={loadDashboardData}
              disabled={loading}
              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Refreshing..." : "Refresh"}
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-xl bg-red-600 px-5 py-3 font-semibold transition hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {loading ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <p className="text-lg text-slate-400">
              Loading dashboard...
            </p>
          </div>
        ) : (
          <>
            <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <DashboardCard
                title="Total Enquiries"
                value={contacts.length}
                description="All client enquiries"
                href="/dashboard/leads"
              />

              <DashboardCard
                title="New Enquiries"
                value={newEnquiries}
                description="Need your attention"
                href="/dashboard/leads"
              />

              <DashboardCard
                title="Today's Enquiries"
                value={todaysEnquiries}
                description="Received today"
                href="/dashboard/leads"
              />

              <DashboardCard
                title="Portfolio Projects"
                value={projects.length}
                description="Published projects"
                href="/dashboard/portfolio"
              />

              <DashboardCard
                title="Published Blogs"
                value={publishedBlogs}
                description="Live company articles"
                href="/dashboard/blog"
              />

              <DashboardCard
                title="Active Jobs"
                value={activeJobs}
                description="Open career positions"
                href="/dashboard/jobs"
              />

              <DashboardCard
                title="Applications"
                value={applications.length}
                description="Total candidate applications"
                href="/dashboard/applications"
              />

              <DashboardCard
                title="New Applications"
                value={newApplications}
                description="Candidates to review"
                href="/dashboard/applications"
              />
            </section>

            <section className="mt-10 grid gap-8 lg:grid-cols-3">
              <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 lg:col-span-2">
                <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
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
                    className="text-sm font-semibold text-blue-400 hover:text-blue-300"
                  >
                    View All
                  </Link>
                </div>

                {recentContacts.length === 0 ? (
                  <div className="px-6 py-14 text-center text-slate-400">
                    No enquiries received yet.
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px]">
                      <thead className="bg-slate-950/60 text-left text-sm text-slate-400">
                        <tr>
                          <th className="px-6 py-4">
                            Client
                          </th>

                          <th className="px-6 py-4">
                            Company
                          </th>

                          <th className="px-6 py-4">
                            Status
                          </th>

                          <th className="px-6 py-4">
                            Date
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {recentContacts.map((contact) => (
                          <tr
                            key={contact.id}
                            className="border-t border-slate-800"
                          >
                            <td className="px-6 py-5">
                              <p className="font-semibold">
                                {contact.name}
                              </p>

                              <p className="mt-1 text-sm text-slate-400">
                                {contact.email}
                              </p>
                            </td>

                            <td className="px-6 py-5 text-slate-300">
                              {contact.company ||
                                "Not provided"}
                            </td>

                            <td className="px-6 py-5">
                              <StatusBadge
                                status={
                                  contact.status || "New"
                                }
                              />
                            </td>

                            <td className="px-6 py-5 text-sm text-slate-400">
                              {new Date(
                                contact.createdAt
                              ).toLocaleDateString(
                                "en-IN"
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <h2 className="text-2xl font-bold">
                  Quick Actions
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  Manage your website and company content
                </p>

                <div className="mt-6 space-y-4">
                  <QuickAction
                    title="View Leads"
                    description="Manage client enquiries"
                    href="/dashboard/leads"
                  />

                  <QuickAction
                    title="Add Project"
                    description="Create a portfolio project"
                    href="/dashboard/portfolio/new"
                  />

                  <QuickAction
                    title="Manage Portfolio"
                    description="View all published projects"
                    href="/dashboard/portfolio"
                  />

                  <QuickAction
                    title="Add New Blog"
                    description="Publish a company article"
                    href="/dashboard/blog/new"
                  />

                  <QuickAction
                    title="Manage Blogs"
                    description="Edit and delete articles"
                    href="/dashboard/blog"
                  />

                  <QuickAction
                    title="Add New Job"
                    description="Create a career opening"
                    href="/dashboard/jobs/new"
                  />

                  <QuickAction
                    title="Manage Jobs"
                    description="View and manage openings"
                    href="/dashboard/jobs"
                  />

                  <QuickAction
                    title="Job Applications"
                    description="Review candidate applications"
                    href="/dashboard/applications"
                  />

                  <QuickAction
                    title="Public Careers Page"
                    description="View open jobs on website"
                    href="/careers"
                  />

                  <QuickAction
                    title="Visit Website"
                    description="Open the public website"
                    href="/"
                  />
                </div>
              </div>
            </section>

            <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <ManagementLink
                title="Leads"
                description="Manage client enquiries and statuses."
                href="/dashboard/leads"
              />

              <ManagementLink
                title="Portfolio"
                description="Add and manage company projects."
                href="/dashboard/portfolio"
              />

              <ManagementLink
                title="Blogs"
                description="Publish and manage SEO articles."
                href="/dashboard/blog"
              />

              <ManagementLink
                title="Careers"
                description="Manage jobs and applications."
                href="/dashboard/jobs"
              />
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
}: {
  title: string;
  value: number;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500"
    >
      <p className="text-sm font-semibold text-slate-400">
        {title}
      </p>

      <p className="mt-4 text-4xl font-bold">
        {value}
      </p>

      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>
    </Link>
  );
}

function QuickAction({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-2xl border border-slate-800 bg-slate-950 p-5 transition hover:border-blue-500"
    >
      <p className="font-bold">
        {title}
      </p>

      <p className="mt-1 text-sm text-slate-400">
        {description}
      </p>
    </Link>
  );
}

function ManagementLink({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
    >
      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        {description}
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

  let styles =
    "bg-slate-500/15 text-slate-400";

  if (normalizedStatus === "new") {
    styles = "bg-blue-500/15 text-blue-400";
  }

  if (normalizedStatus === "contacted") {
    styles =
      "bg-yellow-500/15 text-yellow-400";
  }

  if (normalizedStatus === "closed") {
    styles =
      "bg-green-500/15 text-green-400";
  }

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${styles}`}
    >
      {status}
    </span>
  );
}
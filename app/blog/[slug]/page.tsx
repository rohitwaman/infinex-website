import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;

  const blog = await prisma.blog.findUnique({
    where: { slug },
  });

  if (!blog || !blog.published) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,

    alternates: {
      canonical: `/blog/${blog.slug}`,
    },

    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      url: `/blog/${blog.slug}`,
      publishedTime: blog.createdAt.toISOString(),
      modifiedTime: blog.updatedAt.toISOString(),
      authors: [blog.author],
      images: blog.coverImage
        ? [
            {
              url: blog.coverImage,
              alt: blog.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: blog.coverImage ? [blog.coverImage] : [],
    },
  };
}

export default async function SingleBlogPage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const blog = await prisma.blog.findUnique({
    where: { slug },
  });

  if (!blog || !blog.published) {
    notFound();
  }

  const readingTime = Math.max(
    1,
    Math.ceil(blog.content.trim().split(/\s+/).length / 200)
  );

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.coverImage ? [blog.coverImage] : undefined,
    datePublished: blog.createdAt.toISOString(),
    dateModified: blog.updatedAt.toISOString(),
    author: {
      "@type": "Organization",
      name: blog.author,
    },
    publisher: {
      "@type": "Organization",
      name: "The Infinex Technologies Pvt. Ltd.",
      url: "https://infinexhub.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://infinexhub.com/blog/${blog.slug}`,
    },
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <article className="mx-auto max-w-4xl">
        <Link
          href="/blog"
          className="text-sm font-semibold text-blue-400 hover:text-blue-300"
        >
          ← Back to Blogs
        </Link>

        <header className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Infinex Insights
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            {blog.title}
          </h1>

          <p className="mt-6 text-xl leading-8 text-slate-400">
            {blog.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
            <span>{blog.author}</span>
            <span>•</span>
            <span>
              {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>•</span>
            <span>{readingTime} min read</span>
          </div>
        </header>

        {blog.coverImage ? (
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="mt-10 h-auto w-full rounded-3xl border border-slate-800 object-cover"
          />
        ) : (
          <div className="mt-10 h-72 rounded-3xl bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 md:h-96" />
        )}

        <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-7 md:p-10">
          <div className="whitespace-pre-wrap text-lg leading-9 text-slate-300">
            {blog.content}
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-blue-500/30 bg-blue-500/10 p-8 text-center">
          <h2 className="text-2xl font-bold">
            Need a similar technology solution?
          </h2>

          <p className="mt-3 text-slate-400">
            Talk to The Infinex Technologies about your software, website,
            mobile app or AI project.
          </p>

          <Link
            href="/#contact"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-7 py-4 font-bold hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </div>
      </article>
    </main>
  );
}
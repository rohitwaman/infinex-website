import Link from "next/link";

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-blue-400 uppercase tracking-widest">
            Our Service
          </p>

          <h1 className="mt-4 text-6xl font-bold">
            Website Development
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-slate-400">
            We build premium business websites, company websites,
            landing pages, ecommerce platforms and custom web applications.
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Responsive Design",
            "SEO Optimized",
            "Fast Loading",
            "Modern UI/UX",
            "Secure Website",
            "CMS Integration",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
            >
              <h3 className="text-2xl font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
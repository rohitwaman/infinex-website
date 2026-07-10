export default function TechStack() {
  const tech = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "AI Tools",
    "Cloud",
    "Docker",
    "GitHub",
    "Vercel",
  ];

  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-4 text-5xl font-bold">Technologies We Use</h2>
        <p className="mb-14 text-slate-400">
          Modern tools and technologies to build scalable digital products.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {tech.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-700 bg-slate-900 px-6 py-5 font-semibold text-slate-300 hover:border-blue-500 hover:text-white"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function TrustedBy() {
  const logos = [
    "Startups",
    "Local Businesses",
    "IT Services",
    "E-Commerce",
    "Agencies",
  ];

  return (
    <section className="bg-slate-900 px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-8 text-sm font-semibold uppercase tracking-widest text-slate-400">
          Trusted technology partner for
        </p>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-700 bg-slate-800 px-6 py-5 text-slate-300"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
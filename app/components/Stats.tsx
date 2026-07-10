export default function Stats() {
  const stats = [
    { number: "10+", label: "Digital Services" },
    { number: "24/7", label: "Support" },
    { number: "100%", label: "Custom Solutions" },
    { number: "Fast", label: "Project Delivery" },
  ];

  return (
    <section className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center"
          >
            <h3 className="text-4xl font-bold text-blue-400">{stat.number}</h3>
            <p className="mt-3 text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
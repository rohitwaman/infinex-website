export default function Process() {
  const steps = [
    {
      no: "01",
      title: "Requirement Analysis",
      desc: "We understand your business goals and project requirements.",
    },
    {
      no: "02",
      title: "UI/UX Design",
      desc: "We design modern, responsive and user-friendly interfaces.",
    },
    {
      no: "03",
      title: "Development",
      desc: "Our team develops secure and scalable software solutions.",
    },
    {
      no: "04",
      title: "Testing",
      desc: "Every project goes through quality assurance and testing.",
    },
    {
      no: "05",
      title: "Deployment",
      desc: "We deploy your project securely to production servers.",
    },
    {
      no: "06",
      title: "Support",
      desc: "Continuous maintenance, updates and technical support.",
    },
  ];

  return (
    <section className="bg-slate-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-5xl font-bold">
          Our Development Process
        </h2>

        <p className="mb-16 text-center text-slate-400">
          A transparent workflow from idea to successful launch.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.no}
              className="rounded-3xl border border-slate-700 bg-slate-800 p-8"
            >
              <div className="mb-6 text-5xl font-bold text-blue-500">
                {step.no}
              </div>

              <h3 className="text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 text-slate-400">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
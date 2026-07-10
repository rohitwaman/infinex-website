export default function AISolutionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold">AI Solutions</h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          We build AI-powered tools, chatbots, automation systems and smart
          business solutions to improve productivity and customer experience.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            "AI Chatbots",
            "Business Automation",
            "Customer Support Bots",
            "AI Data Analysis",
            "Workflow Automation",
            "Smart Recommendation Systems",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
export default function MobileAppDevelopmentPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold">
          Mobile App Development
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          We develop high-performance Android and iOS applications with
          beautiful UI, secure backend, and scalable architecture.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            "Android Apps",
            "iOS Apps",
            "Flutter Development",
            "React Native",
            "App Maintenance",
            "Play Store Deployment",
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
import Button from "./ui/Button";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  return (
    <AnimatedSection>
      <section
        id="home"
        className="min-h-screen flex items-center bg-slate-950 text-white px-6 pt-28"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full">
              Software • AI • Web • Mobile Apps
            </span>

            <h1 className="text-6xl font-bold mt-6 leading-tight">
              Building Future-Ready
              <span className="text-blue-500 block">Digital Solutions</span>
            </h1>

            <p className="text-gray-300 mt-6 text-lg">
              We help startups and enterprises build modern software, AI
              products, websites and mobile applications.
            </p>

            <div className="flex gap-5 mt-10">
              <Button>Get Started</Button>

              <Button primary={false}>Our Services</Button>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-700 shadow-2xl">
            <pre className="text-green-400 text-sm overflow-auto">
{`const company = {
  name: "The Infinex Technologies",
  services: [
    "AI Solutions",
    "Web Development",
    "Mobile Apps",
    "Cloud Services"
  ]
}`}
            </pre>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
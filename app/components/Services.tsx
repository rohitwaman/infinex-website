import Link from "next/link";
import Card from "./ui/Card";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./ui/SectionTitle";
import { Code2, Brain, Globe, Smartphone } from "lucide-react";

const services = [
  {
    icon: <Code2 size={40} className="text-blue-400" />,
    title: "Custom Software",
    desc: "Enterprise software tailored for your business.",
    link: "/services/custom-software",
  },
  {
    icon: <Brain size={40} className="text-blue-400" />,
    title: "AI Solutions",
    desc: "Automation, AI Chatbots and Machine Learning.",
    link: "/services/ai-solutions",
  },
  {
    icon: <Globe size={40} className="text-blue-400" />,
    title: "Web Development",
    desc: "Fast, responsive and SEO friendly websites.",
    link: "/services/web-development",
  },
  {
    icon: <Smartphone size={40} className="text-blue-400" />,
    title: "Mobile App Development",
    desc: "Android & iOS applications with modern UI.",
    link: "/services/mobile-app-development",
  },
];

export default function Services() {
  return (
    <AnimatedSection>
      <section
        id="services"
        className="bg-slate-900 text-white py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="OUR SERVICES"
            title="Premium Technology Services"
            description="We build enterprise software, AI products, modern websites and scalable mobile applications for businesses worldwide."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="block"
              >
                <Card>
                  <div className="mb-6">
                    {service.icon}
                  </div>

                  <h3 className="mb-4 text-2xl font-bold">
                    {service.title}
                  </h3>

                  <p className="text-slate-400">
                    {service.desc}
                  </p>

                  <div className="mt-6 text-blue-400 font-semibold">
                    Learn More →
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
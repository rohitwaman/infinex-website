import Card from "./ui/Card";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./ui/SectionTitle";
import { Code2, Brain, Globe, Smartphone } from "lucide-react";

const services = [
  {
    icon: <Code2 size={40} className="text-blue-400" />,
    title: "Custom Software",
    desc: "Enterprise software tailored for your business.",
  },
  {
    icon: <Brain size={40} className="text-blue-400" />,
    title: "AI Solutions",
    desc: "Automation, AI Chatbots and Machine Learning.",
  },
  {
    icon: <Globe size={40} className="text-blue-400" />,
    title: "Web Development",
    desc: "Fast, responsive and SEO friendly websites.",
  },
  {
    icon: <Smartphone size={40} className="text-blue-400" />,
    title: "Mobile Apps",
    desc: "Android & iOS applications with modern UI.",
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <div className="mb-6">{service.icon}</div>

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-400">
                  {service.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
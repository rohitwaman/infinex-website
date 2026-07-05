import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./ui/SectionTitle";

const projects = [
  {
    title: "Business Website",
    category: "Web Development",
  },
  {
    title: "AI Chatbot",
    category: "Artificial Intelligence",
  },
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile App",
  },
];

export default function Portfolio() {
  return (
    <AnimatedSection>
      <section
        id="portfolio"
        className="bg-slate-950 text-white py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <SectionTitle
            label="PORTFOLIO"
            title="Our Latest Projects"
            description="A selection of modern software, AI and web solutions built for businesses."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-3xl overflow-hidden border border-slate-700 bg-slate-900 hover:border-blue-500 transition-all duration-300"
              >
                <div className="h-52 bg-gradient-to-br from-blue-600 to-cyan-500"></div>

                <div className="p-6">
                  <p className="text-blue-400 text-sm">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}
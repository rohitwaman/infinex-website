import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <AnimatedSection>
      <section id="about" className="bg-slate-950 px-6 py-28 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-widest text-blue-400">
              ABOUT US
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              We build technology that helps businesses grow faster.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-300">
              The Infinex Technologies Private Limited delivers custom software,
              AI solutions, websites, mobile applications, and digital
              transformation services for modern businesses.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-blue-400">
                  Our Mission
                </h3>
                <p className="mt-3 text-slate-300">
                  To create secure, scalable and future-ready digital solutions.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-blue-400">
                  Our Vision
                </h3>
                <p className="mt-3 text-slate-300">
                  To become a trusted global technology partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
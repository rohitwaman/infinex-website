import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import TrustedBy from "./components/TrustedBy";
import Process from "./components/Process";
import TechStack from "./components/TechStack";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Infinex Technologies Private Limited",
  alternateName: "The Infinex Technologies",
  url: "https://infinexhub.com",
  logo: "https://infinexhub.com/logo.png",
  description:
    "The Infinex Technologies Private Limited provides software development, AI solutions, website development, mobile app development, ERP, CRM and digital transformation services.",
  email: "info@infinexhub.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "India",
    },
    {
      "@type": "Place",
      name: "Worldwide",
    },
  ],
  knowsAbout: [
    "Software Development",
    "Artificial Intelligence",
    "Website Development",
    "Mobile App Development",
    "ERP Software",
    "CRM Software",
    "Cloud Solutions",
    "Digital Transformation",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Stats />
        <Services />
        <Portfolio />
        <Process />
        <TechStack />
        <Contact />
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
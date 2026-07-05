export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            The Infinex Technologies
          </h2>
          <p className="mt-4 text-slate-400">
            Building future-ready software, AI, web and mobile solutions for modern businesses.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-slate-400">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Services</h3>
          <ul className="mt-4 space-y-2 text-slate-400">
            <li>Software Development</li>
            <li>AI Solutions</li>
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>Cloud Services</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Contact</h3>
          <ul className="mt-4 space-y-2 text-slate-400">
            <li>info@infinexhub.com</li>
            <li>Maharashtra, India</li>
            <li>www.infinexhub.com</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 pt-6 text-center text-slate-500">
        © 2026 The Infinex Technologies Private Limited. All Rights Reserved.
      </div>
    </footer>
  );
}
export default function FAQ() {
  const faqs = [
    {
      q: "What services do you provide?",
      a: "We provide Software Development, AI Solutions, Web Development, Mobile Apps and Cloud Services.",
    },
    {
      q: "How can I contact your team?",
      a: "You can contact us using our Contact Form, WhatsApp or Email.",
    },
    {
      q: "Do you build custom software?",
      a: "Yes, we build custom software according to your business requirements.",
    },
    {
      q: "Where is your company located?",
      a: "Our company serves clients across India from Maharashtra.",
    },
  ];

  return (
    <section id="faq" className="bg-slate-950 py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-700 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold">{faq.q}</h3>
              <p className="mt-3 text-slate-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
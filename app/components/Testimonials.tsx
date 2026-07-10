export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Patil",
      company: "Startup Founder",
      review:
        "The Infinex Technologies built our website professionally. Great communication and excellent support.",
    },
    {
      name: "Amit Sharma",
      company: "Business Owner",
      review:
        "Their AI and software solutions helped us automate our daily work. Highly recommended.",
    },
    {
      name: "Sneha Joshi",
      company: "Marketing Agency",
      review:
        "Fast delivery, clean design and very professional team. We loved working with Infinex.",
    },
  ];

  return (
    <section className="bg-slate-900 py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-700 bg-slate-800 p-8"
            >
              <p className="text-slate-300 italic">
                "{review.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold">{review.name}</h3>
                <p className="text-sm text-blue-400">
                  {review.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
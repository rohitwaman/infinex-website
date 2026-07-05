export default function SectionTitle({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
        {label}
      </p>
      <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-400">
        {description}
      </p>
    </div>
  );
}
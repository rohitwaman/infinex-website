interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
}

export default function Button({
  children,
  primary = true,
}: ButtonProps) {
  return (
    <button
      className={`px-8 py-4 rounded-xl font-semibold transition duration-300 ${
        primary
          ? "bg-blue-600 hover:bg-blue-700 text-white"
          : "border border-white text-white hover:bg-white hover:text-black"
      }`}
    >
      {children}
    </button>
  );
}
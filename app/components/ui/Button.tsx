import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
};

export default function Button({
  href,
  children,
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
    >
      {children}
    </button>
  );
}
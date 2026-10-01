import Link from "next/link";

const links = [
  { href: "/", label: "خانه" },
  { href: "/products", label: "محصولات" },
  { href: "/provinces", label: "استان‌ها" },
  { href: "/contact", label: "تماس با ما" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-stone-200 bg-[#faf7f2]/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-4 py-3">
        <Link href="/" className="text-lg font-bold">
          ویدئو چک <span className="text-teal-700">ایران</span>
        </Link>
        <nav className="flex flex-wrap gap-1 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-stone-600 hover:bg-teal-700 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
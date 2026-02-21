import Link from "next/link";

const links = [
  { href: "/articles", label: "記事一覧" },
  { href: "/about", label: "運営方針" },
  { href: "/disclosure", label: "広告開示" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/90 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-slate-900">
          教育アフィリエイト実践ラボ
        </Link>
        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-700">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 font-medium hover:bg-slate-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

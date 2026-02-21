import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-neutral-900">
          教育アフィリエイト実践ラボ
        </Link>
        <nav className="flex items-center gap-5 text-sm text-neutral-700">
          <Link href="/articles">記事一覧</Link>
          <Link href="/about">運営方針</Link>
          <Link href="/disclosure">広告開示</Link>
        </nav>
      </div>
    </header>
  );
}

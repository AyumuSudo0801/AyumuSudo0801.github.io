import Link from "next/link";
import { articles } from "@/data/articles";

const categories = ["すべて", ...Array.from(new Set(articles.map((a) => a.category)))];

export default function ArticlesPage() {
  return (
    <div className="space-y-6">
      <header className="card rounded-2xl p-6 md:p-8">
        <p className="badge">記事一覧</p>
        <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
          教育アフィリエイトの比較・運用ノート
        </h1>
        <p className="mt-3 text-sm text-slate-700 md:text-base">
          比較、選び方、注意点を中心に、実務でそのまま使える形でまとめています。
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span key={category} className="badge">
              {category}
            </span>
          ))}
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {articles.map((article) => (
          <article key={article.slug} className="card p-5 md:p-6">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="badge">{article.category}</span>
              <span>{article.publishedAt}</span>
              <span>{article.readingMinutes}分</span>
            </div>
            <h2 className="mt-3 text-lg font-bold leading-7 text-slate-900">{article.title}</h2>
            <p className="mt-2 text-sm text-slate-700">{article.description}</p>
            <Link
              href={`/articles/${article.slug}`}
              className="mt-4 inline-flex items-center rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-700"
            >
              記事を読む
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import { articles } from "@/data/articles";

export default function ArticlesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">記事一覧</h1>
      <p className="mt-2 text-sm text-neutral-700">
        教育アフィリエイトに関する比較、選び方、運用注意点をまとめています。
      </p>

      <div className="mt-6 grid gap-4">
        {articles.map((article) => (
          <article key={article.slug} className="rounded-xl border border-neutral-200 bg-white p-5">
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
              <span>{article.category}</span>
              <span>・</span>
              <span>{article.publishedAt}</span>
              <span>・</span>
              <span>{article.readingMinutes}分</span>
            </div>
            <h2 className="mt-2 text-lg font-semibold">{article.title}</h2>
            <p className="mt-2 text-sm text-neutral-700">{article.description}</p>
            <Link href={`/articles/${article.slug}`} className="mt-3 inline-block text-sm underline">
              記事を読む
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

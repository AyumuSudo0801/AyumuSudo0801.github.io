import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";
import { OfferTable } from "@/components/OfferTable";
import { CtaBox } from "@/components/CtaBox";

const featured = articles.slice(0, 3);

export default function Home() {
  return (
    <div className="space-y-10 md:space-y-12">
      <section className="card overflow-hidden rounded-2xl">
        <div className="grid gap-6 p-6 md:grid-cols-2 md:items-center md:p-8">
          <div>
            <p className="badge mb-3">教育ジャンル特化アフィリエイト</p>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              教育サービスを比較して、迷わず選べる情報設計へ
            </h1>
            <p className="mt-4 max-w-xl text-sm text-slate-700 md:text-base">
              英語学習・リスキリング・受験領域を中心に、比較軸とPR開示を明確化。
              読者が納得して選べる導線をつくるための実践メディアです。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/articles" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
                記事一覧を見る
              </Link>
              <Link href="/about" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100">
                編集方針
              </Link>
            </div>
          </div>
          <Image
            src="/checklist-flow.svg"
            alt="教育サービス比較の流れ"
            width={1200}
            height={630}
            className="rounded-xl border border-slate-200"
            priority
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold md:text-xl">このサイトで重視すること</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            ["比較軸", "料金・対象者・サポート体制・無料相談の質を統一比較"],
            ["透明性", "PR表記と評価基準を明示し、判断根拠を可視化"],
            ["導線", "比較→詳細→申込まで迷わない情報設計"],
          ].map(([title, desc]) => (
            <div key={title} className="card p-5">
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-lg font-bold md:text-xl">主要カテゴリ比較（試作）</h2>
          <span className="text-xs text-slate-500">※広告開示あり / 誇大表現なし</span>
        </div>
        <OfferTable />
        <CtaBox />
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-lg font-bold md:text-xl">注目記事</h2>
          <Link href="/articles" className="text-sm font-medium text-slate-700 underline hover:text-slate-900">
            すべて見る
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((article) => (
            <article key={article.slug} className="card p-5">
              <p className="text-xs text-slate-500">{article.category}</p>
              <h3 className="mt-2 text-base font-bold leading-6 text-slate-900">{article.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-slate-700">{article.description}</p>
              <Link
                href={`/articles/${article.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-slate-900 underline"
              >
                続きを読む
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

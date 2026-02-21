import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";
import { OfferTable } from "@/components/OfferTable";
import { CtaBox } from "@/components/CtaBox";

const featured = articles.slice(0, 3);

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
        <div className="grid gap-6 p-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700">
              教育ジャンル特化アフィリエイト
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
              教育サービスを比較して、迷わず選べる情報設計へ
            </h1>
            <p className="mt-4 max-w-xl text-neutral-700">
              英語学習・リスキリング・受験領域を中心に、比較軸とPR開示を明確化。
              読者が納得して選べる導線をつくるための実践メディアです。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/articles" className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white">
                記事一覧を見る
              </Link>
              <Link href="/about" className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800">
                編集方針
              </Link>
            </div>
          </div>
          <Image src="/checklist-flow.svg" alt="教育サービス比較の流れ" width={1200} height={630} className="rounded-xl border border-neutral-200" />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["比較軸", "料金・対象者・サポート体制・無料相談の質を統一比較"],
          ["透明性", "PR表記と評価基準を明示し、判断根拠を可視化"],
          ["導線", "比較→詳細→申込まで迷わない情報設計"],
        ].map(([title, desc]) => (
          <div key={title} className="rounded-xl border border-neutral-200 bg-white p-5">
            <h2 className="font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-neutral-700">{desc}</p>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">主要カテゴリ比較（試作）</h2>
        <OfferTable />
        <CtaBox />
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-xl font-bold">注目記事</h2>
          <Link href="/articles" className="text-sm text-neutral-700 underline">
            すべて見る
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((article) => (
            <article key={article.slug} className="rounded-xl border border-neutral-200 bg-white p-5">
              <p className="text-xs text-neutral-500">{article.category}</p>
              <h3 className="mt-2 text-base font-semibold leading-6">{article.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{article.description}</p>
              <Link href={`/articles/${article.slug}`} className="mt-4 inline-block text-sm font-medium text-neutral-900 underline">
                続きを読む
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

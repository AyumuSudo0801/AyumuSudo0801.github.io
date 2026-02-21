import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/data/articles";
import { CtaBox } from "@/components/CtaBox";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default function ArticleDetailPage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) return notFound();

  return (
    <article className="space-y-6">
      <header className="card rounded-2xl p-6 md:p-8">
        <div className="flex flex-wrap gap-2 text-xs text-slate-600">
          <span className="badge">{article.category}</span>
          <span>{article.publishedAt}</span>
          <span>{article.readingMinutes}分</span>
        </div>
        <h1 className="mt-3 text-2xl font-extrabold leading-9 text-slate-900 md:text-3xl">
          {article.title}
        </h1>
        <p className="mt-3 text-sm text-slate-700 md:text-base">{article.description}</p>

        <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm">
          <p className="font-semibold text-slate-900">この記事の要点</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
            <li>比較軸を先に固定してからサービスを選ぶ</li>
            <li>PR表記・評価基準・更新日を明示して信頼を担保する</li>
            <li>比較記事→詳細記事→CTAの導線を統一する</li>
          </ul>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_260px]">
        <div className="card rounded-2xl p-6 md:p-8">
          <Image
            src="/checklist-flow.svg"
            alt="比較から申込までの流れ"
            width={1200}
            height={420}
            className="rounded-lg border border-slate-200"
          />

          <div className="prose-readability mt-8 space-y-8 text-sm leading-7 text-slate-800 md:text-[15px]">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">{section.heading}</h2>
                <div className="mt-3">
                  {section.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10">
            <CtaBox title="この条件ならどこが合うかを先に比較" />
          </div>

          <aside className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            ※ 本記事には広告が含まれる場合があります。最終的な条件は各公式サイトで必ずご確認ください。
          </aside>
        </div>

        <aside className="space-y-3 lg:sticky lg:top-24 lg:h-fit">
          <div className="card rounded-xl p-4">
            <p className="text-sm font-bold text-slate-900">目次</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              {article.sections.map((section) => (
                <li key={section.heading}>・{section.heading}</li>
              ))}
            </ul>
          </div>
          <div className="card rounded-xl p-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">広告開示</p>
            <p className="mt-1">PR/アフィリエイトリンクを含む場合があります。</p>
            <Link href="/disclosure" className="mt-2 inline-block font-semibold underline">
              開示方針を見る
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
}

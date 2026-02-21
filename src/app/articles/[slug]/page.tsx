import Image from "next/image";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/data/articles";
import { CtaBox } from "@/components/CtaBox";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return notFound();

  return (
    <article className="rounded-2xl border border-neutral-200 bg-white p-8">
      <div className="mb-4 text-xs text-neutral-500">
        {article.category} ・ {article.publishedAt} ・ {article.readingMinutes}分
      </div>
      <h1 className="text-2xl font-bold leading-9">{article.title}</h1>
      <p className="mt-4 text-neutral-700">{article.description}</p>

      <div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm">
        <p className="font-semibold text-neutral-900">この記事の要点</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-neutral-700">
          <li>比較軸を先に固定してからサービスを選ぶ</li>
          <li>PR表記・評価基準・更新日を明示して信頼を担保する</li>
          <li>比較記事→詳細記事→CTAの導線を統一する</li>
        </ul>
      </div>

      <div className="mt-6">
        <Image src="/checklist-flow.svg" alt="比較から申込までの流れ" width={1200} height={420} className="rounded-lg border border-neutral-200" />
      </div>

      <div className="mt-8 space-y-8">
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold">{section.heading}</h2>
            <div className="mt-3 space-y-4 text-sm leading-7 text-neutral-800">
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
    </article>
  );
}

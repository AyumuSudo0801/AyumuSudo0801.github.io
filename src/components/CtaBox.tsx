import Link from "next/link";

type Props = {
  title?: string;
  description?: string;
};

export function CtaBox({
  title = "無料相談の条件を比較してから申込",
  description = "料金・対象者・サポート体制・PR表記を確認してから申し込むと、ミスマッチを減らせます。",
}: Props) {
  return (
    <div className="card rounded-2xl border-emerald-200 bg-emerald-50 p-5 md:p-6">
      <h3 className="text-base font-bold text-emerald-950 md:text-lg">{title}</h3>
      <p className="mt-2 text-sm text-emerald-900/90 md:text-[15px]">{description}</p>
      <Link
        href="/articles"
        className="mt-4 inline-flex items-center rounded-md bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
      >
        記事一覧から比較する
      </Link>
    </div>
  );
}

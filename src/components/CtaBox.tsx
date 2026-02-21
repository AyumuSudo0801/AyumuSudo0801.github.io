type Props = {
  title?: string;
};

export function CtaBox({ title = "無料相談の条件を比較してから申込" }: Props) {
  return (
    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
      <h3 className="text-base font-semibold text-emerald-900">{title}</h3>
      <p className="mt-2 text-sm text-emerald-900/90">
        料金・対象者・サポート体制・PR表記を確認してから申し込むと、ミスマッチを減らせます。
      </p>
      <a
        href="#"
        className="mt-4 inline-block rounded-md bg-emerald-700 px-4 py-2 text-sm font-semibold text-white"
      >
        比較して申込先を選ぶ
      </a>
    </div>
  );
}

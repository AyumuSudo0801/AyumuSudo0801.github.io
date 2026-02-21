export default function AboutPage() {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-8">
      <h1 className="text-2xl font-bold">運営方針</h1>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-neutral-800">
        <li>一次情報（公式条件・申込要件）を優先し、比較条件を明示します。</li>
        <li>誇大表現を避け、メリット/デメリットの両面を記載します。</li>
        <li>教育領域のYMYL配慮として、断定表現を避け個人差を明記します。</li>
      </ul>
    </div>
  );
}

import { offers } from "@/data/offers";

export function OfferTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-white">
      <table className="min-w-full text-sm">
        <thead className="bg-neutral-100 text-left text-neutral-700">
          <tr>
            <th className="px-4 py-3">カテゴリ/案件</th>
            <th className="px-4 py-3">強み</th>
            <th className="px-4 py-3">条件メモ</th>
            <th className="px-4 py-3">承認目安</th>
            <th className="px-4 py-3">確認</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer) => (
            <tr key={offer.name} className="border-t border-neutral-200 align-top">
              <td className="px-4 py-3 font-medium">{offer.name}</td>
              <td className="px-4 py-3 text-neutral-700">{offer.strengths}</td>
              <td className="px-4 py-3 text-neutral-700">
                {offer.fee}
                <br />
                {offer.cancelReturn}
              </td>
              <td className="px-4 py-3 text-neutral-700">{offer.payoutSpeed}</td>
              <td className="px-4 py-3">
                <a href={offer.href} className="inline-block rounded-md bg-neutral-900 px-3 py-2 text-xs font-semibold text-white">
                  詳細確認
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

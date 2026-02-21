import { offers } from "@/data/offers";

export function OfferTable() {
  return (
    <div className="card overflow-x-auto rounded-2xl">
      <table className="min-w-[820px] w-full text-sm">
        <thead className="bg-slate-100 text-left text-slate-700">
          <tr>
            <th className="px-4 py-3 font-semibold">カテゴリ/案件</th>
            <th className="px-4 py-3 font-semibold">強み</th>
            <th className="px-4 py-3 font-semibold">条件メモ</th>
            <th className="px-4 py-3 font-semibold">承認目安</th>
            <th className="px-4 py-3 font-semibold">確認</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer) => (
            <tr key={offer.name} className="border-t border-slate-200 align-top">
              <td className="px-4 py-3 font-semibold text-slate-900">{offer.name}</td>
              <td className="px-4 py-3 text-slate-700">{offer.strengths}</td>
              <td className="px-4 py-3 text-slate-700">
                <p>{offer.fee}</p>
                <p className="mt-1 text-xs text-slate-500">{offer.cancelReturn}</p>
              </td>
              <td className="px-4 py-3 text-slate-700">{offer.payoutSpeed}</td>
              <td className="px-4 py-3">
                <a
                  href={offer.href}
                  className="inline-flex items-center rounded-md bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-700"
                >
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

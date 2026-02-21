export type Offer = {
  name: string;
  strengths: string;
  fee: string;
  shipping: string;
  cancelReturn: string;
  payoutSpeed: string;
  href: string;
};

export const offers: Offer[] = [
  {
    name: "英語コーチングA",
    strengths: "社会人向け・短期集中・無料カウンセリング導線が強い",
    fee: "無料相談CPA: 中〜高",
    shipping: "オンライン完結",
    cancelReturn: "受講開始前の規約確認が必須",
    payoutSpeed: "承認まで1〜2か月目安",
    href: "#",
  },
  {
    name: "リスキリング講座B",
    strengths: "給付制度の解説が充実・相談CVが取りやすい",
    fee: "無料相談CPA: 高め",
    shipping: "オンライン完結",
    cancelReturn: "給付条件・対象可否の注記が重要",
    payoutSpeed: "承認まで1〜2か月目安",
    href: "#",
  },
  {
    name: "受験オンライン個別C",
    strengths: "学年別導線が強い・体験授業CVあり",
    fee: "体験/面談CPA: 中",
    shipping: "オンライン/一部対面",
    cancelReturn: "地域・学年で条件差あり",
    payoutSpeed: "承認まで1〜2か月目安",
    href: "#",
  },
];

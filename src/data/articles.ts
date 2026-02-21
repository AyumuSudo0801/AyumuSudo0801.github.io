export type Article = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category: "比較" | "選び方" | "体験談" | "注意点";
  readingMinutes: number;
  sections: { heading: string; body: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "english-coaching-comparison-2026",
    title: "【2026年版】社会人向け英語コーチング比較｜失敗しない選び方",
    description: "料金・期間・サポート体制・無料相談の質で比較。忙しい社会人向けに最短で判断できる軸を整理。",
    publishedAt: "2026-02-22",
    category: "比較",
    readingMinutes: 10,
    sections: [
      {
        heading: "最初に見るべきは料金より『継続条件』",
        body: [
          "英語コーチングは料金レンジが広く、価格比較だけでは失敗しがちです。先に確認すべきは、宿題量、面談頻度、返金条件、受講延長可否です。",
          "忙しい社会人は、継続可能性が成果を左右します。想定学習時間を現実的に置いたうえで比較しましょう。"
        ]
      },
      {
        heading: "無料相談で確認する質問テンプレ",
        body: [
          "現在の英語レベルで3か月後にどこまで狙えるか。",
          "週あたり必要学習時間と、未達時のフォロー体制。",
          "担当変更可否と、チャット回答のSLA。"
        ]
      }
    ]
  },
  {
    slug: "reskilling-grant-guide",
    title: "リスキリング給付対象講座の選び方｜制度を活かして失敗を減らす",
    description: "給付制度を前提に、対象条件・自己負担・学習継続率の観点で講座を比較する方法を解説。",
    publishedAt: "2026-02-22",
    category: "選び方",
    readingMinutes: 9,
    sections: [
      {
        heading: "給付対象かどうかは最初に確定",
        body: [
          "講座比較の前に、あなたが制度対象かを確定するのが先です。対象外だと想定予算が崩れます。",
          "対象条件は必ず公式情報で確認し、記事上でも更新日を明記します。"
        ]
      },
      {
        heading: "比較軸は3つで十分",
        body: [
          "自己負担額、修了率、修了後の支援内容。",
          "この3つを表で揃えると、意思決定が速くなります。"
        ]
      }
    ]
  },
  {
    slug: "online-juku-parent-checklist",
    title: "中学受験オンライン個別のチェックリスト｜保護者が見るべきポイント",
    description: "学年・科目・宿題管理・保護者連携の4軸で、体験授業前に確認すべき点をまとめました。",
    publishedAt: "2026-02-22",
    category: "選び方",
    readingMinutes: 8,
    sections: [
      {
        heading: "成績より先に運用体制を見る",
        body: [
          "講師の質だけでなく、宿題の出し方、進捗共有、保護者報告の頻度が成果の再現性を左右します。",
          "オンラインでは、連絡設計が弱いと継続率が落ちます。"
        ]
      }
    ]
  },
  {
    slug: "education-affiliate-disclosure-template",
    title: "教育アフィリエイトのPR表記テンプレ｜信頼を落とさない書き方",
    description: "景表法・ステマ規制を意識したPR表記と、比較記事での評価軸開示テンプレを紹介。",
    publishedAt: "2026-02-22",
    category: "注意点",
    readingMinutes: 7,
    sections: [
      {
        heading: "PR表記は見える場所に固定",
        body: [
          "ファーストビュー付近、比較表の直前、記事末の3箇所に同じ方針で表示すると誤認を防げます。",
          "『広告を含む』だけでなく、評価基準を併記するのが重要です。"
        ]
      }
    ]
  },
  {
    slug: "education-affiliate-first-90-days",
    title: "教育アフィリエイト最初の90日｜1ニッチ集中で勝ち筋を作る",
    description: "初月〜3か月の実行順を、記事制作・内部導線・案件見直しの順で具体化。",
    publishedAt: "2026-02-22",
    category: "体験談",
    readingMinutes: 11,
    sections: [
      {
        heading: "最初は1ニッチに絞る",
        body: [
          "英語、リスキリング、受験を同時に広げるより、まず1つで導線を完成させる方が速いです。",
          "比較記事→詳細記事→CTAの導線を先に固めると、改善の打ち手が明確になります。"
        ]
      }
    ]
  }
];

export const getArticleBySlug = (slug: string) =>
  articles.find((article) => article.slug === slug);

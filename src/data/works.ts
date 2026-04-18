export interface Work {
  slug: string;
  title: string;
  tags: string[];
  year: string;
  description: string;
  overview: string;
  color: string;
  image: string;
}

export const works: Work[] = [
  {
    slug: "karappo",
    title: "Karappo",
    tags: ["卒業制作", "サービスデザイン"],
    year: "2025–2026",
    description: "調味料の使い切りを支援し、毎日の料理に驚きを与えるアプリ",
    overview:
      "「色々調味料を買い込むけど、結局余らせてしまう」という個人的な体験からリサーチを始め、調味料フードロスの構造的な課題を発見しました。ドレッシング＝サラダのような、「この調味料はこれにしか使えない」という思い込みを解くことを軸に、使い切る達成感と意外なレシピ提案を組み合わせたアプリをデザインしました。サービス設計からビジネスモデル検討、UIデザイン〜Reactを使ったプロトタイプ制作まで制作しました。",
    color: "var(--surface-container-low)",
    image: "/images/f73431a336c15f3a62ec9df0f53dc014ede9939d.png",
  },
  {
    slug: "skilllog",
    title: "Skill＆Log スキログ",
    tags: ["中間課題", "Webサイト企画"],
    year: "2025",
    description: "日常業務スキルを記録・可視化するサービス",
    overview:
      "大企業のプロパー社員が「今の会社で長く働いているけど、ちゃんと評価されない...」「社外でも通用するスキルが自分にあるか分からない」という課題を起点に企画したサービスです。転職特化の既存ツールとは一線を画し、日常業務の小さな成長を記録・可視化することで、人事部のタレント管理にも活用してもらう設計としました。\n実際のアプリデザインは実施せず、サービスを伝えるWebサイトについて、Figmaでのデザイン設計から、HTML/CSSによるコーディング実装まで一気通貫で制作しました。",
    color: "var(--surface-dim)",
    image: "/images/a065b828a470807e84466d5e610baf3a782faa7c.png",
  },
];

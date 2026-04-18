export interface Work {
  slug: string;
  title: string;
  tags: string[];
  year: string;
  context: string;
  description: string;
  role: string;
  period: string;
  color: string;
  image: string;
}

export const works: Work[] = [
  {
    slug: "karappo",
    title: "Karappo",
    tags: ["卒業制作", "サービスデザイン"],
    year: "2025–2026",
    context: "デジタルハリウッドの卒業制作として制作。",
    description: "調味料の使い切りを支援し、毎日の料理に驚きを与えるアプリ",
    role: "サービスデザイン / UXリサーチ / プロトタイプ制作",
    period: "2025年11月 - 2026年2月（4ヶ月）",
    color: "var(--surface-container-low)",
    image: "/images/f73431a336c15f3a62ec9df0f53dc014ede9939d.png",
  },
  {
    slug: "skilllog",
    title: "Skill＆Log スキログ",
    tags: ["中間課題", "Webサイト企画"],
    year: "2025",
    context: "デジタルハリウッドの中間課題として制作。",
    description: "日常業務スキルを記録・可視化するサービス",
    role: "UIデザイン / コーディング",
    period: "2025年7月 - 2025年9月（3ヶ月）",
    color: "var(--surface-dim)",
    image: "/images/a065b828a470807e84466d5e610baf3a782faa7c.png",
  },
];

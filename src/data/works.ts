export interface Work {
  slug: string;
  title: string;
  tags: string[];
  year: string;
  description: string;
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
    color: "var(--surface-container-low)",
    image: "/images/f73431a336c15f3a62ec9df0f53dc014ede9939d.png",
  },
  {
    slug: "skilllog",
    title: "Skill＆Log スキログ",
    tags: ["中間課題", "Webサイト企画"],
    year: "2025",
    description: "日常業務スキルを記録・可視化するサービス",
    color: "var(--surface-dim)",
    image: "/images/a065b828a470807e84466d5e610baf3a782faa7c.png",
  },
];

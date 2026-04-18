export interface Work {
  slug: string;
  title: string;
  tags: string[];
  year: string;
  context: string;
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
    context: "デジタルハリウッド本科 卒業制作。",
    description: "使いかけの調味料を使い切り、いつもの献立にレパートリーを足すアプリ。",
    color: "var(--surface-container-low)",
    image: "/images/f73431a336c15f3a62ec9df0f53dc014ede9939d.png",
  },
  {
    slug: "skilllog",
    title: "Skill＆Log スキログ",
    tags: ["中間課題", "Webサイト企画"],
    year: "2025",
    context: "デジタルハリウッド本科 中間課題。",
    description: "日々の業務で身についたスキルを記録し、見える化するサービスのコンセプトサイト。",
    color: "var(--surface-dim)",
    image: "/images/a065b828a470807e84466d5e610baf3a782faa7c.png",
  },
];

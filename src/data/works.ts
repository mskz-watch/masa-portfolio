export type Work = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  detail: string;
  role: string[];
  tools: string[];
  image: string;
  images: string[];
  color: string;
};

export const works: Work[] = [
  {
    slug: "health-app",
    title: "Wellnect",
    category: "モバイルアプリ",
    year: "2024",
    description: "ユーザーの日常的な健康習慣をサポートする、誠実なデザインのヘルスケアアプリ。",
    detail:
      "日々の体調記録・服薬リマインダー・医師との連携機能を備えたヘルスケアアプリのUI/UXデザインを担当。複雑な医療情報をシンプルかつ温かみのある表現で伝えることをテーマに、ユーザーインタビュー・ユーザービリティテストを繰り返しながら設計を行いました。特に高齢者ユーザーへのアクセシビリティを重視し、フォントサイズ・コントラスト比・タップ領域の設計に細心の注意を払いました。",
    role: ["UXリサーチ", "UIデザイン", "プロトタイピング", "ユーザビリティテスト"],
    tools: ["Figma", "Maze", "FigJam"],
    image: "/images/work-01.jpg",
    images: ["/images/work-01.jpg", "/images/work-01-2.jpg"],
    color: "#E8F0FB",
  },
  {
    slug: "sales-app",
    title: "FieldLink",
    category: "モバイルアプリ",
    year: "2023",
    description: "営業担当者の外出先での活動記録・顧客情報確認を効率化する業務用アプリ。",
    detail:
      "保険会社の営業担当者向けモバイルアプリのUIリデザインプロジェクト。既存アプリの操作性課題をスタッフインタビューで洗い出し、情報アーキテクチャの再設計から始めました。アコーディオンやボトムシートを活用した情報の段階的開示パターンを導入し、1画面あたりの情報量を削減しながらも業務上必要な情報へすぐにアクセスできる構造を実現しました。",
    role: ["UXリサーチ", "情報設計", "UIデザイン", "デザインシステム構築"],
    tools: ["Figma", "FigJam", "Notion"],
    image: "/images/work-02.jpg",
    images: ["/images/work-02.jpg", "/images/work-02-2.jpg"],
    color: "#F0F4E8",
  },
  {
    slug: "design-system",
    title: "Compass Design System",
    category: "デザインシステム",
    year: "2023",
    description: "複数プロダクトに一貫性をもたらすコンポーネント群と設計原則の整備。",
    detail:
      "社内複数プロダクトに散在していたUIコンポーネントを統合・標準化するデザインシステムの構築を主導。デザイントークンの定義からFigmaコンポーネントライブラリの整備、開発チームとの連携まで一貫して担当しました。導入後、デザイン〜開発間のフィードバックループが大幅に短縮され、新機能のUIリリーススピードが向上しました。",
    role: ["デザインシステム設計", "コンポーネント設計", "ドキュメント整備"],
    tools: ["Figma", "Storybook", "Notion", "GitHub"],
    image: "/images/work-03.jpg",
    images: ["/images/work-03.jpg"],
    color: "#F5EEE8",
  },
];

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const profileImage = "/images/81e2562d717d74c298775a4c0e46e860e82e4f08.png";

const career = [
  {
    year: "2019年〜",
    role: "生命保険会社 入社",
    department: "カスタマーサクセス（CS）部",
    description: "お客さまの声の分析と業務改善の提案",
  },
  {
    year: "2023年〜",
    role: "グループ会社のシンクタンクに出向",
    department: "",
    description: "AIを中心とした新しいテクノロジーの調査研究",
  },
  {
    year: "2025年4月〜",
    role: "デザイン組織へ異動",
    department: "",
    description: "UIデザイン・UXコンセプト設計・デザインシステム運用",
  },
  {
    year: "2026年3月",
    role: "デジタルハリウッド 本科UI/UXデザイン専攻 サービスデザインコースを卒業",
    department: "",
    description: "卒業制作でサービスデザインに取り組みました。",
  },
];

const skills = [
  {
    category: "Design Tools",
    items: ["Figma", "Miro", "Illustrator", "Photoshop"],
  },
  {
    category: "Code",
    items: ["HTML", "CSS"],
  },
];

export default function AboutPage() {
  return (
    <div
      className="min-h-screen pt-32 pb-24"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* ページヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 flex flex-col gap-4"
        >
          <div
            className="text-[11px]"
            style={{
              fontWeight: 600,
              letterSpacing: "1.1px",
              textTransform: "uppercase",
              color: "var(--on-surface-variant)",
            }}
          >
            About Me
          </div>
          <h1
            className="text-[40px] md:text-[46px]"
            style={{ fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.92px", color: "var(--on-surface)" }}
          >
            自己紹介
          </h1>
        </motion.div>

        {/* イントロ：テキスト + 画像 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 grid md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          <div className="flex flex-col gap-6">
            <p
              className="text-[16px]"
              style={{ fontWeight: 400, lineHeight: 1.8, color: "var(--on-surface-variant)" }}
            >
              1996年、東京生まれ。早稲田大学社会科学部を2019年に卒業後、生命保険会社に入社。
            </p>
            <p
              className="text-[16px]"
              style={{ fontWeight: 400, lineHeight: 1.8, color: "var(--on-surface-variant)" }}
            >
              最初の数年は、お客さまの声を集めて分析したり、世の中のトレンドを調べたりする仕事をしていました。たくさんの「生活者の声」に触れるうちに、「この声を自社のサービスに活かしたい」という気持ちが強くなり、2025年に社内のデザイン組織へ。いまはUXコンセプトの設計からUI実装、デザインシステムの運用まで幅広く担っています。
            </p>
            <p
              className="text-[16px]"
              style={{ fontWeight: 400, lineHeight: 1.8, color: "var(--on-surface-variant)" }}
            >
              「なぜこの画面なのか」を、事業の論理とユーザーの感情の両面から語れるデザイナーでありたい、と思っています。
            </p>
          </div>

          <div
            className="overflow-hidden rounded-2xl"
            style={{ backgroundColor: "var(--surface-dim)", padding: "32px" }}
          >
            <Image
              src={profileImage}
              alt="服部優一"
              width={600}
              height={800}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </motion.section>

        {/* キャリア年表 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 rounded-2xl"
          style={{ backgroundColor: "var(--surface-container-low)", padding: "48px 64px" }}
        >
          <h2
            className="mb-12 text-[28px] md:text-[32px]"
            style={{ fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.32px", color: "var(--on-surface)" }}
          >
            キャリアの流れ
          </h2>

          <div className="flex flex-col">
            {career.map((item, index) => (
              <div key={index} className="flex gap-6">
                {/* 左列：ドット + 線（flex-1で次のドットまで埋める） */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-3 h-3 rounded-full shrink-0 mt-1"
                    style={{ backgroundColor: "var(--primary)" }}
                  />
                  {index !== career.length - 1 && (
                    <div
                      className="w-px flex-1 mt-1"
                      style={{ backgroundColor: "var(--outline-variant)" }}
                    />
                  )}
                </div>

                {/* 右列：コンテンツ（最後以外はpb-8で間隔） */}
                <div className={`flex flex-col gap-2 ${index !== career.length - 1 ? "pb-8" : ""}`}>
                  <div
                    className="text-[14px]"
                    style={{ fontWeight: 600, lineHeight: 1.5, color: "var(--primary)" }}
                  >
                    {item.year}
                  </div>
                  <h3
                    className="text-[20px] md:text-[22px]"
                    style={{ fontWeight: 600, lineHeight: 1.3, color: "var(--on-surface)" }}
                  >
                    {item.role}
                  </h3>
                  {item.department && (
                    <div
                      className="text-[15px]"
                      style={{ fontWeight: 500, lineHeight: 1.5, color: "var(--on-surface-variant)" }}
                    >
                      {item.department}
                    </div>
                  )}
                  <p
                    className="text-[15px]"
                    style={{
                      fontWeight: 400,
                      lineHeight: 1.7,
                      color: "var(--on-surface-variant)",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* スキルセット */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <h2
            className="mb-12 text-[28px] md:text-[32px]"
            style={{ fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.32px", color: "var(--on-surface)" }}
          >
            スキルセット
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((group) => (
              <div key={group.category} className="flex flex-col gap-4">
                <h3
                  className="text-[20px]"
                  style={{ fontWeight: 600, lineHeight: 1.3, color: "var(--on-surface)" }}
                >
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full text-[15px]"
                      style={{
                        backgroundColor: "var(--surface-container-low)",
                        color: "var(--on-surface)",
                        fontWeight: 500,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ひとこと */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[768px]"
        >
          <h2
            className="mb-6 text-[28px] md:text-[32px]"
            style={{ fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.32px", color: "var(--on-surface)" }}
          >
            趣味・好きなこと
          </h2>
          <p
            className="text-[16px]"
            style={{ fontWeight: 400, lineHeight: 1.8, color: "var(--on-surface-variant)" }}
          >
            旅行と写真と音楽。週末はカメラを持って街を歩いたり、海外でのライブに思い切って足を運んだり。旅先で出会う何気ない風景や人の表情を撮るのが好きです。
          </p>
        </motion.section>
      </div>
    </div>
  );
}

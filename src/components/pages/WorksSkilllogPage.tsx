"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import NextWorkCard from "@/components/ui/NextWorkCard";
import { works } from "@/data/works";

const tags = ["中間課題", "Webサイト企画"];

interface SectionContent {
  label?: string;
  value?: string;
  text?: string;
  list?: string[];
}

interface Section {
  title: string;
  content: SectionContent[];
}

const sections: Section[] = [
  {
    title: "Overview",
    content: [
      { label: "サービス名", value: "スキログ（Skill × Log）" },
      { label: "概要", value: "日常業務スキルを記録・可視化するサービス" },
      { label: "ロール", value: "中間課題 / Webサイト企画" },
      { label: "期間", value: "2025年7月 - 2025年9月（3ヶ月）" },
    ],
  },
  {
    title: "Problem",
    content: [
      {
        text: "大企業のプロパー社員は丁寧に育成されますが、社外でも通用するスキルが身についているか分からないという課題があります。",
      },
      {
        text: "人事部も正しい評価ができているか確信が持てません。リスキルが叫ばれる時代に、埋もれていく人材を取り残さないために考えたサービスです。",
      },
      {
        text: "統計データ：",
        list: [
          "社会人の約50%が業務外学習ゼロ",
          "約70%が過去3年間社外研修ゼロ",
          "スキルの棚卸しができている人は30%未満",
        ],
      },
    ],
  },
  {
    title: "Approach",
    content: [
      {
        text: "既存の「スキル可視化」ツールを調査すると、転職文脈のものがほとんどでした。",
      },
      {
        text: "「エクセルのマクロが組める」「部署間調整ができる」などの日常業務スキルを記録・可視化するツールはほぼ存在しません。",
      },
      {
        text: "このホワイトスペースにスキログは挑みます。日々の小さな成長を記録し、自分の価値を再発見する場所として設計しました。",
      },
    ],
  },
  {
    title: "Design",
    content: [
      {
        text: "トンマナ設計から実装まで、一貫したデザインプロセスを実践しました：",
      },
      {
        list: [
          "安心感 — 落ち着いたネイビーを基調とした配色",
          "わかりやすさ — 情報階層を明確にしたレイアウト",
          "柔らかさ — 丸みを帯びたコンポーネント設計",
          "洗練 — 余白を活かしたミニマルなデザイン",
        ],
      },
      {
        text: "UIデザインをFigmaで完成させた後、HTML/CSSでコーディング実装まで行いました。デザインとエンジニアリングの両面を理解することで、実現可能性を考慮した設計ができました。",
      },
    ],
  },
  {
    title: "Reflection",
    content: [
      {
        text: "このプロジェクトでは、仮想クライアント（ReValue）を設定し、クライアントワークとしての企画・提案まで想定しました。",
      },
      {
        text: "実際の業務で感じた課題を起点に、ユーザーリサーチ、競合分析、サービス設計、デザイン実装まで一気通貫で経験できたことが大きな学びになりました。",
      },
      {
        text: "特に学んだこと：",
        list: [
          "問題発見から解決策提示までのストーリーテリング",
          "Webデザインとコーディングの実践的なスキル",
        ],
      },
    ],
  },
];

export default function WorksSkilllogPage() {
  return (
    <div className="min-h-screen pt-32 pb-24" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-[900px] mx-auto px-6 lg:px-12">
        {/* 戻るリンク */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 transition-colors duration-300"
            style={{ color: "var(--on-surface-variant)" }}
          >
            <ArrowLeft size={20} />
            <span className="text-[16px]">Works に戻る</span>
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="mb-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full inline-block text-[13px]"
                style={{
                  backgroundColor: "var(--secondary-container)",
                  color: "var(--on-surface)",
                  fontWeight: 500,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="mb-6 text-[48px] md:text-[64px]"
            style={{
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--on-surface)",
            }}
          >
            Skill＆Log スキログ
          </h1>

          <p
            className="mb-12 text-[20px] md:text-[24px]"
            style={{
              fontWeight: 400,
              lineHeight: 1.5,
              color: "var(--on-surface-variant)",
            }}
          >
            日常業務スキルを記録・可視化するサービス
          </p>

          <Image
            src="/images/a065b828a470807e84466d5e610baf3a782faa7c.png"
            alt="Skilllog Hero"
            width={1200}
            height={800}
            className="w-full h-auto rounded-xl"
          />
        </motion.div>

        {/* Sections */}
        <div className="flex flex-col gap-20">
          {sections.map((section, sectionIndex) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: sectionIndex * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="mb-8 pb-4"
                style={{ borderBottom: "1px solid rgba(172,179,182,0.3)" }}
              >
                <h2
                  className="text-[24px] md:text-[28px]"
                  style={{ fontWeight: 600, lineHeight: 1.3, color: "var(--on-surface)" }}
                >
                  {section.title}
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    {item.label && (
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div
                          className="text-[15px]"
                          style={{ fontWeight: 600, color: "var(--on-surface)" }}
                        >
                          {item.label}
                        </div>
                        <div
                          className="md:col-span-3 text-[15px]"
                          style={{ fontWeight: 400, lineHeight: 1.7, color: "var(--on-surface-variant)" }}
                        >
                          {item.value}
                        </div>
                      </div>
                    )}

                    {item.text && (
                      <p
                        className="text-[16px]"
                        style={{
                          fontWeight: 400,
                          lineHeight: 1.7,
                          color: "var(--on-surface-variant)",
                          marginBottom: item.list ? "1rem" : 0,
                        }}
                      >
                        {item.text}
                      </p>
                    )}

                    {item.list && (
                      <ul className="flex flex-col gap-3 ml-6">
                        {item.list.map((listItem, listIndex) => (
                          <li
                            key={listIndex}
                            className="relative pl-6 text-[16px]"
                            style={{ fontWeight: 400, lineHeight: 1.7, color: "var(--on-surface-variant)" }}
                          >
                            <span
                              className="absolute left-0 top-3 w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: "var(--primary)" }}
                            />
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {section.title === "Problem" && (
                <div className="mt-8 overflow-hidden rounded-xl aspect-video" style={{ backgroundColor: "var(--surface-container-low)" }}>
                  <Image
                    src="/images/4ff9b643684c9c4b18876d8c8462e42536c73172.png"
                    alt="Skill development"
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {section.title === "Design" && (
                <Image
                  src="/images/1a979d836eb2e0ab681b7372d60756e227c67c4a.png"
                  alt="Website design"
                  width={1200}
                  height={800}
                  className="mt-8 w-full h-auto rounded-xl"
                />
              )}
            </motion.section>
          ))}
        </div>

        <NextWorkCard work={works.find((w) => w.slug === "karappo")!} />
      </div>
    </div>
  );
}

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
      { label: "概要", value: "日々の業務で身についたスキルを記録し、見える化するサービスのコンセプトサイト" },
      { label: "ロール", value: "UIデザイン / コーディング" },
      { label: "期間", value: "2025年7月 - 2025年9月（3ヶ月）" },
    ],
  },
  {
    title: "Problem",
    content: [
      {
        text: "基本的に大企業に長く勤める社員は、社内で丁寧に育成されます。その一方で、社外でも「通用するスキル」がどれほど身についているかは、本人も把握しにくいのが実態です。評価する人事部にとっても、それは同じ。",
      },
      {
        text: "リスキリングという言葉は広まりましたが、日常業務のなかでいつの間にか身についている種類のスキルは、今も記録されることなく流れていきます。それを残すために考えたのが、スキログです。",
      },
    ],
  },
  {
    title: "Approach",
    content: [
      {
        text: "既存の「スキル可視化」ツールを調べると、そのほとんどが転職市場を前提にしています。一方で、「エクセルのマクロが組める」「部署間の調整ができる」といった、日々の業務で積み重ねる種類のスキルを残す場所は、ほとんどありません。",
      },
      {
        text: "スキログは、そこに光を当てるサービスとして設計しました。日常の小さな前進を記録し、自分がどこまで来たかを見えるようにする──そんな体験を目指しています。",
      },
    ],
  },
  {
    title: "Concept",
    content: [
      {
        text: "デザインコンセプトは、キャリアをじっくり積み上げてきた人に寄り添う印象を目指しました。",
      },
      {
        list: [
          "安心感：落ち着いたネイビーを基調にした配色",
          "わかりやすさ：情報の優先順位を整理したレイアウト",
          "柔らかさ：角に丸みを帯びたコンポーネント",
          "洗練：余白を活かしたシンプルな表現",
        ],
      },
      {
        text: "Figmaでデザインを終えた後、HTML/CSSで実装を自分で行いました。デザインとコードの両方に触ったことで、見た目だけで止まらず、動く形までデザインを落とし込める──そう感じられたプロジェクトです。",
      },
    ],
  },
  {
    title: "Reflection",
    content: [
      {
        text: "課題発見からデザイン実装まで、仮想クライアント（ReValue）への企画・提案という形式で経験したプロジェクトです。仕事で実際に課題に感じていたことからカタチにできたのが何よりの収穫でした。",
      },
      {
        text: "残ったのは、次の2つです。",
        list: [
          "調査で見つけた課題を、相手に納得してもらえる順番で提示することが難しかったこと。特に、課題の背景にある「スキルが見えないことのもどかしさ」を伝えるのに苦労しました。",
          "デザインとコーディングの難しさの違いを実感したこと。コードは、見た目だけでなく動きやレスポンシブ対応なども含めてより多面的な要素が絡んできます。両方に触れたことで、デザインをコードに落とし込む際の工夫が見えてきました。",
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
            href="/works"
            className="inline-flex items-center gap-2 transition-colors duration-300"
            style={{ color: "var(--on-surface-variant)" }}
          >
            <ArrowLeft size={20} />
            <span className="text-[16px]">Works 一覧に戻る</span>
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
            className="mb-6 text-[20px] md:text-[24px]"
            style={{
              fontWeight: 400,
              lineHeight: 1.5,
              color: "var(--on-surface-variant)",
            }}
          >
            日々の業務で身についたスキルを記録し、見える化するサービスのコンセプトサイト
          </p>
          <p
            className="mb-12 text-[16px]"
            style={{
              fontWeight: 400,
              lineHeight: 1.8,
              color: "var(--on-surface-variant)",
            }}
          >
            企業に長く勤めているが、どのスキルは社外で説明しづらいような…日常業務で身についたスキルを、残しておく場所です。
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
                          whiteSpace: "pre-line",
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

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Smartphone } from "lucide-react";
import NextWorkCard from "@/components/ui/NextWorkCard";
import { works } from "@/data/works";

const tags = ["卒業制作", "サービスデザイン"];

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
      { label: "サービス名", value: "Karappo（カラッポ）" },
      { label: "概要", value: "使いかけの調味料を使い切り、いつもの献立にレパートリーを足すアプリ" },
      { label: "ロール", value: "サービスデザイン / UXリサーチ / プロトタイプ制作" },
      { label: "期間", value: "2025年11月 - 2026年2月（4ヶ月）" },
    ],
  },
  {
    title: "Problem",
    content: [
      {
        text: "はじめは、自分の冷蔵庫で、ワクワクして買ったはずの調味料が結局使い切れず、買い物のたびに小さな罪悪感がある\n──そんな感覚からリサーチを始めました。",
      },
      {
        text: "調べてみると、調味料は家庭内フードロスの第2位。10人に6人が調味料を余らせています。",
      },
    ],
  },
  {
    title: "Insight",
    content: [
      {
        text: "最初は「使い切れないのはズボラだから」だと思っていました。でも話を聞くほどに、原因は「この調味料はここにしか使えない」という思い込みの方にあると見えてきました。",
      },
      {
        text: "実は、多くの調味料は想像より汎用性が高いんです。ナンプラーは炒め物以外にも合う。オイスターソースは中華以外にも幅広く使えます。「専用」の枠を外してあげれば、飽きる前に使い切れる可能性はぐっと広がります。",
      },
      {
        text: "この気づきが、Karappoの出発点になりました。",
      },
    ],
  },
  {
    title: "Concept",
    content: [
      { text: "Karappoで大事にするのは、3つのことです。" },
      {
        text: "① 使い切る達成感を、小さな何度もとどける\n「空っぽに近づく過程」をスタンプやアニメーションで見えるようにし、「使い切れた」感覚を何度でも積み重ねられる設計にしました。",
      },
      {
        text: "② 管理はアプリ側で持つ。使う人に考えさせない\n期限はアプリが把握し、必要なタイミングだけ通知します。ユーザーを「管理者」にしない——この1点を徹底しました。",
      },
      {
        text: "③ 「こんな使い方があったのか」が増える\n手持ちの食材や調味料から、少し意外なレシピを提案します。「買うレパートリー」ではなく「使うレパートリー」を広げるのが狙いです。",
      },
    ],
  },
  {
    title: "Business Model",
    content: [
      {
        text: "収益モデルは、食品メーカーとのデータ連携です。",
      },
      {
        list: [
          "ユーザー：調味料の管理とレシピ提案を無料で利用できます。",
          "食品メーカー：ユーザーの同意を得た購買・使用データを食品メーカーへ提供し、商品開発やマーケティングに役立てていただきます。",
        ],
      },
    ],
  },
  {
    title: "Vision",
    content: [
      {
        text: "使い切ることで、暮らしが整う。試してみることで、食卓が豊かになる。",
      },
      {
        text: "家での料理が、ただこなすものから、小さな発見の連続に変わっていく。Karappoが目指すのは、そんな食卓です。",
      },
    ],
  },
];

export default function WorksKarappoPage() {
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
            Karappo
          </h1>

          <p
            className="mb-6 text-[20px] md:text-[24px]"
            style={{
              fontWeight: 400,
              lineHeight: 1.5,
              color: "var(--on-surface-variant)",
            }}
          >
            使いかけの調味料を使い切り、いつもの献立にレパートリーを足すアプリ
          </p>
          <p
            className="mb-12 text-[16px]"
            style={{
              fontWeight: 400,
              lineHeight: 1.8,
              color: "var(--on-surface-variant)",
            }}
          >
            冷蔵庫の奥で固まったまま捨てていた調味料を、もう一つ増やさないために。
          </p>

          <Image
            src="/images/f73431a336c15f3a62ec9df0f53dc014ede9939d.png"
            alt="Karappo Hero"
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
                <Image
                  src="/images/research.jpg"
                  alt="調味料フードロスのリサーチデータ"
                  width={1200}
                  height={675}
                  className="mt-8 w-full h-auto rounded-xl"
                />
              )}
              {section.title === "Insight" && (
                <Image
                  src="/images/82007979ef475c0cddbb76d2fd5d4409c01d9fdb.png"
                  alt="Karappo Insight"
                  width={1200}
                  height={800}
                  className="mt-8 w-full h-auto rounded-xl"
                />
              )}
              {section.title === "Concept" && (
                <Image
                  src="/images/9840bd23a37faf8afb266bb38e6a1ff918fbf2ab.png"
                  alt="App interface concept"
                  width={1200}
                  height={800}
                  className="mt-8 w-full h-auto rounded-xl"
                />
              )}
              {section.title === "Business Model" && (
                <Image
                  src="/images/b38968ad295873bb1621cdc468c7af3b4cdf140c.png"
                  alt="Business Model"
                  width={1200}
                  height={800}
                  className="mt-8 w-full h-auto rounded-xl"
                />
              )}
            </motion.section>
          ))}
        </div>

        <div className="mt-20">
          <a
            href="/prototype/karappo/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full transition-colors duration-300"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--on-primary)",
              fontWeight: 600,
              fontSize: "15px",
            }}
          >
            <Smartphone size={18} />
            モバイルプロトタイプを見る
          </a>
        </div>

        <NextWorkCard work={works.find((w) => w.slug === "skilllog")!} />
      </div>
    </div>
  );
}

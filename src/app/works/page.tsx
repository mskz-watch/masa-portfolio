"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { works } from "@/data/works";

export default function WorksPage() {
  return (
    <div className="min-h-screen pt-32 pb-24" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* 戻るリンク */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 transition-colors duration-300"
            style={{ color: "var(--on-surface-variant)" }}
          >
            <ArrowLeft size={20} />
            <span className="text-[16px]">ホームに戻る</span>
          </Link>
        </motion.div>

        {/* 見出し */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div
            className="text-[11px] mb-4"
            style={{
              fontWeight: 600,
              letterSpacing: "1.1px",
              textTransform: "uppercase",
              color: "var(--on-surface-variant)",
            }}
          >
            Selected Works
          </div>
          <h1
            className="text-[36px] md:text-[56px]"
            style={{ fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.02em", color: "var(--on-surface)" }}
          >
            これまでの制作物
          </h1>
        </motion.div>

        {/* Worksカード一覧 */}
        <div className="flex flex-col gap-20">
          {works.map((work, index) => (
            <motion.article
              key={work.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <Link href={`/works/${work.slug}`} className="block">
                {/* サムネイル */}
                <div className="relative overflow-hidden rounded-2xl mb-8">
                  <Image
                    src={work.image}
                    alt={work.title}
                    width={1200}
                    height={675}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* テキスト */}
                <div className="flex flex-col gap-4">
                  {/* タグ + 年 */}
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full text-[12px]"
                        style={{
                          backgroundColor: "var(--secondary-container)",
                          color: "var(--on-surface)",
                          fontWeight: 500,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    <span
                      className="px-4 py-2 rounded-full text-[12px]"
                      style={{
                        backgroundColor: "var(--surface-container-low)",
                        color: "var(--on-surface-variant)",
                        fontWeight: 500,
                      }}
                    >
                      {work.year}
                    </span>
                  </div>

                  {/* タイトル */}
                  <h2
                    className="text-[32px] md:text-[36px]"
                    style={{ fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.72px", color: "var(--on-surface)" }}
                  >
                    {work.title}
                  </h2>

                  {/* 概要 */}
                  <p
                    className="text-[16px] md:text-[18px]"
                    style={{ fontWeight: 400, lineHeight: 1.6, color: "var(--on-surface-variant)" }}
                  >
                    {work.description}
                  </p>

                  {/* リンク */}
                  <div
                    className="flex items-center gap-2 mt-2 transition-all duration-300 group-hover:gap-4"
                    style={{ color: "var(--primary)" }}
                  >
                    <span className="text-[16px]" style={{ fontWeight: 600 }}>
                      詳細を見る
                    </span>
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

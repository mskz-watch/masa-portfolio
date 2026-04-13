"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const profileImage = "/images/profile-about.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32" style={{ backgroundColor: "var(--surface-container-lowest)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* 見出し */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col gap-4"
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
          <h2
            className="text-[36px] md:text-[46px]"
            style={{ fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.92px", color: "var(--on-surface)" }}
          >
            自己紹介
          </h2>
        </motion.div>

        {/* テキスト + 画像 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          {/* テキスト */}
          <div className="flex flex-col gap-6">
            <p
              className="text-[16px]"
              style={{ fontWeight: 400, lineHeight: 1.8, color: "var(--on-surface-variant)" }}
            >
              1996年、東京生まれ。大学を2019年に卒業後、生命保険会社に入社。
            </p>
            <p
              className="text-[16px]"
              style={{ fontWeight: 400, lineHeight: 1.8, color: "var(--on-surface-variant)" }}
            >
              最初の数年は、お客さまの声を集めて分析したり、世の中のトレンドを調べたりする仕事をしていました。たくさんの「生活者の声」に触れるうちに、「この声を自社のサービスに活かしたい」という気持ちが強くなり、2025年に社内のデザイン組織へ。いまはUXコンセプトの設計からUI実装、デザインシステムの運用まで幅広く挑戦中です。
            </p>
            <p
              className="text-[16px]"
              style={{ fontWeight: 400, lineHeight: 1.8, color: "var(--on-surface-variant)" }}
            >
              「なぜこの画面なのか」を、事業の論理とユーザーの感情の両面から語れるデザイナーでありたい、と思っています。
            </p>
          </div>

          {/* 画像 */}
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
        </motion.div>
      </div>
    </section>
  );
}

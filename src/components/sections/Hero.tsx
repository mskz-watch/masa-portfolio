"use client";
import { motion } from "framer-motion";

const heroImage = "/images/81e2562d717d74c298775a4c0e46e860e82e4f08.png";

export default function Hero() {
  return (
    <section
      className="w-full relative overflow-hidden min-h-[400px] md:min-h-[600px]"
      style={{
        background: "linear-gradient(149.565deg, rgb(70, 99, 112) 0%, rgb(122, 141, 153) 100%)",
      }}
    >
      {/* 背景画像（透過） */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      {/* メインコンテンツ */}
      <div className="relative z-10 flex flex-col items-end px-6 md:px-[100px] pt-[136px] md:pt-[191px] pb-16 md:pb-24 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 md:gap-10 items-end w-full md:max-w-[811px]"
        >
          {/* UI/UX Designer + 名前 */}
          <div className="flex flex-col gap-8 w-full items-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[16px] md:text-[20px]"
              style={{ fontWeight: 600, letterSpacing: "2px", color: "rgba(255,255,255,0.8)" }}
            >
              UI/UX Designer
            </motion.div>

            <div className="flex flex-col gap-2 w-full items-end">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-[32px] md:text-[48px]"
                style={{ fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.96px", color: "white" }}
              >
                服部 優一
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-[18px] md:text-[24px]"
                style={{ fontWeight: 400, lineHeight: 1.33, color: "rgba(255,255,255,0.95)" }}
              >
                Masakazu Hattori
              </motion.p>
            </div>
          </div>

          {/* キャッチコピー */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[24px] md:text-[32px] text-right w-full"
            style={{ fontWeight: 400, lineHeight: 1.4, letterSpacing: "-0.24px", color: "white" }}
          >
            聞くことから、
            <br />
            はじめるデザイン。
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="py-32 md:py-40 px-6 md:px-16 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="grid md:grid-cols-2 gap-16 md:gap-24 items-center"
        >
          {/* Image */}
          <motion.div variants={fadeUp} className="relative">
            <div className="relative aspect-[3/4] bg-navy/5 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-navy/20">
                <div className="text-center">
                  <div className="font-serif text-6xl">YH</div>
                  <div className="text-xs tracking-widest mt-2 font-noto">Profile Photo</div>
                </div>
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 pointer-events-none" />
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.p variants={fadeUp} className="section-label mb-6">
              About
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-8"
            >
              ユーザーと
              <br />
              <span className="italic text-gold">誠実に、</span>
              <br />
              向き合う。
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-noto text-sm text-navy/60 leading-[2.2] mb-6"
            >
              はじめまして、服部 優一です。UI/UXデザイナーとして、モバイルアプリや業務システムのデザインに携わっています。
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="font-noto text-sm text-navy/60 leading-[2.2] mb-10"
            >
              「やさしいデザイン」を信条に、ユーザーインタビューやユーザビリティテストを通じて、使う人の気持ちを丁寧に拾い上げることを大切にしています。複雑な情報をわかりやすく整理し、誰にとっても使いやすい体験をつくることが、私の仕事の根幹です。
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <div className="gold-line" />
              <span className="font-noto text-xs tracking-widest text-navy/40">
                デザインシステム / モバイルアプリ / ユーザーリサーチ
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

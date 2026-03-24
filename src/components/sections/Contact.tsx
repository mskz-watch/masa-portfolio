"use client";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-16 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold/10 pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.p variants={fadeUp} className="section-label mb-8">
            Contact
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-6xl text-navy leading-tight mb-8"
          >
            お気軽に
            <br />
            <span className="italic text-gold">ご連絡ください。</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-noto text-sm text-navy/50 leading-[2.2] mb-14 max-w-lg mx-auto"
          >
            お仕事のご依頼・ご相談・情報交換など、
            <br />
            どんなことでもお気軽にメッセージください。
          </motion.p>
          <motion.div variants={fadeUp}>
            <a
              href="mailto:yuichi.hattori@example.com"
              className="inline-flex items-center gap-4 font-noto text-sm tracking-widest text-white bg-navy px-10 py-5 hover:bg-navy-dark transition-all duration-300 group"
            >
              メールを送る
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-8 font-serif text-sm text-navy/30 italic"
          >
            yuichi.hattori@example.com
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

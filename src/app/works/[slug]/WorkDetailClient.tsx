"use client";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Work } from "@/data/works";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" } as never,
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } } as never,
};

export default function WorkDetailClient({
  work,
  allWorks,
}: {
  work: Work;
  allWorks: Work[];
}) {
  const currentIndex = allWorks.findIndex((w) => w.slug === work.slug);
  const prevWork = allWorks[currentIndex - 1] ?? null;
  const nextWork = allWorks[currentIndex + 1] ?? null;

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section
        className="relative pt-40 pb-28 px-6 md:px-16 overflow-hidden"
        style={{ backgroundColor: work.color }}
      >
        <div className="absolute right-0 bottom-0 font-serif text-[10rem] md:text-[18rem] text-white/40 leading-none pointer-events-none select-none">
          0{currentIndex + 1}
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="max-w-4xl mx-auto relative z-10"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <Link
              href="/#works"
              className="font-noto text-xs tracking-widest text-navy/50 hover:text-navy transition-colors duration-300 flex items-center gap-2"
            >
              ← Works へ戻る
            </Link>
          </motion.div>

          <motion.p variants={fadeUp} className="section-label mb-4">
            {work.category} — {work.year}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl md:text-8xl text-navy leading-[1.05] mb-10"
          >
            {work.title}
          </motion.h1>

          <motion.div variants={fadeUp} className="flex items-start gap-4 max-w-xl">
            <div className="gold-line mt-3 shrink-0" />
            <p className="font-noto text-sm text-navy/60 leading-[2.2]">{work.description}</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Main image */}
      <section className="px-6 md:px-16 -mt-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="w-full h-64 md:h-[500px] bg-navy/5 flex items-center justify-center border border-navy/5 shadow-sm"
          >
            <div className="text-center text-navy/20">
              <div className="font-serif text-5xl mb-2">{work.title}</div>
              <div className="font-noto text-xs tracking-widest">メイン画像をここに配置</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detail content */}
      <section className="py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[2fr_1fr] gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="section-label mb-6">Overview</p>
            <p className="font-noto text-sm text-navy/60 leading-[2.6]">{work.detail}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="space-y-10 md:sticky md:top-28"
          >
            <div>
              <p className="section-label mb-4">Role</p>
              <ul className="space-y-2.5">
                {work.role.map((r) => (
                  <li key={r} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-gold inline-block shrink-0" />
                    <span className="font-noto text-xs text-navy/60">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="section-label mb-4">Tools</p>
              <div className="flex flex-wrap gap-2">
                {work.tools.map((t) => (
                  <span key={t} className="font-noto text-xs text-navy/60 border border-navy/15 px-3 py-1.5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="section-label mb-3">Year</p>
              <span className="font-serif text-4xl text-navy/20 italic">{work.year}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sub image */}
      <section className="px-6 md:px-16 pb-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-48 md:h-72 bg-navy/4 flex items-center justify-center border border-navy/5"
          >
            <div className="text-center text-navy/15">
              <div className="font-noto text-xs tracking-widest">サブ画像をここに配置</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="border-t border-navy/8 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-2 divide-x divide-navy/8">
          {prevWork ? (
            <Link href={`/works/${prevWork.slug}`} className="group p-10 hover:bg-white transition-colors duration-300">
              <p className="font-noto text-xs tracking-widest text-navy/30 mb-3">← Prev</p>
              <p className="font-serif text-2xl text-navy group-hover:text-gold transition-colors duration-300">{prevWork.title}</p>
            </Link>
          ) : <div className="p-10" />}
          {nextWork ? (
            <Link href={`/works/${nextWork.slug}`} className="group p-10 text-right hover:bg-white transition-colors duration-300">
              <p className="font-noto text-xs tracking-widest text-navy/30 mb-3">Next →</p>
              <p className="font-serif text-2xl text-navy group-hover:text-gold transition-colors duration-300">{nextWork.title}</p>
            </Link>
          ) : <div className="p-10" />}
        </div>
      </section>
    </main>
  );
}

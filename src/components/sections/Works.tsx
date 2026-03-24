"use client";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { works } from "@/data/works";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Works() {
  return (
    <section id="works" className="py-32 md:py-40 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mb-20"
        >
          <motion.p variants={fadeUp} className="section-label mb-4">Works</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-6xl text-navy leading-tight">
            制作実績
          </motion.h2>
        </motion.div>

        {/* Work items */}
        <div className="space-y-8">
          {works.map((work, i) => (
            <motion.div
              key={work.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
            >
              <Link href={`/works/${work.slug}`} className="group block">
                <div className="relative overflow-hidden border border-navy/8 hover:border-gold/40 transition-all duration-500 bg-white">
                  <div className="grid md:grid-cols-[1fr_2fr] gap-0">
                    {/* Thumbnail */}
                    <div
                      className="relative h-56 md:h-72 overflow-hidden flex items-center justify-center"
                      style={{ backgroundColor: work.color }}
                    >
                      <div className="font-serif text-7xl text-navy/10 group-hover:scale-110 transition-transform duration-700">
                        0{i + 1}
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-all duration-500" />
                    </div>

                    {/* Info */}
                    <div className="p-8 md:p-12 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-5">
                          <span className="font-noto text-xs tracking-widest text-gold/80 border border-gold/30 px-3 py-1">
                            {work.category}
                          </span>
                          <span className="font-serif text-sm text-navy/30">{work.year}</span>
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                          {work.title}
                        </h3>
                        <p className="font-noto text-sm text-navy/50 leading-relaxed">
                          {work.description}
                        </p>
                      </div>
                      <div className="mt-8 flex items-center gap-3 text-xs tracking-widest font-noto text-navy/40 group-hover:text-gold transition-colors duration-300">
                        <span>詳細を見る</span>
                        <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom gold line on hover */}
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gold w-0 group-hover:w-full transition-all duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

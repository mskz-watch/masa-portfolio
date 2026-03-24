"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame: number;
    let start: number;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const progress = (ts - start) / 2000;
      if (scrollRef.current) {
        scrollRef.current.style.opacity = String(0.4 + 0.4 * Math.abs(Math.sin(progress * Math.PI)));
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-start justify-end pb-24 px-6 md:px-16 overflow-hidden bg-white">
      {/* Background grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-navy/4" />
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-navy/4" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-navy/4" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-navy/4" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-navy/4" />
      </div>

      {/* Gold accent line top */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-gold"
        initial={{ width: 0 }}
        animate={{ width: "30%" }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
      />

      {/* Background number */}
      <motion.div
        className="absolute top-32 right-8 md:right-16 font-serif text-[8rem] md:text-[14rem] text-navy/4 leading-none select-none pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        01
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl">
        <motion.p
          className="section-label mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Portfolio — UI/UX Designer
        </motion.p>

        <motion.h1
          className="font-serif text-[3.5rem] md:text-[7rem] leading-[1.05] text-navy tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.45 }}
        >
          Yuichi
          <br />
          <span className="italic text-gold">Hattori</span>
        </motion.h1>

        <motion.div
          className="mt-8 flex items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <div className="gold-line" />
          <p className="font-noto text-sm md:text-base text-navy/60 leading-relaxed tracking-wide">
            ユーザーと誠実に向き合い、<br className="hidden md:block" />
            やさしく使いやすいデザインをつくります。
          </p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.75 }}
        >
          <a
            href="#works"
            className="inline-flex items-center gap-4 font-noto text-xs tracking-widest text-navy border border-navy/20 px-8 py-4 hover:bg-navy hover:text-white transition-all duration-300 group"
          >
            実績を見る
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10 flex flex-col items-center gap-3">
        <span ref={scrollRef} className="font-serif text-xs tracking-widest text-navy/40 -rotate-90">
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-navy/20 to-transparent" />
      </div>
    </section>
  );
}

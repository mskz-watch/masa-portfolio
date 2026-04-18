"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[768px]"
        >
          <div
            className="text-[11px] mb-6"
            style={{
              fontWeight: 600,
              letterSpacing: "1.1px",
              textTransform: "uppercase",
              color: "var(--on-surface-variant)",
            }}
          >
            Contact
          </div>
          <h2
            className="text-[36px] md:text-[46px] mb-6"
            style={{ fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.92px", color: "var(--on-surface)" }}
          >
            お気軽にご連絡ください。
          </h2>
          <p
            className="mb-8 text-[16px]"
            style={{ fontWeight: 400, lineHeight: 1.8, color: "var(--on-surface-variant)" }}
          >
            デザインに関する情報交換やご相談など、お待ちしています。
          </p>
          <motion.a
            href="mailto:mskz.terao31+work@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--on-primary)",
              fontSize: "var(--body-lg)",
              fontWeight: 600,
              boxShadow: "0 4px 20px rgba(70,99,112,0.25)",
            }}
            whileHover={{ gap: "1rem" }}
          >
            メールで連絡する
            <ArrowRight size={20} />
          </motion.a>

          <p
            className="mt-6 text-[14px]"
            style={{ color: "var(--on-surface-variant)" }}
          >
            mskz.terao31+work@gmail.com
          </p>
        </motion.div>
      </div>
    </section>
  );
}

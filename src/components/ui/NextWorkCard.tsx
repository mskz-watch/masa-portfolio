"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Work } from "@/data/works";

interface NextWorkCardProps {
  work: Work;
}

export default function NextWorkCard({ work }: NextWorkCardProps) {
  return (
    <section
      className="mt-24 pt-12"
      style={{ borderTop: "1px solid rgba(172,179,182,0.3)" }}
    >
      <div
        className="text-[11px] mb-8"
        style={{
          fontWeight: 600,
          letterSpacing: "1.1px",
          textTransform: "uppercase",
          color: "var(--on-surface-variant)",
        }}
      >
        Next Work
      </div>

      <Link href={`/works/${work.slug}`} className="block group">
        <h2
          className="text-[28px] md:text-[36px] mb-4"
          style={{ fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.02em", color: "var(--on-surface)" }}
        >
          {work.title}
        </h2>

        <motion.div
          className="inline-flex items-center gap-2"
          style={{ color: "var(--primary)", fontWeight: 600, fontSize: "16px" }}
          whileHover={{ x: 6 }}
          transition={{ duration: 0.3 }}
        >
          View Work
          <ArrowRight size={20} />
        </motion.div>
      </Link>
    </section>
  );
}

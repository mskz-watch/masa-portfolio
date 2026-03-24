"use client";
import { motion, type Variants } from "framer-motion";

const skillGroups = [
  {
    label: "Design",
    skills: [
      { name: "UI デザイン", level: 95 },
      { name: "UX リサーチ", level: 90 },
      { name: "情報設計 / IA", level: 85 },
      { name: "プロトタイピング", level: 90 },
    ],
  },
  {
    label: "System",
    skills: [
      { name: "デザインシステム構築", level: 85 },
      { name: "コンポーネント設計", level: 80 },
      { name: "デザイントークン", level: 75 },
      { name: "ドキュメント整備", level: 80 },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Figma", level: 95 },
      { name: "FigJam", level: 90 },
      { name: "Maze / ユーザーテスト", level: 80 },
      { name: "Notion / Confluence", level: 85 },
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 md:py-40 px-6 md:px-16 bg-navy">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mb-20"
        >
          <motion.p variants={fadeUp} className="section-label text-gold mb-4">Skills</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-6xl text-white leading-tight">
            スキル
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: gi * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="font-serif text-gold text-xs tracking-widest">{group.label}</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              <div className="space-y-6">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-noto text-xs text-white/60 tracking-wide">{skill.name}</span>
                      <span className="font-serif text-xs text-gold/60">{skill.level}</span>
                    </div>
                    <div className="h-px bg-white/10 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-gold"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          ease: "easeOut",
                          delay: gi * 0.15 + si * 0.08,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

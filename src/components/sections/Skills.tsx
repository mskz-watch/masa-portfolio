"use client";
import { motion } from "framer-motion";

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

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-32"
      style={{ backgroundColor: "var(--surface-container-low)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* 見出し */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div
            className="text-[11px] mb-4"
            style={{
              fontWeight: 600,
              letterSpacing: "1.1px",
              textTransform: "uppercase",
              color: "var(--on-surface-variant)",
            }}
          >
            Skills
          </div>
          <h2
            className="text-[36px] md:text-[46px]"
            style={{ fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.92px", color: "var(--on-surface)" }}
          >
            スキル
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: gi * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span
                  className="text-[12px]"
                  style={{ fontWeight: 600, letterSpacing: "1px", color: "var(--primary)" }}
                >
                  {group.label}
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: "var(--outline-variant)" }} />
              </div>

              <div className="space-y-6">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-[13px]" style={{ color: "var(--on-surface-variant)" }}>
                        {skill.name}
                      </span>
                      <span className="text-[12px]" style={{ color: "var(--primary)", fontWeight: 600 }}>
                        {skill.level}
                      </span>
                    </div>
                    <div
                      className="h-1 rounded-full relative overflow-hidden"
                      style={{ backgroundColor: "var(--surface-variant)" }}
                    >
                      <motion.div
                        className="absolute inset-y-0 left-0 rounded-full"
                        style={{ backgroundColor: "var(--primary)" }}
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

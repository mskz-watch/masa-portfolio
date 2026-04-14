import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/svg-ziecekj4yu";

interface CookCompleteAnimationProps {
  visible: boolean;
  onComplete: () => void;
  consumptionAmount: string;
  consumptionMl: string;
  highlightTag: string;
}

/* ── Confetti colors ── */
const CONFETTI_COLORS = [
  "#F3C11B", "#F58B3B", "#3E76BD", "#FF6B6B",
  "#FFD93D", "#6BCB77", "#9FC3E8", "#FF8C42",
  "#F3C11B", "#F58B3B", "#3E76BD", "#FFD93D",
];

type ConfettiShape = "circle" | "rect" | "strip" | "star";
const SHAPES: ConfettiShape[] = ["circle", "rect", "strip", "star", "circle", "rect", "strip"];

interface ConfettiPiece {
  id: number;
  angle: number;
  distance: number;
  size: number;
  color: string;
  delay: number;
  shape: ConfettiShape;
  spinStart: number;
  spinEnd: number;
  wave: number;
}

/* ── Burst confetti: explodes outward from center ── */
function generateBurstConfetti(count: number): ConfettiPiece[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    angle: (360 / count) * i + (Math.random() - 0.5) * 25,
    distance: 100 + Math.random() * 160,
    size: 5 + Math.random() * 9,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    delay: Math.random() * 0.2,
    shape: SHAPES[i % SHAPES.length],
    spinStart: (Math.random() - 0.5) * 180,
    spinEnd: (Math.random() - 0.5) * 720,
    wave: 0,
  }));
}

/* ── Second wave: slightly delayed larger burst ── */
function generateSecondWave(count: number, offset: number): ConfettiPiece[] {
  return Array.from({ length: count }, (_, i) => ({
    id: offset + i,
    angle: (360 / count) * i + (Math.random() - 0.5) * 40 + 15,
    distance: 140 + Math.random() * 180,
    size: 4 + Math.random() * 8,
    color: CONFETTI_COLORS[(i + 3) % CONFETTI_COLORS.length],
    delay: 0.25 + Math.random() * 0.2,
    shape: SHAPES[(i + 2) % SHAPES.length],
    spinStart: (Math.random() - 0.5) * 90,
    spinEnd: (Math.random() - 0.5) * 900,
    wave: 1,
  }));
}

/* ── Shape renderer ── */
function ConfettiShape({ shape, size, color }: { shape: ConfettiShape; size: number; color: string }) {
  if (shape === "circle") {
    return (
      <div
        className="rounded-full"
        style={{ width: size, height: size, backgroundColor: color }}
      />
    );
  }
  if (shape === "rect") {
    return (
      <div
        className="rounded-[2px]"
        style={{ width: size, height: size, backgroundColor: color }}
      />
    );
  }
  if (shape === "strip") {
    return (
      <div
        className="rounded-full"
        style={{ width: size * 0.4, height: size * 1.6, backgroundColor: color }}
      />
    );
  }
  // star
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill={color}>
      <path d="M10 0L12.35 7.65L20 10L12.35 12.35L10 20L7.65 12.35L0 10L7.65 7.65Z" />
    </svg>
  );
}

export function CookCompleteAnimation({
  visible,
  onComplete,
  consumptionAmount,
  consumptionMl,
  highlightTag,
}: CookCompleteAnimationProps) {
  const [phase, setPhase] = useState<"bottle" | "burst" | "message" | "done">("bottle");

  // Generate all confetti once
  const burstPieces = useMemo(() => generateBurstConfetti(36), []);
  const secondWavePieces = useMemo(() => generateSecondWave(28, 100), []);

  useEffect(() => {
    if (!visible) {
      setPhase("bottle");
      return;
    }
    const t1 = setTimeout(() => setPhase("burst"), 600);
    const t2 = setTimeout(() => setPhase("message"), 1400);
    const t3 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [visible, onComplete]);

  const allBurst = [...burstPieces, ...secondWavePieces];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-[#1D293D]/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* ── Center content ── */}
          <div className="relative flex flex-col items-center justify-center z-10">
            {/* ── Bottle animation ── */}
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: 0 }}
              animate={
                phase === "bottle"
                  ? { scale: [0, 1.2, 1], rotate: [0, -5, 0] }
                  : phase === "burst"
                  ? { scale: [1, 1.05, 1], rotate: [0, -10, 10, -10, 10, -10, 0] }
                  : { scale: 0.7, rotate: -5, y: -30 }
              }
              transition={{
                duration: phase === "bottle" ? 0.5 : phase === "burst" ? 0.8 : 0.6,
                ease: phase === "burst" ? "easeInOut" : "easeOut",
              }}
            >
              {/* Bottle SVG */}
              <svg
                className="size-28"
                fill="none"
                viewBox="0 0 65.2937 60.9366"
              >
                <path d={svgPaths.p3178c980} fill="#F3C11B" />
                <path
                  d="M54.2561 14.8995V25.3204"
                  stroke="white"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2.56949"
                />
                <path
                  d="M48.2282 9.62431V28.6372"
                  stroke="white"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2.56949"
                />
                <rect
                  height="29.905"
                  rx="10.7062"
                  stroke="white"
                  strokeWidth="4.28248"
                  transform="rotate(-39.9468 8.58841 31.0473)"
                  width="51.8343"
                  x="8.58841"
                  y="31.0473"
                />
                <path
                  d={svgPaths.p12f0ea80}
                  fill="white"
                  stroke="white"
                  strokeWidth="3.42599"
                />
              </svg>

              {/* Pouring drops */}
              {(phase === "burst" || phase === "message") && (
                <>
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={`drop-${i}`}
                      className="absolute rounded-full bg-[#F3C11B]"
                      style={{
                        width: 6 - i,
                        height: 6 - i,
                        left: 14 + i * 6,
                        top: 80,
                      }}
                      initial={{ opacity: 0, y: 0 }}
                      animate={{
                        opacity: [0, 1, 1, 0],
                        y: [0, 30 + i * 15, 60 + i * 20, 90 + i * 25],
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.15,
                        repeat: Infinity,
                        ease: "easeIn",
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>

            {/* ── Confetti burst (2 waves, lots of pieces) ── */}
            {(phase === "burst" || phase === "message") &&
              allBurst.map((piece) => {
                const rad = (piece.angle * Math.PI) / 180;
                const tx = Math.cos(rad) * piece.distance;
                const ty = Math.sin(rad) * piece.distance;
                return (
                  <motion.div
                    key={`burst-${piece.id}`}
                    className="absolute pointer-events-none"
                    initial={{ opacity: 0, x: 0, y: 0, scale: 0, rotate: piece.spinStart }}
                    animate={{
                      opacity: [0, 1, 1, 0.6, 0],
                      x: [0, tx * 0.3, tx * 0.7, tx],
                      y: [0, ty * 0.3, ty * 0.7, ty],
                      scale: [0, 1.4, 1, 0.3],
                      rotate: [piece.spinStart, piece.spinEnd * 0.5, piece.spinEnd],
                    }}
                    transition={{
                      duration: piece.wave === 0 ? 1.4 : 1.6,
                      delay: piece.delay,
                      ease: "easeOut",
                    }}
                  >
                    <ConfettiShape shape={piece.shape} size={piece.size} color={piece.color} />
                  </motion.div>
                );
              })}

            {/* ── Message area ── */}
            {phase === "message" && (
              <motion.div
                className="flex flex-col items-center gap-4 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Consumption pill */}
                <motion.div
                  className="bg-gradient-to-r from-[#F58B3B] to-[#ff6900] rounded-full px-6 py-2.5 flex items-center gap-2 shadow-[0_4px_20px_rgba(245,139,59,0.4)]"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.15, 1] }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  <svg className="size-5" fill="none" viewBox="0 0 16 16">
                    <path
                      d="M8 2C8 2 4 6 4 9C4 10.06 4.42 11.08 5.17 11.83C5.92 12.58 6.94 13 8 13C9.06 13 10.08 12.58 10.83 11.83C11.58 11.08 12 10.06 12 9C12 6 8 2 8 2Z"
                      fill="white"
                    />
                  </svg>
                  <span
                    className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-white tracking-[-0.31px]"
                    style={{ fontWeight: 700 }}
                  >
                    {highlightTag} {consumptionAmount}
                  </span>
                </motion.div>

                {/* Big ml number */}
                <motion.div
                  className="flex items-baseline gap-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <span
                    className="font-['Inter',sans-serif] text-[48px] text-white"
                    style={{ fontWeight: 900 }}
                  >
                    {consumptionMl.replace("ml", "")}
                  </span>
                  <span
                    className="font-['Inter',sans-serif] text-[20px] text-white/80"
                    style={{ fontWeight: 700 }}
                  >
                    ml
                  </span>
                  <span
                    className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-white/80 ml-1"
                    style={{ fontWeight: 700 }}
                  >
                    消費!
                  </span>
                </motion.div>

                {/* Cheering text */}
                <motion.div
                  className="font-['Noto_Sans_JP',sans-serif] text-[14px] text-white/70 text-center"
                  style={{ fontWeight: 500, lineHeight: '21px' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <p>たくさん使えましたね！</p>
                  <p>使い切りまであと少しです！</p>
                </motion.div>

                {/* Mini Karappo wordmark */}
                <motion.div
                  className="mt-2 opacity-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  transition={{ delay: 0.8 }}
                >
                  <svg
                    className="h-5"
                    viewBox="0 0 333.819 87.912"
                    fill="none"
                  >
                    <g>
                      <path d={svgPaths.p1230fbf0} fill="white" />
                      <path d={svgPaths.p377c8500} fill="white" />
                      <path d={svgPaths.p293a2a80} fill="white" />
                      <path d={svgPaths.p2fb6bd80} fill="white" />
                      <path d={svgPaths.pe8b0900} fill="white" />
                      <path d={svgPaths.p12c96100} fill="white" />
                      <path d={svgPaths.p3de53180} fill="white" />
                      <path d={svgPaths.p264a4100} fill="white" />
                    </g>
                  </svg>
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Tap to dismiss hint */}
          {phase === "message" && (
            <motion.button
              className="absolute bottom-12 left-0 right-0 flex justify-center z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              onClick={onComplete}
            >
              <span
                className="font-['Noto_Sans_JP',sans-serif] text-[12px] text-white/50"
                style={{ fontWeight: 500 }}
              >
                タップして閉じる
              </span>
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.3, duration: 1.2, ease: "easeInOut" as const },
      opacity: { delay: i * 0.3, duration: 0.3 },
    },
  }),
}

const fill = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.3 + 1.0, duration: 0.6 },
  }),
}

export default function HouseAnimation() {
  return (
    <motion.svg
      viewBox="0 0 300 280"
      className="w-full max-w-sm mx-auto md:max-w-md"
      initial="hidden"
      animate="visible"
    >
      {/* Ground line */}
      <motion.line
        x1="20" y1="230" x2="280" y2="230"
        stroke="#1e3a8a" strokeWidth="3"
        variants={draw} custom={0}
      />

      {/* Foundation */}
      <motion.rect
        x="60" y="210" width="180" height="20" rx="2"
        fill="#1e3a8a" fillOpacity="0.15"
        variants={fill} custom={0}
      />
      <motion.rect
        x="60" y="210" width="180" height="20" rx="2"
        stroke="#1e3a8a" strokeWidth="2.5" fill="none"
        variants={draw} custom={0.5}
      />

      {/* Left wall */}
      <motion.line
        x1="70" y1="210" x2="70" y2="120"
        stroke="#1e3a8a" strokeWidth="2.5"
        variants={draw} custom={1}
      />

      {/* Right wall */}
      <motion.line
        x1="230" y1="210" x2="230" y2="120"
        stroke="#1e3a8a" strokeWidth="2.5"
        variants={draw} custom={1}
      />

      {/* Walls fill */}
      <motion.rect
        x="70" y="120" width="160" height="90"
        fill="#1e3a8a" fillOpacity="0.06"
        variants={fill} custom={1.5}
      />

      {/* Roof */}
      <motion.path
        d="M 50 120 L 150 45 L 250 120 Z"
        stroke="#f59e0b" strokeWidth="3" fill="none"
        strokeLinejoin="round"
        variants={draw} custom={2}
      />
      <motion.path
        d="M 50 120 L 150 45 L 250 120 Z"
        fill="#f59e0b" fillOpacity="0.15"
        variants={fill} custom={2.5}
      />

      {/* Door */}
      <motion.rect
        x="130" y="155" width="40" height="55" rx="3"
        stroke="#1e3a8a" strokeWidth="2" fill="none"
        variants={draw} custom={3}
      />
      <motion.rect
        x="130" y="155" width="40" height="55" rx="3"
        fill="#1e3a8a" fillOpacity="0.2"
        variants={fill} custom={3.5}
      />
      {/* Door knob */}
      <motion.circle
        cx="160" cy="185" r="3"
        fill="#f59e0b"
        variants={fill} custom={4}
      />

      {/* Left window */}
      <motion.rect
        x="85" y="145" width="30" height="30" rx="2"
        stroke="#1e3a8a" strokeWidth="2" fill="none"
        variants={draw} custom={3.5}
      />
      <motion.rect
        x="85" y="145" width="30" height="30" rx="2"
        fill="#d9e2fc" fillOpacity="0.5"
        variants={fill} custom={4}
      />
      <motion.line
        x1="100" y1="145" x2="100" y2="175"
        stroke="#1e3a8a" strokeWidth="1.5"
        variants={draw} custom={4}
      />
      <motion.line
        x1="85" y1="160" x2="115" y2="160"
        stroke="#1e3a8a" strokeWidth="1.5"
        variants={draw} custom={4}
      />

      {/* Right window */}
      <motion.rect
        x="185" y="145" width="30" height="30" rx="2"
        stroke="#1e3a8a" strokeWidth="2" fill="none"
        variants={draw} custom={3.5}
      />
      <motion.rect
        x="185" y="145" width="30" height="30" rx="2"
        fill="#d9e2fc" fillOpacity="0.5"
        variants={fill} custom={4}
      />
      <motion.line
        x1="200" y1="145" x2="200" y2="175"
        stroke="#1e3a8a" strokeWidth="1.5"
        variants={draw} custom={4}
      />
      <motion.line
        x1="185" y1="160" x2="215" y2="160"
        stroke="#1e3a8a" strokeWidth="1.5"
        variants={draw} custom={4}
      />

      {/* Chimney */}
      <motion.rect
        x="195" y="55" width="20" height="40" rx="2"
        stroke="#1e3a8a" strokeWidth="2" fill="none"
        variants={draw} custom={4.5}
      />
      <motion.rect
        x="195" y="55" width="20" height="40" rx="2"
        fill="#1e3a8a" fillOpacity="0.15"
        variants={fill} custom={5}
      />

      {/* Smoke puffs */}
      <motion.circle
        cx="205" cy="45" r="5"
        fill="#94a3b8" fillOpacity="0.4"
        variants={fill} custom={5.5}
        animate={{
          y: [0, -12, -8, -18],
          opacity: [0, 0.4, 0.3, 0],
          scale: [0.6, 1, 1.2, 1.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 5,
          ease: "easeOut" as const,
        }}
      />
      <motion.circle
        cx="210" cy="40" r="4"
        fill="#94a3b8" fillOpacity="0.3"
        variants={fill} custom={5.8}
        animate={{
          y: [0, -15, -10, -22],
          opacity: [0, 0.3, 0.2, 0],
          scale: [0.5, 0.9, 1.1, 1.3],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          delay: 6,
          ease: "easeOut" as const,
        }}
      />

      {/* Small decorative elements — bushes */}
      <motion.ellipse
        cx="45" cy="228" rx="18" ry="10"
        fill="#22c55e" fillOpacity="0.25"
        stroke="#16a34a" strokeWidth="1.5"
        variants={fill} custom={5}
      />
      <motion.ellipse
        cx="260" cy="228" rx="15" ry="9"
        fill="#22c55e" fillOpacity="0.25"
        stroke="#16a34a" strokeWidth="1.5"
        variants={fill} custom={5.2}
      />
    </motion.svg>
  )
}

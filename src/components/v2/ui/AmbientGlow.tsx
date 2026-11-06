import { motion } from "framer-motion";

export function AmbientGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-70">
      {/* Orb 1: Hot Magenta */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -70, 50, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[15%] left-[10%] h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle,rgba(255,46,147,0.22)_0%,transparent_70%)] blur-[90px]"
      />

      {/* Orb 2: Deep Violet */}
      <motion.div
        animate={{
          x: [0, -90, 70, 0],
          y: [0, 80, -60, 0],
          scale: [1, 1.15, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] -right-[10%] h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle,rgba(112,39,207,0.25)_0%,transparent_70%)] blur-[100px]"
      />

      {/* Orb 3: Mid Cyan / Pink accent */}
      <motion.div
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -50, 60, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] left-[20%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,46,147,0.18)_0%,transparent_70%)] blur-[110px]"
      />

      {/* Subtle micro grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

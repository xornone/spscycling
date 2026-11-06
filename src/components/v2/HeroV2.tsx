import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight, ShieldCheck, Users, Flame } from "lucide-react";
import logoSpsWhite from "@/assets/logo-sps-white.png";
import heroRiders from "@/assets/hero-riders.jpg";
import { ShimmerButton } from "./ui/ShimmerButton";
import { NumberTicker } from "./ui/NumberTicker";
import { TiltCard } from "./ui/TiltCard";

export function HeroV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[105vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Parallax Hero Background Image */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[10%] -bottom-[10%] w-full h-[120%] bg-cover bg-center pointer-events-none"
      >
        <img
          src={heroRiders}
          alt="Cyclistes SPS sur les routes de l'Hérault"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.08] saturate-[1.12]"
        />
      </motion.div>

      {/* Cinematic Multi-layer Gradient Mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,4,16,0.65) 0%, rgba(8,4,16,0.35) 30%, rgba(8,4,16,0.7) 70%, rgba(8,4,16,0.98) 100%)",
        }}
      />
      {/* Radial Hot Spotlight behind logo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 48%, rgba(255,46,147,0.22) 0%, rgba(112,39,207,0.15) 35%, transparent 70%)",
        }}
      />
      {/* Deep Dark Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(8,4,16,0.85) 100%)",
        }}
      />

      {/* Hero Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-32 flex flex-col items-center"
      >
        {/* Top Tagline pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-[0_0_20px_rgba(255,46,147,0.25)]"
        >
          <span className="w-2 h-2 rounded-full bg-sps-pink animate-pulse" />
          <span className="font-barlow-condensed text-xs uppercase tracking-[3px] text-white/90 font-medium">
            Club Cycliste Associatif · Montpellier
          </span>
        </motion.div>

        {/* 3D Tiltable White SPS Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[540px] mb-4"
        >
          <TiltCard maxTilt={10} glare={true} className="cursor-pointer">
            <div className="relative group">
              <img
                src={logoSpsWhite}
                alt="SPS Solo Plus Solo"
                className="w-full h-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] filter transition-all duration-300 group-hover:drop-shadow-[0_20px_50px_rgba(255,46,147,0.4)]"
              />
            </div>
          </TiltCard>
        </motion.div>

        {/* Catchphrase */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-barlow text-lg sm:text-xl md:text-2xl font-light text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed tracking-wide"
        >
          Basé à Montpellier. <span className="font-medium text-white">On roule ensemble, on progresse ensemble.</span>
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <a href="#about">
            <ShimmerButton
              shimmerColor="#ffffff"
              shimmerDuration="3s"
              background="linear-gradient(135deg, hsl(330 85% 49%), hsl(264 70% 38%))"
              className="!px-9 !py-4 text-sm tracking-[3px] rounded-lg shadow-[0_8px_30px_rgba(255,46,147,0.4)]"
            >
              <span>Découvrir le club</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </ShimmerButton>
          </a>

          <a
            href="#equipement"
            className="px-8 py-3.5 rounded-lg font-barlow-condensed font-bold uppercase tracking-[3px] text-sm text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all duration-300 hover:border-sps-pink/40 hover:shadow-[0_0_25px_rgba(255,46,147,0.2)]"
          >
            L'Équipement Gobik
          </a>
        </motion.div>

        {/* Mini Pill Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/60 text-xs font-barlow-condensed uppercase tracking-wider"
        >
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-sps-pink" /> Sécurité & Convivialité
          </span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-purple-400" /> Groupes de niveau
          </span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-sps-magenta" /> Esprit Peloton
          </span>
        </motion.div>
      </motion.div>

      {/* Floating Modern Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 py-6 px-6">
          {/* Stat 1 */}
          <div className="text-center group border-r border-white/5 last:border-none">
            <div className="font-bebas text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-sps-pink to-purple-400">
              <NumberTicker value={2025} delay={0.2} />
            </div>
            <div className="font-barlow-condensed text-xs uppercase tracking-[2.5px] text-white/55 mt-1 font-medium">
              Fondé en
            </div>
          </div>

          {/* Stat 2 */}
          <div className="text-center group border-r border-white/5 last:border-none">
            <div className="font-bebas text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-sps-pink to-purple-400">
              +<NumberTicker value={100} delay={0.3} />
            </div>
            <div className="font-barlow-condensed text-xs uppercase tracking-[2.5px] text-white/55 mt-1 font-medium">
              Membres actifs
            </div>
          </div>

          {/* Stat 3 */}
          <div className="text-center group border-r border-white/5 last:border-none">
            <div className="font-bebas text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-sps-pink to-purple-400">
              <NumberTicker value={3} delay={0.4} />
            </div>
            <div className="font-barlow-condensed text-xs uppercase tracking-[2.5px] text-white/55 mt-1 font-medium">
              Sorties / semaine
            </div>
          </div>

          {/* Stat 4 */}
          <div className="text-center group">
            <div className="font-bebas text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-sps-pink to-purple-400">
              ∞
            </div>
            <div className="font-barlow-condensed text-xs uppercase tracking-[2.5px] text-white/55 mt-1 font-medium">
              Kilomètres partagés
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <a
        href="#about"
        className="absolute bottom-28 left-1/2 -translate-x-1/2 text-white/40 hover:text-sps-pink transition-colors z-20 flex flex-col items-center gap-1"
        style={{ animation: "bounce-slow 2.4s infinite" }}
        aria-label="Faire défiler"
      >
        <span className="font-barlow-condensed text-[10px] uppercase tracking-[3px] text-white/40">Scroll</span>
        <ChevronDown size={22} />
      </a>
    </section>
  );
}

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import logoSps from "@/assets/logo-sps-round.png";

const navLinks = [
  { label: "Le Club", href: "#about" },
  { label: "Équipement", href: "#equipement" },
  { label: "Expérience", href: "#experience" },
  { label: "Communauté", href: "#communaute" },
];

export function NavV2() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sps-pink via-purple-500 to-sps-magenta z-50 origin-left shadow-[0_0_12px_rgba(255,46,147,0.7)]"
        style={{ scaleX }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 md:px-12 py-4 ${
          scrolled
            ? "bg-black/60 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & V2 Badge */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={logoSps}
                alt="SPS Cycling"
                className="h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-sps-magenta/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-bebas text-xl tracking-wider text-white flex items-center gap-1.5">
                SPS <span className="text-sps-pink text-sm font-sans font-bold px-1.5 py-0.5 rounded bg-sps-magenta/20 border border-sps-magenta/30">V2</span>
              </span>
              <span className="font-barlow-condensed text-[10px] tracking-[2px] uppercase text-white/50 -mt-1">
                Solo Plus Solo · Montpellier
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative font-barlow-condensed text-sm font-semibold uppercase tracking-[2px] text-white/75 hover:text-white transition-colors duration-200 group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sps-pink transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(255,46,147,0.8)]" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Link back to V1 */}
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-barlow-condensed uppercase tracking-wider text-white/60 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200"
              title="Basculer vers la version classique (V1)"
            >
              <Sparkles className="w-3 h-3 text-sps-pink" />
              <span>V1 Classique</span>
            </Link>

            <a
              href="#communaute"
              className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-barlow-condensed font-bold uppercase tracking-[2px] text-white bg-gradient-to-r from-sps-magenta to-sps-purple shadow-[0_4px_20px_rgba(255,46,147,0.35)] hover:shadow-[0_4px_30px_rgba(255,46,147,0.6)] hover:scale-105 transition-all duration-300 border border-white/20"
            >
              <span>Suis-nous</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <Link
              to="/"
              className="px-2.5 py-1 rounded text-[11px] font-barlow-condensed uppercase tracking-wider text-white/70 bg-white/10 border border-white/15"
            >
              V1
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-white/80 hover:text-white bg-white/5 border border-white/10 focus:outline-none"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 p-6 rounded-2xl bg-black/90 backdrop-blur-2xl border border-white/15 flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-barlow-condensed text-base font-semibold uppercase tracking-[2px] text-white/80 hover:text-sps-pink transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#communaute"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-3 rounded-xl text-xs font-barlow-condensed font-bold uppercase tracking-[2px] text-white bg-gradient-to-r from-sps-magenta to-sps-purple"
              >
                Suis-nous
              </a>
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-2.5 rounded-xl text-xs font-barlow-condensed uppercase tracking-[2px] text-white/60 bg-white/5 border border-white/10"
              >
                Retour à la V1 classique
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
}

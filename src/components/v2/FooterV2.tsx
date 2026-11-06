import { ArrowUp, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import logoSps from "@/assets/logo-sps-round.png";

export function FooterV2() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#07030d] px-6 md:px-12 py-16 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sps-magenta/50 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand identity */}
        <div className="flex items-center gap-4">
          <div className="relative group cursor-pointer" onClick={scrollToTop}>
            <img
              src={logoSps}
              alt="SPS Cycling"
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-sps-pink/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <div className="font-bebas text-2xl text-white tracking-wider">
              SPS <span className="text-sps-pink">CYCLING</span>
            </div>
            <p className="text-white/40 text-xs font-barlow tracking-wider">
              © {new Date().getFullYear()} SPS – Solo Plus Solo. Montpellier.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          <a
            href="https://www.instagram.com/spscycling/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-barlow-condensed text-xs uppercase tracking-[2px] text-white/50 hover:text-sps-pink transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.strava.com/clubs/spscycling"
            target="_blank"
            rel="noopener noreferrer"
            className="font-barlow-condensed text-xs uppercase tracking-[2px] text-white/50 hover:text-sps-pink transition-colors"
          >
            Strava
          </a>
          <Link
            to="/mentions-legales"
            className="font-barlow-condensed text-xs uppercase tracking-[2px] text-white/50 hover:text-sps-pink transition-colors"
          >
            Mentions légales
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 font-barlow-condensed text-xs uppercase tracking-[2px] text-purple-400/80 hover:text-purple-300 transition-colors"
          >
            <Sparkles className="w-3 h-3 text-sps-pink" />
            <span>Version V1 Classique</span>
          </Link>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg group"
          aria-label="Retour en haut"
          title="Retour en haut"
        >
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}

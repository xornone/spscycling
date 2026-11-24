import { ChevronDown } from "lucide-react";
import logoSpsWhite from "@/assets/logo-sps-white.png";
import heroRiders from "@/assets/hero-riders.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroRiders})` }}
      />
      {/* Dark gradient overlay — fondu parfait, photo visible, texte lisible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(264 80% 5% / 0.55) 0%, hsl(264 80% 6% / 0.30) 35%, hsl(264 80% 5% / 0.45) 65%, hsl(264 80% 5% / 0.85) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 72%, hsl(330 85% 49% / 0.20) 0%, transparent 60%)",
        }}
      />
      {/* Vignette latérale pour fondu avec le thème */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, transparent 45%, hsl(264 80% 4% / 0.55) 100%)",
        }}
      />
      {/* Voile centré pour le contraste du texte */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 42%, hsl(264 80% 5% / 0.35) 0%, transparent 38%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl pt-16 pb-36 md:pt-20 md:pb-28" style={{ animation: "fadeDown 1s ease-out" }}>
        <span className="section-tag" style={{ color: "#ffffff" }}>
          Club Cycliste Associatif · Montpellier
        </span>
        <img
          src={logoSpsWhite}
          alt="SPS"
          className="w-[220px] sm:w-[320px] md:w-[420px] lg:w-[500px] h-auto mx-auto mb-2 sm:mb-3"
        />
        <p className="font-barlow text-sm sm:text-base md:text-xl font-light text-foreground/75 max-w-xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2">
          Basé à Montpellier. On roule ensemble, on progresse ensemble.
        </p>
        <a href="#about" className="btn-sps">
          Découvrir le club
        </a>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-border bg-background/50 backdrop-blur-md">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-4 sm:gap-8 md:gap-20 py-3 sm:py-5 px-4">
          {[
            { value: "2025", label: "Fondé en" },
            { value: "100", label: "Membres actifs" },
            { value: "3", label: "Sorties / semaine" },
            { value: "∞", label: "Kilomètres partagés", isInfinity: true }
          ].map((stat) => (
            <div key={stat.label} className="text-center flex flex-col items-center justify-center">
              <div className="font-bebas text-xl sm:text-2xl md:text-3xl text-gradient-magenta leading-none h-6 sm:h-7 md:h-9 flex items-center justify-center">
                {stat.isInfinity ? (
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#hero-infinity-gradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="hero-infinity-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(330 85% 49%)" />
                        <stop offset="100%" stopColor="hsl(330 100% 65%)" />
                      </linearGradient>
                    </defs>
                    <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
                  </svg>
                ) : (
                  stat.value
                )}
              </div>
              <div className="font-barlow-condensed text-[10px] sm:text-xs uppercase tracking-[1.5px] sm:tracking-[2px] text-foreground/50 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator (desktop only to prevent mobile overlap) */}
      <a
        href="#about"
        className="hidden md:block absolute bottom-24 left-1/2 -translate-x-1/2 text-foreground/40"
        style={{ animation: "bounce-slow 2s infinite" }}
        aria-label="Défiler vers la section Le Club"
      >
        <ChevronDown size={28} />
      </a>
    </section>);

};

export default HeroSection;
import { ChevronDown } from "lucide-react";
import logoSpsWhite from "@/assets/logo-sps-white.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 80%, hsl(330 85% 49% / 0.2) 0%, transparent 60%)"
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl" style={{ animation: "fadeDown 1s ease-out" }}>
        <span className="section-tag">Club Cycliste · Montpellier</span>
        <img
          src={logoSpsWhite}
          alt="SPS"
          className="w-[280px] md:w-[400px] lg:w-[500px] h-auto mx-auto mb-1"
        />
        <p className="font-barlow text-lg md:text-xl font-light text-foreground/65 max-w-xl mx-auto mb-10 leading-relaxed">
          Club de cyclisme sur route basé à Montpellier. On roule ensemble, on progresse ensemble.
        </p>
        <a href="#about" className="btn-sps">
          Découvrir le club
        </a>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-border bg-background/40 backdrop-blur-md">
        <div className="max-w-5xl mx-auto flex justify-center gap-12 md:gap-20 py-6 px-6">
          {[
          { value: "2025", label: "Fondé en" },
          { value: "40+", label: "Membres actifs" },
          { value: "2", label: "Sorties / semaine" },
          { value: "∞", label: "Kilomètres partagés" }].
          map((stat) =>
          <div key={stat.label} className="text-center">
              <div className="font-bebas text-2xl md:text-3xl text-gradient-magenta">{stat.value}</div>
              <div className="font-barlow-condensed text-xs uppercase tracking-[2px] text-foreground/50 mt-1">
                {stat.label}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-24 left-1/2 text-foreground/40"
        style={{ animation: "bounce-slow 2s infinite" }}>
        
        <ChevronDown size={28} />
      </a>
    </section>);

};

export default HeroSection;
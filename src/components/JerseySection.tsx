import { useState } from "react";
import jerseyFront from "@/assets/jersey-sps-front.png";
import jerseyBack from "@/assets/jersey-sps-back.png";

const JerseySection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  // Show back if either hovered (mouse) or flipped (click/tap on mobile)
  const showBack = isHovered || isFlipped;

  return (
    <section id="maillot" className="py-14 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 max-w-[1200px] mx-auto">
      <div className="grid md:grid-cols-2 gap-10 sm:gap-14 md:gap-20 items-center">
        {/* Text: Top on mobile (order-1), Right on desktop (md:order-2) */}
        <div className="order-1 md:order-2">
          <span className="section-tag">Équipement</span>
          <h2 className="section-title">Le maillot SPS</h2>
          <div className="divider-gradient" />
          <p className="text-foreground/65 leading-relaxed font-light mb-5 text-sm sm:text-base">
            Conçu en partenariat avec <strong className="font-semibold text-foreground/80">Gobik</strong>, notre maillot club incarne l'identité SPS : violet profond, accents magenta, et le logo SPS en signature.
          </p>
          <p className="text-foreground/65 leading-relaxed font-light text-sm sm:text-base">
            Un design unique qui te reconnaît sur la route et renforce l'esprit d'équipe à chaque sortie.
          </p>
        </div>

        {/* Interactive Jersey Container: Below text on mobile (order-2), Left on desktop (md:order-1) */}
        <div className="order-2 md:order-1 relative text-center select-none">
          <div
            className="relative inline-block cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsFlipped((prev) => !prev)}
            role="button"
            tabIndex={0}
            aria-label="Afficher le maillot de dos ou de face"
          >
            {/* Background Radial Light Glow */}
            <div
              className="absolute inset-0 pointer-events-none transition-all duration-700 rounded-full"
              style={{
                background: showBack
                  ? "radial-gradient(ellipse at center, hsl(330 85% 49% / 0.35) 0%, hsl(264 70% 38% / 0.2) 40%, transparent 70%)"
                  : "radial-gradient(ellipse at center, hsl(330 85% 49% / 0.15) 0%, transparent 70%)",
                transform: showBack ? "scale(1.2)" : "scale(1)",
              }}
            />

            {/* Jersey Visuals wrapper with smooth scale on interaction */}
            <div
              className={`relative z-10 w-full max-w-[355px] sm:max-w-[440px] md:max-w-[530px] lg:max-w-[550px] mx-auto transition-transform duration-500 ease-out ${
                showBack ? "scale-105" : "hover:scale-105"
              }`}
              style={{
                filter: showBack
                  ? "drop-shadow(0 30px 60px hsl(330 85% 49% / 0.45))"
                  : "drop-shadow(0 30px 60px hsl(330 85% 49% / 0.25))",
              }}
            >
              {/* Front view image */}
              <img
                src={jerseyFront}
                alt="Maillot SPS - Face"
                className={`w-full h-auto transition-opacity duration-500 ease-in-out ${
                  showBack ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Back view image (stacked directly over front view) */}
              <img
                src={jerseyBack}
                alt="Maillot SPS - Dos avec sponsor La Terrazza"
                className={`w-full h-auto absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  showBack ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              />
            </div>
          </div>

          {/* Interactive Toggle Pills (for mobile touch & clarity) */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              type="button"
              onClick={() => setIsFlipped(false)}
              className={`font-barlow-condensed text-xs uppercase tracking-[2px] px-5 py-2 rounded-full transition-all duration-200 cursor-pointer min-h-[38px] ${
                !showBack
                  ? "bg-sps-magenta text-white shadow-[0_0_15px_rgba(255,46,147,0.4)] font-semibold"
                  : "bg-white/5 text-foreground/50 hover:text-white border border-white/10"
              }`}
            >
              Vue Face
            </button>
            <button
              type="button"
              onClick={() => setIsFlipped(true)}
              className={`font-barlow-condensed text-xs uppercase tracking-[2px] px-5 py-2 rounded-full transition-all duration-200 cursor-pointer min-h-[38px] ${
                showBack
                  ? "bg-sps-magenta text-white shadow-[0_0_15px_rgba(255,46,147,0.4)] font-semibold"
                  : "bg-white/5 text-foreground/50 hover:text-white border border-white/10"
              }`}
            >
              Vue Dos
            </button>
          </div>

          <p className="font-barlow-condensed text-xs uppercase tracking-wider text-foreground/40 mt-3">
            Survolez ou touchez le maillot pour voir le dos
          </p>
        </div>
      </div>
    </section>
  );
};

export default JerseySection;

import { useState } from "react";
import cuissardImg from "@/assets/cuissard-sps.png";

const CuissardSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  // Active state: hovered on desktop or tapped on mobile
  const isActive = isHovered || isTapped;

  return (
    <section id="cuissard" className="py-14 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 max-w-[1200px] mx-auto">
      <div className="grid md:grid-cols-2 gap-10 sm:gap-14 md:gap-20 items-center">
        {/* Text: Top on mobile (order-1), Left on desktop (order-1) */}
        <div className="order-1">
          <span className="section-tag">Équipement</span>
          <h2 className="section-title">Le cuissard SPS</h2>
          <div className="divider-gradient" />
          <p className="text-foreground/65 leading-relaxed font-light text-sm sm:text-base">
            Conçu dans le même esprit que le maillot, notre cuissard club associe <strong className="font-semibold text-foreground/80">qualité et confort</strong> : matière technique, maintien musculaire et sanglage pensés pour les longues sorties.
          </p>
        </div>

        {/* Cuissard image: Below text on mobile (order-2), Right on desktop (order-2) */}
        <div className="order-2 relative text-center select-none py-4 sm:py-2 md:py-0">
          <div
            className="relative inline-block cursor-pointer group my-4 sm:my-2 md:my-0 scale-[1.35] sm:scale-[1.18] md:scale-100 origin-center transition-transform duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsTapped((prev) => !prev)}
            role="button"
            tabIndex={0}
            aria-label="Activer la mise en valeur du cuissard SPS"
          >
            {/* Background Radial Light Glow — identique au maillot et réactif au tap/survol */}
            <div
              className="absolute inset-0 pointer-events-none transition-all duration-700 rounded-full"
              style={{
                background: isActive
                  ? "radial-gradient(ellipse at center, hsl(330 85% 49% / 0.35) 0%, hsl(264 70% 38% / 0.20) 40%, transparent 68%)"
                  : "radial-gradient(ellipse at center, hsl(330 85% 49% / 0.15) 0%, transparent 65%)",
                transform: isActive ? "scale(1.2)" : "scale(1)",
              }}
            />

            {/* Cuissard Image with dynamic drop-shadow and scale */}
            <div
              className={`relative z-10 w-full max-w-[335px] sm:max-w-[420px] md:max-w-[510px] lg:max-w-[530px] mx-auto transition-transform duration-500 ease-out ${
                isActive ? "scale-105" : "hover:scale-105"
              }`}
              style={{
                filter: isActive
                  ? "drop-shadow(0 30px 60px hsl(330 85% 49% / 0.45))"
                  : "drop-shadow(0 30px 60px hsl(330 85% 49% / 0.25))",
              }}
            >
              <img
                alt="Cuissard SPS"
                className="w-full h-auto mx-auto"
                src={cuissardImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuissardSection;

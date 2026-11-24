import cuissardImg from "@/assets/cuissard-sps.png";

const CuissardSection = () => {
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
        <div className="order-2 relative text-center group py-10 sm:py-6 md:py-0">
          <div
            className="absolute inset-0 pointer-events-none scale-[1.8] sm:scale-[1.35] md:scale-100 transition-transform duration-300"
            style={{
              background: "radial-gradient(ellipse at center, hsl(330 85% 49% / 0.18) 0%, transparent 70%)"
            }}
          />

          <img
            alt="Cuissard SPS"
            className="w-full max-w-[335px] sm:max-w-[420px] md:max-w-[510px] lg:max-w-[530px] mx-auto relative z-10 drop-shadow-2xl transition-transform duration-500 scale-[1.85] sm:scale-[1.4] md:scale-100 group-hover:scale-[1.9] md:group-hover:scale-105"
            style={{ filter: "drop-shadow(0 30px 60px hsl(330 85% 49% / 0.3))" }}
            src={cuissardImg}
          />
        </div>
      </div>
    </section>
  );
};

export default CuissardSection;

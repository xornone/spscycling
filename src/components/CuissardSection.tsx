import cuissardImg from "@/assets/cuissard-sps.png";

const CuissardSection = () => {
  return (
    <section id="cuissard" className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
      <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* Text */}
        <div className="md:order-1 order-2">
          <span className="section-tag">Équipement</span>
          <h2 className="section-title">Le cuissard SPS</h2>
          <div className="divider-gradient" />
          <p className="text-foreground/65 leading-relaxed font-light mb-5">
            Conçu dans le même esprit que le maillot, notre cuissard club associe <strong className="font-semibold text-foreground/80">qualité et confort</strong> : matière technique, maintien musculaire et sanglage pensés pour les longues sorties.
          </p>
          <p className="text-foreground/65 leading-relaxed font-light">
            Un équipement haut de gamme, en cohérence totale avec l'identité SPS. Disponible en <strong className="font-semibold text-foreground/80">pré-commande pour les adhérents</strong> du club.
          </p>
        </div>

        {/* Cuissard image */}
        <div className="relative text-center group md:order-2 order-1">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, hsl(330 85% 49% / 0.15) 0%, transparent 70%)"
            }}
          />

          <img
            alt="Cuissard SPS"
            className="w-full max-w-[500px] mx-auto relative z-10 drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
            style={{ filter: "drop-shadow(0 30px 60px hsl(330 85% 49% / 0.3))" }}
            src={cuissardImg}
          />
        </div>
      </div>
    </section>
  );
};

export default CuissardSection;

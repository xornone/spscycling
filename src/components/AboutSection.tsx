import aboutImg from "@/assets/about-team.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-14 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 max-w-[1200px] mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 sm:gap-14 md:gap-20 items-center">
        <div>
          <span className="section-tag">Le Club</span>
          <h2 className="section-title">Rouler ensemble,<br className="hidden sm:inline" /> progresser ensemble</h2>
          <div className="divider-gradient" />
          <p className="text-foreground/65 leading-relaxed font-light mb-5 text-sm sm:text-base">
            SPS est né d’une envie commune : celle d’en finir avec les sorties en solo. Nous avons créé
            un club pour rassembler des passionnés de vélo de route autour d’une même envie : rouler
            ensemble, progresser et partager de bons moments. Chez SPS, la convivialité, la sécurité et
            le plaisir sont au cœur de chaque sortie.
          </p>
          <p className="text-foreground/65 leading-relaxed font-light mb-5 text-sm sm:text-base">
            Nos sorties sont organisées par groupes de niveau afin que chacun puisse trouver un rythme
            qui lui corresponde. L’objectif est de rouler de façon fluide, en peloton, tout en profitant
            de la sortie et de l’esprit du groupe.
          </p>
          <p className="text-foreground/65 leading-relaxed font-light text-sm sm:text-base">
            Si tu es déjà à l’aise sur les sorties route et que tu souhaites découvrir le plaisir de rouler
            en groupe dans une ambiance bienveillante, tu trouveras naturellement ta place chez SPS.
            Que ton objectif soit de progresser ou simplement de partager de belles sorties, tu seras
            entouré de passionnés prêts à t’accueillir.
          </p>
        </div>

        <div className="relative mt-2 md:mt-0">
          <img
            src={aboutImg}
            alt="Cyclistes SPS en sortie"
            className="w-full rounded object-cover saturate-110 shadow-2xl"
          />
          {/* Decorative border */}
          <div
            className="absolute -inset-2 sm:-inset-3 border-2 rounded opacity-40 pointer-events-none"
            style={{
              borderColor: "hsl(330 85% 49%)",
              clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0 100%)",
            }}
          />
          {/* Watermark */}
          <span className="absolute -bottom-3 sm:-bottom-5 -right-2 sm:-right-5 font-bebas text-[70px] sm:text-[100px] md:text-[120px] leading-none text-primary/15 pointer-events-none select-none">
            SPS
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

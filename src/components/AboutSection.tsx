import aboutImg from "@/assets/about-team.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
      <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
        <div>
          <span className="section-tag">Le Club</span>
          <h2 className="section-title">Rouler ensemble,<br />progresser ensemble</h2>
          <div className="divider-gradient" />
          <p className="text-foreground/65 leading-relaxed font-light mb-5">
            SPS – Solo Plus Solo est né d'une idée simple : réunir des passionnés de vélo de route à Montpellier
            qui veulent partager plus que des kilomètres. On est un club ouvert, bienveillant, où le plaisir
            de rouler ensemble passe avant tout.
          </p>
          <p className="text-foreground/65 leading-relaxed font-light">
            Que tu sois débutant ou rouleur expérimenté, tu trouveras ta place chez SPS. On propose des
            sorties adaptées à tous les niveaux, dans une ambiance conviviale et motivante.
          </p>
        </div>

        <div className="relative">
          <img
            src={aboutImg}
            alt="Cyclistes SPS en sortie"
            className="w-full rounded object-cover saturate-110"
          />
          {/* Decorative border */}
          <div
            className="absolute -inset-3 border-2 rounded opacity-40 pointer-events-none"
            style={{
              borderColor: "hsl(330 85% 49%)",
              clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0 100%)",
            }}
          />
          {/* Watermark */}
          <span className="absolute -bottom-5 -right-5 font-bebas text-[120px] leading-none text-primary/15 pointer-events-none select-none">
            SPS
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

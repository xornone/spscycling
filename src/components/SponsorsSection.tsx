import laTerrazzaLogo from "@/assets/sponsors/la-terrazza-badge.png";

const SponsorsSection = () => {
  return (
    <section
      id="partenaires"
      className="py-20 px-6 md:px-12 max-w-[1200px] mx-auto text-center"
    >
      <span className="section-tag">Partenaire</span>
      <h2 className="section-title">Partenaire officiel</h2>
      <div className="divider-gradient mx-auto" />

      <div className="flex justify-center mt-10">
        <a
          href="https://www.la-terrazza-teyran.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-105"
        >
          <div className="p-3 rounded-2xl glass-card border border-white/10 group-hover:border-sps-magenta/40 transition-colors shadow-lg">
            <img
              src={laTerrazzaLogo}
              alt="La Terrazza Pizz & Co"
              className="w-36 md:w-44 h-auto rounded-xl object-contain"
            />
          </div>
          <span className="font-bebas text-2xl md:text-3xl tracking-wide text-foreground group-hover:text-sps-pink transition-colors">
            La Terrazza · Pizz & Co
          </span>
        </a>
      </div>
    </section>
  );
};

export default SponsorsSection;

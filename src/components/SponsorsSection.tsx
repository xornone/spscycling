import { ExternalLink } from "lucide-react";
import laTerrazzaLogo from "@/assets/sponsors/la-terrazza-badge.png";

const SponsorsSection = () => {
  return (
    <section id="partenaires" className="py-20 px-6 md:px-12 max-w-[1200px] mx-auto">
      <div className="text-left mb-10">
        <span className="section-tag">Partenaire</span>
        <h2 className="section-title">Partenaire officiel</h2>
        <div className="divider-gradient" />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-12 p-8 rounded-xl glass-card max-w-3xl">
        <a
          href="https://www.la-terrazza-teyran.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 transition-transform duration-300 hover:scale-105"
        >
          <img
            src={laTerrazzaLogo}
            alt="La Terrazza Pizz & Co"
            className="w-28 sm:w-32 md:w-36 h-auto rounded-lg object-contain border border-white/10 shadow-lg"
          />
        </a>

        <div className="flex flex-col justify-center text-center sm:text-left">
          <span className="font-barlow-condensed text-xs uppercase tracking-[2px] text-sps-pink font-semibold mb-1">
            Restaurant & Pizzeria · Teyran
          </span>
          <h3 className="font-bebas text-2xl md:text-3xl text-white tracking-wide mb-2">
            La Terrazza · Pizz & Co
          </h3>
          <p className="text-foreground/65 text-sm font-light leading-relaxed mb-4 max-w-xl">
            Partenaire officiel du club SPS, La Terrazza vous accueille à Teyran aux portes du Pic Saint-Loup pour partager des moments gourmands et conviviaux après nos sorties.
          </p>
          <div>
            <a
              href="https://www.la-terrazza-teyran.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-barlow-condensed text-xs font-bold uppercase tracking-[2px] text-sps-pink hover:text-white transition-colors"
            >
              <span>Visiter le site</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;

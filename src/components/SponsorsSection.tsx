import { ExternalLink, MapPin, Pizza, Sparkles, HeartHandshake } from "lucide-react";
import laTerrazzaLogo from "@/assets/sponsors/la-terrazza-badge.png";

const SponsorsSection = () => {
  return (
    <section id="partenaires" className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
      {/* Section Header */}
      <div className="text-left mb-12">
        <span className="section-tag">Partenaire Officiel</span>
        <h2 className="section-title">
          Ils soutiennent le club
        </h2>
        <div className="divider-gradient" />
        <p className="text-foreground/65 leading-relaxed font-light max-w-2xl text-base md:text-lg">
          Chez SPS, le cyclisme est une aventure humaine ancrée dans notre territoire.
          Nous sommes fiers d’être soutenus par des acteurs locaux passionnés qui partagent
          nos valeurs de convivialité, d'esprit d'équipe et de partage.
        </p>
      </div>

      {/* Sponsor Spotlight Card */}
      <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden transition-all duration-500 hover:border-sps-magenta/40">
        {/* Subtle background glow */}
        <div
          className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full pointer-events-none opacity-30"
          style={{
            background: "radial-gradient(circle, hsl(330 85% 49% / 0.3) 0%, transparent 70%)",
          }}
        />

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          {/* Logo container */}
          <div className="md:col-span-4 flex justify-center">
            <a
              href="https://www.la-terrazza-teyran.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 p-3 bg-black/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 shadow-2xl">
                <img
                  src={laTerrazzaLogo}
                  alt="La Terrazza Pizz & Co - Sponsor Officiel SPS Cycling"
                  className="w-48 sm:w-56 md:w-64 h-auto rounded-xl object-contain drop-shadow-md"
                />
                <div className="absolute inset-0 rounded-2xl bg-sps-magenta/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </a>
          </div>

          {/* Details */}
          <div className="md:col-span-8 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="font-barlow-condensed text-xs font-bold uppercase tracking-[2px] px-3 py-1 rounded bg-sps-magenta/20 text-sps-pink border border-sps-magenta/30 inline-flex items-center gap-1.5">
                <Sparkles size={13} />
                Sponsor Officiel
              </span>
              <span className="font-barlow-condensed text-xs uppercase tracking-wider text-foreground/50 inline-flex items-center gap-1">
                <MapPin size={13} className="text-sps-pink" />
                Teyran (34820) · Aux portes du Pic Saint-Loup
              </span>
            </div>

            <h3 className="font-bebas text-3xl md:text-4xl tracking-wide mb-3 text-white">
              La Terrazza · Pizz & Co
            </h3>

            <p className="text-foreground/70 leading-relaxed font-light mb-5">
              Située à Teyran, sur l'une des routes incontournables de nos sorties d'entraînement
              vers le Pic Saint-Loup et l'arrière-pays montpelliérain, <strong className="font-medium text-foreground">La Terrazza</strong> régale
              les passionnés avec ses pizzas artisanales d'exception : pâte pétrie chaque jour,
              mozzarella fior di latte, jambon de Parme affiné et ingrédients frais de qualité.
            </p>

            <p className="text-foreground/60 text-sm leading-relaxed font-light mb-6">
              Une adresse conviviale et chaleureuse qui partage la même passion du travail bien fait
              et du plaisir partagé. Merci à eux pour leur confiance et leur soutien au peloton SPS !
            </p>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="font-barlow-condensed text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-foreground/75 inline-flex items-center gap-1.5">
                <Pizza size={13} className="text-sps-pink" />
                Pizzas artisanales d'exception
              </span>
              <span className="font-barlow-condensed text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-foreground/75">
                Sur place & À emporter
              </span>
              <span className="font-barlow-condensed text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-foreground/75">
                Terrasse estivale
              </span>
            </div>

            {/* CTA */}
            <div>
              <a
                href="https://www.la-terrazza-teyran.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sps inline-flex items-center gap-2.5 !py-3 !px-7"
              >
                <span>Visiter le site de La Terrazza</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Become a Partner Callout */}
      <div className="mt-12 p-6 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-sps-magenta/15 text-sps-pink shrink-0 hidden sm:block">
            <HeartHandshake size={22} />
          </div>
          <div>
            <h4 className="font-bebas text-xl text-white tracking-wide">
              Vous souhaitez devenir partenaire du club SPS ?
            </h4>
            <p className="text-foreground/50 text-xs font-light">
              Associez votre entreprise à un club cycliste dynamique de plus de 100 membres actifs à Montpellier.
            </p>
          </div>
        </div>

        <a
          href="https://www.instagram.com/spscycling/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-barlow-condensed text-xs font-bold uppercase tracking-[2px] px-5 py-2.5 rounded border border-white/15 text-foreground/80 hover:text-white hover:border-sps-pink transition-colors shrink-0"
        >
          Nous contacter
        </a>
      </div>
    </section>
  );
};

export default SponsorsSection;

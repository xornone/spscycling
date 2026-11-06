import { Marquee } from "./ui/Marquee";
import { Sparkles } from "lucide-react";

const itemsRow1 = [
  "SOLO PLUS SOLO",
  "MONTPELLIER",
  "GOBIK CUSTOM WEAR",
  "ROULEZ ENSEMBLE",
  "SÉCURITÉ & CONVIVIALITÉ",
  "PIC SAINT-LOUP",
  "AUCUN RIDER LAISSÉ DERRIÈRE",
];

const itemsRow2 = [
  "100+ CYCLISTES ACTIFS",
  "PELOTON STRUCTURÉ",
  "GROUPES DE NIVEAU",
  "SORTIES ROUTE DU DIMANCHE",
  "PROGRESSER ENSEMBLE",
  "PASSION & PARTAGE",
];

export function MarqueeBanner() {
  return (
    <section className="relative py-8 overflow-hidden bg-black/50 border-y border-white/10 backdrop-blur-md">
      {/* Top ambient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sps-magenta to-transparent opacity-60" />

      {/* Row 1 */}
      <div className="flex">
        <Marquee speed={32} pauseOnHover={true} className="py-2">
          {itemsRow1.map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-6 font-bebas text-2xl md:text-3xl tracking-widest text-white/40 hover:text-white transition-colors duration-200 cursor-default select-none"
            >
              <span>{text}</span>
              <Sparkles className="w-3.5 h-3.5 text-sps-pink/70" />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Row 2 (Reversed direction) */}
      <div className="flex mt-1">
        <Marquee speed={36} reverse={true} pauseOnHover={true} className="py-2">
          {itemsRow2.map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-6 font-bebas text-xl md:text-2xl tracking-widest text-sps-pink/50 hover:text-sps-pink transition-colors duration-200 cursor-default select-none"
            >
              <span>{text}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400/60" />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Bottom ambient line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60" />
    </section>
  );
}

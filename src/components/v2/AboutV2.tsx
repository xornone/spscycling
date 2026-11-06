import { useState } from "react";
import { motion } from "framer-motion";
import { HeartHandshake, Shield, Gauge, CheckCircle2, Users2, Bike } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import { TiltCard } from "./ui/TiltCard";
import { SpotlightCard } from "./ui/SpotlightCard";

const pillars = [
  {
    icon: HeartHandshake,
    title: "En finir avec le solo",
    description: "Rassembler les passionnés de route autour de valeurs fortes : partage, plaisir et bienveillance.",
    tag: "Esprit d'équipe",
  },
  {
    icon: Shield,
    title: "Sécurité & Fluidité",
    description: "Apprendre et maîtriser le roulage en peloton, les relais coordonnés et le respect mutuel.",
    tag: "Sérénité sur route",
  },
  {
    icon: Gauge,
    title: "Groupes de niveau",
    description: "Trouver son allure idéale pour progresser à chaque kilomètre sans jamais se cramer.",
    tag: "Allure adaptée",
  },
];

const paceGroups = [
  {
    id: "g1",
    name: "Groupe 1 · Sportif",
    pace: "31 - 34+ km/h",
    distance: "90 - 120 km",
    description: "Rythme soutenu, travail de relais dynamique, sorties intenses dans l'arrière-pays héraultais.",
    accent: "from-pink-500 to-rose-600",
  },
  {
    id: "g2",
    name: "Groupe 2 · Rythmé",
    pace: "28 - 30 km/h",
    distance: "80 - 100 km",
    description: "L'équilibre idéal entre vitesse, relances propres et endurance sur parcours variés et vallonnés.",
    accent: "from-sps-magenta to-purple-600",
  },
  {
    id: "g3",
    name: "Groupe 3 · Endurance",
    pace: "25 - 27 km/h",
    distance: "70 - 90 km",
    description: "Roulage fluide, régulier et convivial. Idéal pour s'initier au peloton et accumuler des kilomètres.",
    accent: "from-purple-500 to-indigo-600",
  },
];

export function AboutV2() {
  const [activeGroup, setActiveGroup] = useState(1);

  return (
    <section id="about" className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Background radial accent */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Grid: Story & Visual */}
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left column: Text */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Le Club</span>
            <h2 className="section-title text-white">
              Rouler ensemble,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sps-pink to-purple-400">
                progresser ensemble
              </span>
            </h2>
            <div className="divider-gradient" />

            <div className="space-y-5 text-white/75 font-light leading-relaxed text-base md:text-lg">
              <p>
                SPS est né d’une envie commune : celle d’en finir avec les sorties en solo. Nous avons créé
                un club pour rassembler des passionnés de vélo de route autour d’une même envie : rouler
                ensemble, progresser et partager de bons moments. Chez SPS, la convivialité, la sécurité et
                le plaisir sont au cœur de chaque sortie.
              </p>
              <p>
                Nos sorties sont organisées par groupes de niveau afin que chacun puisse trouver un rythme
                qui lui corresponde. L’objectif est de rouler de façon fluide, en peloton, tout en profitant
                de la sortie et de l’esprit du groupe.
              </p>
              <p>
                Si tu es déjà à l’aise sur les sorties route et que tu souhaites découvrir le plaisir de rouler
                en groupe dans une ambiance bienveillante, tu trouveras naturellement ta place chez SPS.
                Que ton objectif soit de progresser ou simplement de partager de belles sorties, tu seras
                entouré de passionnés prêts à t’accueillir.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right column: 3D Tilt Image */}
        <div className="lg:col-span-5 relative">
          <TiltCard maxTilt={8} glare={true} className="shadow-2xl">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/40 group">
              <img
                src={aboutImg}
                alt="Cyclistes SPS en sortie à Montpellier"
                className="w-full h-auto object-cover saturate-110 contrast-105 transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

              {/* Floating Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sps-magenta/20 border border-sps-magenta/40">
                    <Users2 className="w-5 h-5 text-sps-pink" />
                  </div>
                  <div>
                    <div className="font-barlow-condensed font-bold uppercase tracking-wider text-white text-sm">
                      La Team SPS Montpellier
                    </div>
                    <div className="text-white/60 text-xs">
                      100+ adhérents passionnés
                    </div>
                  </div>
                </div>
                <span className="font-bebas text-sps-pink text-lg tracking-wider">#SOLOPLUSSOLO</span>
              </div>
            </div>
          </TiltCard>

          {/* Decorative Polygon Border */}
          <div
            className="absolute -inset-4 border-2 rounded-2xl opacity-30 pointer-events-none -z-10"
            style={{
              borderColor: "hsl(330 85% 49%)",
              clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0 100%)",
            }}
          />

          {/* Watermark */}
          <span className="absolute -bottom-8 -right-8 font-bebas text-[140px] leading-none text-white/5 pointer-events-none select-none -z-20">
            SPS
          </span>
        </div>
      </div>

      {/* 3 Core Pillars Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-20">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <SpotlightCard
              key={idx}
              className="p-8 hover:border-sps-pink/40 transition-colors"
              spotlightColor="rgba(255, 46, 147, 0.2)"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-sps-magenta/30 to-purple-600/20 border border-sps-magenta/40 text-sps-pink">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-barlow-condensed text-[11px] uppercase tracking-[2px] text-white/40 border border-white/10 px-2.5 py-1 rounded-full">
                  {pillar.tag}
                </span>
              </div>
              <h3 className="font-bebas text-2xl text-white tracking-wide mb-2">
                {pillar.title}
              </h3>
              <p className="text-white/65 text-sm font-light leading-relaxed">
                {pillar.description}
              </p>
            </SpotlightCard>
          );
        })}
      </div>

      {/* Interactive Peloton Pace Selector */}
      <div className="mt-20 p-8 md:p-10 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="section-tag !mb-1">Organisation des sorties</span>
            <h3 className="font-bebas text-3xl md:text-4xl text-white tracking-wide">
              Choisis ton groupe de niveau
            </h3>
            <p className="text-white/60 text-sm font-light mt-1">
              Des départs communs pour rouler ensemble, des groupes adaptés pour que chacun prenne du plaisir.
            </p>
          </div>

          {/* Group Buttons */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white/5 border border-white/10 self-start md:self-auto">
            {paceGroups.map((group, index) => (
              <button
                key={group.id}
                onClick={() => setActiveGroup(index)}
                className={`px-4 py-2 rounded-lg font-barlow-condensed text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeGroup === index
                    ? "bg-gradient-to-r from-sps-magenta to-sps-purple text-white shadow-lg font-bold"
                    : "text-white/60 hover:text-white"
                }`}
              >
                G{index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Group Card */}
        <motion.div
          key={activeGroup}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid md:grid-cols-3 gap-6 p-6 rounded-xl bg-white/[0.03] border border-white/10"
        >
          <div className="md:col-span-1">
            <div className="text-xs font-barlow-condensed uppercase tracking-[2px] text-sps-pink font-semibold">
              Profil du peloton
            </div>
            <div className="font-bebas text-3xl text-white mt-1">
              {paceGroups[activeGroup].name}
            </div>
            <p className="text-white/60 text-sm font-light mt-2 leading-relaxed">
              {paceGroups[activeGroup].description}
            </p>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-lg bg-black/40 border border-white/5">
            <div className="p-3 rounded-lg bg-white/5 text-purple-400">
              <Gauge className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] font-barlow-condensed uppercase tracking-wider text-white/50">
                Allure moyenne cible
              </div>
              <div className="font-bebas text-2xl text-white">
                {paceGroups[activeGroup].pace}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-lg bg-black/40 border border-white/5">
            <div className="p-3 rounded-lg bg-white/5 text-sps-pink">
              <Bike className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] font-barlow-condensed uppercase tracking-wider text-white/50">
                Distance typique
              </div>
              <div className="font-bebas text-2xl text-white">
                {paceGroups[activeGroup].distance}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

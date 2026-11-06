import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Wind, Mountain, Coffee, ArrowRight } from "lucide-react";
import heroCycling from "@/assets/hero-cycling.jpg";
import aboutCycling from "@/assets/about-cycling.jpg";
import sortie1 from "@/assets/rides/sortie-1.png";
import sortie2 from "@/assets/rides/sortie-2.png";
import { SpotlightCard } from "./ui/SpotlightCard";

const steps = [
  {
    num: "01",
    icon: Compass,
    title: "Le Rassemblement",
    subtitle: "Montpellier · Départ matinal",
    description:
      "Café partagé, briefing sécurité, dispatching des 3 groupes de niveau. Tout le monde part ensemble dans une énergie positive.",
    image: heroCycling,
  },
  {
    num: "02",
    icon: Wind,
    title: "Le Peloton en Ligne",
    subtitle: "Garrigues & Vallons de l'Hérault",
    description:
      "Relais à 2 de front, circulation fluide, communication par gestes. Le plaisir pur d'avancer vite avec l'effort partagé.",
    image: aboutCycling,
  },
  {
    num: "03",
    icon: Mountain,
    title: "Les Ascensions Phares",
    subtitle: "Pic Saint-Loup & Terres Sauvages",
    description:
      "Chacun grimpe à son rythme, regroupement au sommet dans la bonne humeur avant la descente en toute sécurité.",
    image: sortie1,
  },
  {
    num: "04",
    icon: Coffee,
    title: "L'Après-Course & Le Partage",
    subtitle: "Terrasse & Échange Strava",
    description:
      "Le ride ne s'arrête pas au coup de sifflet : débriefing autour d'une boisson fraîche, synchronisation des données et rires garantis.",
    image: sortie2,
  },
];

export function PelotonStoryV2() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="experience" className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="section-tag">Immersion</span>
        <h2 className="section-title text-white">
          L'Expérience d'une Sortie SPS
        </h2>
        <div className="divider-gradient mx-auto" />
        <p className="text-white/70 font-light text-base md:text-lg">
          De l’aube sur Montpellier aux crêtes du Pic Saint-Loup : découvrez ce qui rend chaque sortie collective chez SPS inoubliable.
        </p>
      </div>

      {/* Interactive Story Showcase */}
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Interactive Step Selector */}
        <div className="lg:col-span-5 space-y-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <SpotlightCard
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 cursor-pointer transition-all duration-300 border ${
                  isActive
                    ? "border-sps-magenta bg-white/[0.07] shadow-[0_0_30px_rgba(255,46,147,0.25)]"
                    : "border-white/10 hover:border-white/20 bg-black/30"
                }`}
                spotlightColor="rgba(255, 46, 147, 0.15)"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl transition-colors duration-300 ${
                      isActive
                        ? "bg-gradient-to-br from-sps-magenta to-sps-purple text-white shadow-md"
                        : "bg-white/5 text-white/50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-barlow-condensed text-xs uppercase tracking-widest text-sps-pink font-semibold">
                        Étape {step.num}
                      </span>
                      <span className="text-[11px] font-barlow text-white/40">
                        {step.subtitle}
                      </span>
                    </div>

                    <h3 className="font-bebas text-2xl text-white tracking-wide mt-1">
                      {step.title}
                    </h3>

                    <p className="text-white/60 text-xs sm:text-sm font-light mt-1.5 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Right Column: Visual Stage */}
        <div className="lg:col-span-7 relative">
          <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-black/60 aspect-[16/10] shadow-2xl group">
            {/* Active Image with smooth crossfade */}
            <motion.img
              key={activeStep}
              src={steps[activeStep].image}
              alt={steps[activeStep].title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05]"
            />

            {/* Dark vignette gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

            {/* Story Card overlay at bottom of the picture */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-sps-pink font-barlow-condensed text-xs uppercase tracking-[3px] font-semibold">
                  {steps[activeStep].subtitle}
                </span>
                <h4 className="font-bebas text-2xl md:text-3xl text-white tracking-wide mt-0.5">
                  {steps[activeStep].title}
                </h4>
              </div>

              <div className="flex items-center gap-2">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeStep === i
                        ? "w-8 bg-sps-pink"
                        : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Étape ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

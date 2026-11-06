import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Layers, ShieldCheck, Zap, Award, CheckCircle } from "lucide-react";
import jerseyImg from "@/assets/jersey-sps.png";
import cuissardImg from "@/assets/cuissard-sps.png";
import { TiltCard } from "./ui/TiltCard";

export function GearShowcaseV2() {
  const [activeTab, setActiveTab] = useState<"jersey" | "cuissard">("jersey");

  return (
    <section id="equipement" className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-sps-magenta/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="section-tag">Équipement Officiel</span>
        <h2 className="section-title text-white">
          L'Armure du Peloton SPS
        </h2>
        <div className="divider-gradient mx-auto" />
        <p className="text-white/70 font-light text-base md:text-lg">
          Un vestiaire haute performance conçu sur mesure avec le fabricant espagnol référence <strong className="text-white font-medium">Gobik</strong> pour allier vitesse, confort et distinction sur chaque sortie.
        </p>

        {/* Tab switch buttons */}
        <div className="inline-flex p-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-xl mt-8">
          <button
            onClick={() => setActiveTab("jersey")}
            className={`relative px-6 py-2.5 rounded-full font-barlow-condensed font-bold uppercase tracking-[2px] text-xs transition-all duration-300 cursor-pointer ${
              activeTab === "jersey"
                ? "text-white shadow-[0_0_20px_rgba(255,46,147,0.4)]"
                : "text-white/60 hover:text-white"
            }`}
          >
            {activeTab === "jersey" && (
              <motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-sps-magenta to-sps-purple -z-10"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            01. Le Maillot Gobik
          </button>

          <button
            onClick={() => setActiveTab("cuissard")}
            className={`relative px-6 py-2.5 rounded-full font-barlow-condensed font-bold uppercase tracking-[2px] text-xs transition-all duration-300 cursor-pointer ${
              activeTab === "cuissard"
                ? "text-white shadow-[0_0_20px_rgba(255,46,147,0.4)]"
                : "text-white/60 hover:text-white"
            }`}
          >
            {activeTab === "cuissard" && (
              <motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-sps-magenta to-sps-purple -z-10"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            02. Le Cuissard SPS
          </button>
        </div>
      </div>

      {/* Interactive Showcase Card */}
      <AnimatePresence mode="wait">
        {activeTab === "jersey" ? (
          <motion.div
            key="jersey"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-12 gap-12 items-center bg-black/40 border border-white/10 rounded-3xl p-8 md:p-14 backdrop-blur-2xl relative overflow-hidden"
          >
            {/* Ambient inner glow */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-sps-pink/20 rounded-full blur-[90px] pointer-events-none" />

            {/* Left Column: 3D Product Interactive Stage */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <TiltCard maxTilt={12} glare={true} className="w-full flex items-center justify-center">
                <div className="relative py-6 flex items-center justify-center group">
                  {/* Radial spotlight behind product */}
                  <div className="absolute inset-0 bg-radial-gradient from-sps-pink/25 via-sps-purple/15 to-transparent rounded-full blur-2xl pointer-events-none" />

                  <img
                    src={jerseyImg}
                    alt="Maillot SPS Gobik officiel"
                    className="max-h-[460px] w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_25px_45px_rgba(255,46,147,0.35)]"
                  />

                  {/* Interactive Hotspot 1 */}
                  <div className="hidden sm:flex absolute top-12 left-6 items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-barlow-condensed uppercase tracking-wider text-white shadow-xl">
                    <span className="w-2 h-2 rounded-full bg-sps-pink animate-ping" />
                    <span>Gobik Custom</span>
                  </div>

                  {/* Interactive Hotspot 2 */}
                  <div className="hidden sm:flex absolute bottom-16 right-6 items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-barlow-condensed uppercase tracking-wider text-white shadow-xl">
                    <Zap className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Aérodynamisme Race</span>
                  </div>
                </div>
              </TiltCard>
            </div>

            {/* Right Column: Original Info & Features */}
            <div className="lg:col-span-6">
              <span className="section-tag">Équipement</span>
              <h3 className="section-title text-white text-4xl md:text-5xl mb-4">
                Le maillot SPS
              </h3>
              <div className="divider-gradient" />

              <div className="space-y-4 text-white/75 font-light text-base md:text-lg leading-relaxed mb-8">
                <p>
                  Conçu en partenariat avec <strong className="font-semibold text-white">Gobik</strong>, notre maillot club incarne l'identité SPS : violet profond, accents magenta, et le logo SPS en signature.
                </p>
                <p>
                  Un design unique qui te reconnaît sur la route et renforce l'esprit d'équipe à chaque sortie.
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3">
                  <Award className="w-5 h-5 text-sps-pink shrink-0 mt-0.5" />
                  <div>
                    <div className="font-barlow-condensed font-bold uppercase tracking-wider text-white text-sm">
                      Partenaire Officiel
                    </div>
                    <div className="text-white/60 text-xs mt-0.5">
                      Confection haut de gamme Gobik
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3">
                  <Layers className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-barlow-condensed font-bold uppercase tracking-wider text-white text-sm">
                      Textiles Respirants
                    </div>
                    <div className="text-white/60 text-xs mt-0.5">
                      Évacuation optimale de la chaleur
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="cuissard"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-12 gap-12 items-center bg-black/40 border border-white/10 rounded-3xl p-8 md:p-14 backdrop-blur-2xl relative overflow-hidden"
          >
            {/* Ambient inner glow */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-purple-600/20 rounded-full blur-[90px] pointer-events-none" />

            {/* Left Column: Original Info & Features */}
            <div className="lg:col-span-6 lg:order-1 order-2">
              <span className="section-tag">Équipement</span>
              <h3 className="section-title text-white text-4xl md:text-5xl mb-4">
                Le cuissard SPS
              </h3>
              <div className="divider-gradient" />

              <div className="space-y-4 text-white/75 font-light text-base md:text-lg leading-relaxed mb-8">
                <p>
                  Conçu dans le même esprit que le maillot, notre cuissard club associe <strong className="font-semibold text-white">qualité et confort</strong> : matière technique, maintien musculaire et sanglage pensés pour les longues sorties.
                </p>
                <p>
                  Un équipement haut de gamme, en cohérence totale avec l'identité SPS. Disponible en <strong className="font-semibold text-white">pré-commande pour les adhérents</strong> du club.
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-sps-pink shrink-0 mt-0.5" />
                  <div>
                    <div className="font-barlow-condensed font-bold uppercase tracking-wider text-white text-sm">
                      Maintien Musculaire
                    </div>
                    <div className="text-white/60 text-xs mt-0.5">
                      Compression active sans compression excessive
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-barlow-condensed font-bold uppercase tracking-wider text-white text-sm">
                      Pré-commande Club
                    </div>
                    <div className="text-white/60 text-xs mt-0.5">
                      Tarif privilégié réservé aux adhérents
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Product Interactive Stage */}
            <div className="lg:col-span-6 lg:order-2 order-1 relative flex items-center justify-center">
              <TiltCard maxTilt={12} glare={true} className="w-full flex items-center justify-center">
                <div className="relative py-6 flex items-center justify-center group">
                  {/* Radial spotlight behind product */}
                  <div className="absolute inset-0 bg-radial-gradient from-purple-500/25 via-sps-magenta/15 to-transparent rounded-full blur-2xl pointer-events-none" />

                  <img
                    src={cuissardImg}
                    alt="Cuissard SPS club"
                    className="max-h-[460px] w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_25px_45px_rgba(112,39,207,0.35)]"
                  />

                  {/* Hotspots */}
                  <div className="hidden sm:flex absolute top-12 right-6 items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-barlow-condensed uppercase tracking-wider text-white shadow-xl">
                    <Sparkles className="w-3.5 h-3.5 text-sps-pink" />
                    <span>Confort Longue Distance</span>
                  </div>

                  <div className="hidden sm:flex absolute bottom-16 left-6 items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-barlow-condensed uppercase tracking-wider text-white shadow-xl">
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                    <span>Sanglage Ergonomique</span>
                  </div>
                </div>
              </TiltCard>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

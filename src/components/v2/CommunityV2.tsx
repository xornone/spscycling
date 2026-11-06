import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Activity, Flame, Users, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { SpotlightCard } from "./ui/SpotlightCard";

export function CommunityV2() {
  const [copied, setCopied] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#ff2e93", "#7027cf", "#ffffff", "#f43f5e"],
    });
  };

  return (
    <section id="communaute" className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sps-magenta/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="section-tag">Communauté</span>
        <h2 className="section-title text-white">
          Rejoins la Meute SPS
        </h2>
        <div className="divider-gradient mx-auto" />
        <p className="text-white/70 font-light text-base md:text-lg">
          Suis nos sorties en direct, rejoins le club sur Strava et vibre avec nous sur Instagram.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid lg:grid-cols-12 gap-6 items-stretch">
        {/* Card 1: Instagram (5 cols) */}
        <div className="lg:col-span-5">
          <SpotlightCard
            className="h-full p-8 md:p-10 flex flex-col justify-between group hover:border-pink-500/50 transition-all duration-300"
            spotlightColor="rgba(255, 46, 147, 0.25)"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 rounded-2xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white shadow-lg">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <span className="font-barlow-condensed text-xs uppercase tracking-[2px] text-white/50 border border-white/10 px-3 py-1 rounded-full">
                  @spscycling
                </span>
              </div>

              <div className="font-bebas text-4xl text-white tracking-wide mb-3">
                Instagram Officiel
              </div>
              <p className="text-white/65 text-sm md:text-base font-light leading-relaxed mb-6">
                Photos de nos sorties, stories du week-end, annonces des rassemblements et coulisses du club SPS Montpellier.
              </p>
            </div>

            <a
              href="https://www.instagram.com/spscycling/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={triggerConfetti}
              className="inline-flex items-center justify-between w-full px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-barlow-condensed font-bold uppercase tracking-[2px] text-sm transition-all duration-300 group-hover:border-sps-pink/40"
            >
              <span>Suivre @spscycling</span>
              <ArrowUpRight className="w-5 h-5 text-sps-pink transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </SpotlightCard>
        </div>

        {/* Card 2: Strava (7 cols) */}
        <div className="lg:col-span-7">
          <SpotlightCard
            className="h-full p-8 md:p-10 flex flex-col justify-between group hover:border-[#fc4c02]/50 transition-all duration-300"
            spotlightColor="rgba(252, 76, 2, 0.2)"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 rounded-2xl bg-[#fc4c02] text-white shadow-lg">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
                  </svg>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-barlow-condensed uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Club Actif</span>
                </div>
              </div>

              <div className="font-bebas text-4xl text-white tracking-wide mb-3">
                Club Strava SPS
              </div>
              <p className="text-white/65 text-sm md:text-base font-light leading-relaxed mb-6">
                Compare tes segments, consulte les traces GPX de nos sorties autour du Pic Saint-Loup et mesure ta progression au sein du peloton.
              </p>

              {/* Strava Official Embedded Widget */}
              <div className="my-6 p-4 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center overflow-hidden">
                <iframe
                  allowTransparency={true}
                  frameBorder="0"
                  height="160"
                  scrolling="no"
                  src="https://www.strava.com/clubs/1622153/latest-rides/4a6a40ce793c0ee74b9423143f32d4b949d0339c?show_rides=false"
                  width="300"
                  title="Statistiques Strava du club SPS"
                  className="rounded-lg shadow-inner max-w-full"
                />
              </div>
            </div>

            <a
              href="https://www.strava.com/clubs/spscycling"
              target="_blank"
              rel="noopener noreferrer"
              onClick={triggerConfetti}
              className="inline-flex items-center justify-between w-full px-6 py-4 rounded-xl bg-[#fc4c02]/10 hover:bg-[#fc4c02]/20 border border-[#fc4c02]/30 text-white font-barlow-condensed font-bold uppercase tracking-[2px] text-sm transition-all duration-300"
            >
              <span>Rejoindre le club Strava</span>
              <ArrowUpRight className="w-5 h-5 text-[#fc4c02] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}

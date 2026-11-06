import { useEffect } from "react";
import { NavV2 } from "@/components/v2/NavV2";
import { AmbientGlow } from "@/components/v2/ui/AmbientGlow";
import { HeroV2 } from "@/components/v2/HeroV2";
import { MarqueeBanner } from "@/components/v2/MarqueeBanner";
import { AboutV2 } from "@/components/v2/AboutV2";
import { GearShowcaseV2 } from "@/components/v2/GearShowcaseV2";
import { PelotonStoryV2 } from "@/components/v2/PelotonStoryV2";
import { CommunityV2 } from "@/components/v2/CommunityV2";
import { FooterV2 } from "@/components/v2/FooterV2";
import { VersionSwitcher } from "@/components/v2/VersionSwitcher";
import CookieBanner from "@/components/CookieBanner";

export default function IndexV2() {
  useEffect(() => {
    // Scroll to top upon mounting V2
    window.scrollTo(0, 0);
    // Page Title
    document.title = "SPS Cycling · V2 Immersive | Club Cycliste Montpellier";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080410] text-white selection:bg-sps-magenta selection:text-white overflow-x-hidden font-barlow">
      {/* Background Animated Atmosphere */}
      <AmbientGlow />

      {/* Luxury Glassmorphic Navigation */}
      <NavV2 />

      {/* Main Sections */}
      <main className="relative z-10">
        {/* 01. Hero with Parallax & Stats */}
        <HeroV2 />

        {/* Kinetic Infinite Cycling Marquee */}
        <MarqueeBanner />

        {/* 02. Le Club & Manifeste (100% authentic original texts + 3D cards & pace groups) */}
        <AboutV2 />

        {/* 03. L'Équipement: Le Maillot Gobik & Le Cuissard Technique (3D Tilt stage & specs) */}
        <GearShowcaseV2 />

        {/* 04. Immersion: L'Expérience d'une Sortie en Peloton dans l'Hérault */}
        <PelotonStoryV2 />

        {/* 05. La Communauté: Bento Instagram & Strava */}
        <CommunityV2 />
      </main>

      {/* Footer */}
      <FooterV2 />

      {/* Floating V1 / V2 Switcher */}
      <VersionSwitcher currentVersion="v2" />

      {/* Cookie banner */}
      <CookieBanner />
    </div>
  );
}

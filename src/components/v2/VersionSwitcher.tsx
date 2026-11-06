import { Sparkles, ArrowRight, Layers } from "lucide-react";
import { Link } from "react-router-dom";

export function VersionSwitcher({ currentVersion }: { currentVersion: "v1" | "v2" }) {
  if (currentVersion === "v2") {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          to="/"
          className="group flex items-center gap-3 px-4 py-2.5 rounded-full bg-black/85 backdrop-blur-xl border border-white/20 text-white shadow-2xl hover:border-sps-pink/60 transition-all duration-300 hover:scale-105"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <div className="flex flex-col text-left">
            <span className="font-barlow-condensed font-bold uppercase tracking-wider text-[11px] text-sps-pink leading-tight">
              Mode V2 Actif
            </span>
            <span className="font-barlow text-[10px] text-white/60 leading-tight">
              Voir la V1 classique →
            </span>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        to="/v2"
        className="group flex items-center gap-3 px-5 py-3 rounded-full bg-black/90 backdrop-blur-xl border border-sps-magenta/50 text-white shadow-[0_10px_35px_rgba(255,46,147,0.35)] hover:border-sps-pink transition-all duration-300 hover:scale-105"
      >
        <div className="p-1.5 rounded-full bg-gradient-to-r from-sps-magenta to-sps-purple">
          <Sparkles className="w-3.5 h-3.5 text-white" />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-barlow-condensed font-bold uppercase tracking-wider text-xs text-white leading-tight flex items-center gap-1.5">
            Découvrir la V2 Immersive
            <ArrowRight className="w-3.5 h-3.5 text-sps-pink transition-transform group-hover:translate-x-1" />
          </span>
          <span className="font-barlow text-[10px] text-white/50 leading-tight">
            Expérience 3D, Parallaxe & Motion
          </span>
        </div>
      </Link>
    </div>
  );
}

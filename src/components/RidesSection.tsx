import { useState } from "react";
import { TrendingUp, Users, MapPin, ChevronDown } from "lucide-react";

const rides = [
  {
    day: "MARDI",
    name: "Ride du mardi",
    details: [
      { icon: <TrendingUp size={16} />, text: "Environ 50km / 2h" },
      { icon: <Users size={16} />, text: "Allures/Niveau :" },
      { icon: null, text: "Groupe vert 🟢 24-26 km/h" },
      { icon: null, text: "Groupe rouge 🔴 26-28 km/h" },
      { icon: <MapPin size={16} />, text: "Départ : variable selon la sortie" },
    ],
    pill: "Social/intermédiaire",
  },
  {
    day: "JEUDI",
    name: "Social ride du jeudi",
    details: [
      { icon: <TrendingUp size={16} />, text: "Environ 30km" },
      { icon: <Users size={16} />, text: "Allures/Niveau :" },
      { icon: null, text: "Groupe vert 🟢 24-26 km/h" },
      { icon: <MapPin size={16} />, text: "Départ depuis le Marché du Lez" },
    ],
    pill: "Social",
  },
  {
    day: "DIMANCHE",
    name: "Sortie longue",
    details: [
      { icon: <TrendingUp size={16} />, text: "Environ 65/85km" },
      { icon: <Users size={16} />, text: "Allures/Niveau :" },
      { icon: null, text: "Groupe vert 🟢 24-26 km/h" },
      { icon: null, text: "Groupe rouge 🔴 26-28 km/h" },
      { icon: null, text: "Groupe violet 🟣 28+ km/h" },
      { icon: <MapPin size={16} />, text: "Départ : variable selon la sortie" },
    ],
    pill: "Endurance",
  },
];

const niveaux = [
  { emoji: "🟢", nom: "Groupe Vert", desc: "24/26 km/h de moyenne (environ 29/30 km/h sur le plat)" },
  { emoji: "🔴", nom: "Groupe Rouge", desc: "26/28 km/h de moyenne (environ 33/34 km/h sur le plat)" },
  { emoji: "🟣", nom: "Groupe Violet", desc: "28+ km/h de moyenne (environ 37/38 km/h sur le plat)" },
];

const RidesSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <section
      id="sorties"
      className="py-24 w-full"
      style={{
        background: "linear-gradient(180deg, hsl(264 80% 5%) 0%, hsl(264 80% 15%) 50%, hsl(264 80% 5%) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <span className="section-tag">Programme</span>
        <h2 className="section-title">Nos sorties</h2>
        <div className="divider-gradient" />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {rides.map((ride) => (
            <div
              key={ride.day}
              className="glass-card clip-skew-lg p-10 md:p-12 relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: "linear-gradient(90deg, hsl(264 70% 38%), hsl(330 85% 49%))" }}
              />
              <div className="font-bebas text-6xl leading-none text-gradient-magenta mb-2">
                {ride.day}
              </div>
              <div className="font-barlow-condensed text-xl font-bold tracking-[2px] uppercase text-foreground mb-5">
                {ride.name}
              </div>
              <div className="flex flex-col gap-2.5">
                {ride.details.map((d, i) => (
                  <div key={i} className="flex items-center gap-3 text-foreground/60 text-[15px] font-light" style={!d.icon ? { paddingLeft: "28px" } : undefined}>
                    {d.icon && <span className="text-sps-magenta">{d.icon}</span>}
                    {d.text}
                  </div>
                ))}
              </div>
              <span
                className="inline-block mt-5 px-3.5 py-1 font-barlow-condensed text-[11px] font-semibold uppercase tracking-[2px] text-sps-pink"
                style={{
                  background: "hsl(330 85% 49% / 0.15)",
                  border: "1px solid hsl(330 85% 49% / 0.3)",
                }}
              >
                {ride.pill}
              </span>
            </div>
          ))}
        </div>



        <div className="text-center mt-12">
          <a
            href="https://www.strava.com/clubs/spscycling"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sps"
          >
            Retrouvez nos sorties sur Strava
          </a>
        </div>

        {/* Liste déroulante : niveau des sorties */}
        <div className="max-w-2xl mx-auto mt-10">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="w-full flex items-center justify-between gap-3 px-6 py-4 glass-card clip-skew-lg text-left"
            aria-expanded={open}
          >
            <span className="font-barlow-condensed text-lg font-bold tracking-[1px] uppercase text-foreground">
              Le niveau des sorties :
            </span>
            <ChevronDown
              size={22}
              className={`text-sps-magenta transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-out"
            style={{ maxHeight: open ? 400 : 0, opacity: open ? 1 : 0 }}
          >
            <div className="glass-card clip-skew-lg px-8 py-6 mt-3 flex flex-col gap-4">
              {niveaux.map((n) => (
                <div key={n.nom} className="flex items-start gap-3 text-[15px] font-light text-foreground/80">
                  <span className="text-xl leading-none">{n.emoji}</span>
                  <span>
                    <span className="font-semibold text-foreground">{n.nom}</span> : {n.desc}
                  </span>
                </div>
              ))}
              <div className="flex items-start gap-3 text-[15px] font-light text-foreground/70 pt-2 border-t border-white/10">
                <span className="text-xl leading-none">⚠️</span>
                <span>
                  Le groupe Rouge est toutefois soumis à la disponibilité des membres de l’équipe SPS. Il ne sera donc pas nécessairement proposé tous les dimanches.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RidesSection;

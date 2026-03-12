import { TrendingUp, Users } from "lucide-react";

const rides = [
  {
    day: "JEUDI",
    name: "Social Ride du jeudi 🚴 & 🍻",
    details: [
      { icon: <TrendingUp size={16} />, text: "Environ 20km" },
      { icon: <Users size={16} />, text: "Tous niveaux · Social" },
    ],
    pill: "Social",
  },
  {
    day: "DIMANCHE",
    name: "Sortie longue",
    details: [
      { icon: <TrendingUp size={16} />, text: "Environ 70/100km" },
      { icon: <Users size={16} />, text: "Deux groupes : Groupe vert et Groupe noir" },
    ],
    pill: "Endurance",
  },
];

const RidesSection = () => {
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

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {rides.map((ride) => (
            <div
              key={ride.day}
              className="glass-card clip-skew-lg p-10 md:p-12 relative overflow-hidden"
            >
              {/* Top gradient bar */}
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
                  <div key={i} className="flex items-center gap-3 text-foreground/60 text-[15px] font-light">
                    <span className="text-sps-magenta">{d.icon}</span>
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
      </div>
    </section>
  );
};

export default RidesSection;

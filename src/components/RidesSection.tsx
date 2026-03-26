import { TrendingUp, Users, MapPin } from "lucide-react";

const rides = [
  {
    day: "JEUDI",
    name: "Social Ride du jeudi 🚴 & 🍻",
    details: [
      { icon: <TrendingUp size={16} />, text: "Environ 20km" },
      { icon: <Users size={16} />, text: "Allures/Niveau : Tous niveaux" },
      { icon: <MapPin size={16} />, text: "Départ depuis le Marché du Lez à 18h15" },
    ],
    pill: "Social",
  },
  {
    day: "DIMANCHE",
    name: "Sortie longue",
    details: [
      { icon: <TrendingUp size={16} />, text: "Environ 70/100km" },
      { icon: <Users size={16} />, text: "Allures/Niveau : Groupe vert 🟢 (entre 20 et 25 km/h)" },
      { icon: null, text: "Groupe noir ⚫️ (entre 27 et 29 km/h)" },
      { icon: <MapPin size={16} />, text: "Départ : variable selon la sortie" },
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


        {/* Strava Club Stats Widget */}
        <div className="mt-16 flex flex-col items-center">
          <h3 className="font-barlow-condensed text-sm font-semibold uppercase tracking-[3px] text-sps-pink mb-6">
            ▸ Stats du club
          </h3>
          <div
            className="glass-card clip-skew-lg relative overflow-hidden p-1"
            style={{
              boxShadow: "0 0 0 1px hsl(330 85% 49% / 0.15), 0 0 30px hsl(264 70% 20% / 0.3)",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ background: "linear-gradient(90deg, hsl(264 70% 38%), hsl(330 85% 49%))" }}
            />
            <div className="overflow-hidden rounded-lg" style={{ background: "hsl(264 80% 5%)" }}>
              <iframe
                allowTransparency={true}
                frameBorder="0"
                height="160"
                scrolling="no"
                src="https://www.strava.com/clubs/1622153/latest-rides/4a6a40ce793c0ee74b9423143f32d4b949d0339c?show_rides=false"
                width="300"
                title="Statistiques Strava du club SPS"
                className="block"
                style={{
                  filter: "invert(1) hue-rotate(180deg) brightness(1.1) contrast(0.9)",
                  opacity: 0.9,
                }}
              />
            </div>
          </div>
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
      </div>
    </section>
  );
};

export default RidesSection;

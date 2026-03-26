import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { MapPin, TrendingUp, Users, Clock, Calendar } from "lucide-react";

interface Ride {
  id: string;
  title: string;
  ride_date: string;
  ride_time: string;
  distance: string;
  elevation: string;
  level: string;
  meeting_point: string;
  ride_type: string;
  image_url: string | null;
}

const NextRideSection = () => {
  const [ride, setRide] = useState<Ride | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestRide = async () => {
      const { data, error } = await supabase
        .from("rides")
        .select("*")
        .gte("ride_date", new Date().toISOString().split("T")[0])
        .order("ride_date", { ascending: true })
        .limit(1)
        .maybeSingle();

      if (!error && data) {
        setRide(data as Ride);
      }
      setLoading(false);
    };

    fetchLatestRide();
  }, []);

  if (loading || !ride) return null;

  const formattedDate = new Date(ride.ride_date).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section
      id="prochaine-sortie"
      className="py-24 w-full"
      style={{
        background:
          "linear-gradient(180deg, hsl(264 80% 5%) 0%, hsl(264 80% 12%) 50%, hsl(264 80% 5%) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <span className="section-tag">À venir</span>
        <h2 className="section-title">Prochaine sortie</h2>
        <div className="divider-gradient" />

        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
          {/* Image */}
          {ride.image_url && (
            <div className="glass-card overflow-hidden p-0">
              <img
                src={ride.image_url}
                alt={ride.title}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          )}

          {/* Details */}
          <div className="glass-card clip-skew-lg p-10 md:p-12 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{
                background:
                  "linear-gradient(90deg, hsl(264 70% 38%), hsl(330 85% 49%))",
              }}
            />

            <span
              className="inline-block mb-4 px-3.5 py-1 font-barlow-condensed text-[11px] font-semibold uppercase tracking-[2px] text-sps-pink"
              style={{
                background: "hsl(330 85% 49% / 0.15)",
                border: "1px solid hsl(330 85% 49% / 0.3)",
              }}
            >
              {ride.ride_type}
            </span>

            <div className="font-bebas text-5xl md:text-6xl leading-none text-gradient-magenta mb-4">
              {ride.title}
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-3 text-foreground/80 text-[15px]">
                <Calendar size={18} className="text-sps-magenta" />
                <span className="capitalize">{formattedDate}</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80 text-[15px]">
                <Clock size={18} className="text-sps-magenta" />
                <span>Départ à {ride.ride_time}</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80 text-[15px]">
                <MapPin size={18} className="text-sps-magenta" />
                <span>RDV : {ride.meeting_point}</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80 text-[15px]">
                <TrendingUp size={18} className="text-sps-magenta" />
                <span>
                  {ride.distance} · {ride.elevation}
                </span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80 text-[15px]">
                <Users size={18} className="text-sps-magenta" />
                <span>{ride.level}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextRideSection;

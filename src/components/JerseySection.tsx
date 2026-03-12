import jerseyImg from "@/assets/jersey-sps.png";

const JerseySection = () => {
  return (
    <section id="maillot" className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
      <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* Jersey image */}
        <div className="relative text-center group">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, hsl(330 85% 49% / 0.15) 0%, transparent 70%)"
            }} />
          
          <img
            alt="Maillot SPS"
            className="w-[90%] max-w-[420px] mx-auto relative z-10 drop-shadow-2xl transition-transform duration-400 group-hover:scale-[1.03] group-hover:-rotate-1"
            style={{ filter: "drop-shadow(0 30px 60px hsl(330 85% 49% / 0.3))" }} src="/lovable-uploads/c2a059d6-3d9a-4c43-9e66-f75090425330.png" />
          
        </div>

        {/* Text */}
        <div>
          <span className="section-tag">Équipement</span>
          <h2 className="section-title">Le maillot SPS</h2>
          <div className="divider-gradient" />
          <p className="text-foreground/65 leading-relaxed font-light mb-5">
            Conçu en partenariat avec <strong className="font-semibold text-foreground/80">Gobik</strong>, notre maillot club incarne l'identité SPS : violet profond, accents magenta, et le logo SPS en signature.
          </p>
          <p className="text-foreground/65 leading-relaxed font-light">
            Un design unique qui te reconnaît sur la route et renforce l'esprit d'équipe à chaque sortie.
          </p>
        </div>
      </div>
    </section>);

};

export default JerseySection;
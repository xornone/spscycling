const steps = [
  {
    num: "01",
    title: "Contacte-nous",
    text: "Envoie-nous un message via le formulaire de contact ou sur Instagram.",
  },
  {
    num: "02",
    title: "Viens tester",
    text: "Rejoins-nous pour une sortie découverte, sans engagement.",
  },
  {
    num: "03",
    title: "Adhère",
    text: "Valide ton adhésion et rejoins officiellement la famille SPS.",
  },
];

const JoinSection = () => {
  return (
    <section
      id="rejoindre"
      className="w-full py-24 px-6 md:px-12 text-center"
      style={{
        background: "linear-gradient(180deg, hsl(264 80% 5%) 0%, hsl(264 75% 18%) 50%, hsl(264 80% 10%) 100%)",
      }}
    >
      <div className="max-w-[700px] mx-auto">
        <span className="section-tag">Adhésion</span>
        <h2 className="section-title">Rejoins SPS</h2>
        <div className="divider-gradient mx-auto" />
        <p className="text-foreground/65 text-lg leading-relaxed font-light mb-12">
          Pas besoin d'être un champion – juste l'envie de rouler. Rejoindre SPS c'est intégrer une communauté soudée, accéder à nos sorties hebdomadaires et faire partie de l'aventure.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-14 text-left">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-7 glass-card"
              style={{ borderTop: "3px solid hsl(330 85% 49%)" }}
            >
              <div className="font-bebas text-4xl text-sps-magenta/50 leading-none mb-3">
                {step.num}
              </div>
              <div className="font-barlow-condensed text-base font-bold uppercase tracking-wider mb-2 text-foreground">
                {step.title}
              </div>
              <p className="text-sm text-foreground/55 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>

        <a href="#contact" className="btn-sps">
          Je veux rejoindre le club
        </a>
      </div>
    </section>
  );
};

export default JoinSection;

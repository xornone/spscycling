const SocialSection = () => {
  return (
    <section
      className="py-20 px-6 md:px-12 max-w-[1200px] mx-auto text-center"
    >
      <span className="section-tag">Communauté</span>
      <h2 className="section-title">Suis-nous</h2>
      <div className="divider-gradient mx-auto" />

      <div className="flex flex-wrap gap-6 justify-center mt-12">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card flex items-center gap-4 px-10 py-6 font-barlow-condensed font-bold text-base uppercase tracking-[2px] text-foreground no-underline min-w-[220px] justify-center"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 flex-shrink-0">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          Instagram
        </a>
        <a
          href="https://www.strava.com"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card flex items-center gap-4 px-10 py-6 font-barlow-condensed font-bold text-base uppercase tracking-[2px] text-foreground no-underline min-w-[220px] justify-center"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 flex-shrink-0">
            <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
          </svg>
          Strava
        </a>
      </div>
    </section>
  );
};

export default SocialSection;

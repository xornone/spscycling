const SpsFooter = () => {
  return (
    <footer
      className="px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6"
      style={{
        background: "hsl(264 80% 3%)",
        borderTop: "1px solid hsl(0 0% 100% / 0.06)",
      }}
    >
      <span className="font-bebas text-xl tracking-wider text-foreground/80">
        SPS <span className="text-gradient-magenta">CYCLING</span>
      </span>

      <p className="text-foreground/30 text-sm">
        © {new Date().getFullYear()} SPS – Solo Plus Solo. Montpellier.
      </p>

      <div className="flex gap-6">
        {["Instagram", "Strava", "Contact"].map((link) => (
          <a
            key={link}
            href={link === "Contact" ? "#contact" : "#"}
            className="font-barlow-condensed text-xs uppercase tracking-wider text-foreground/30 hover:text-sps-pink transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default SpsFooter;

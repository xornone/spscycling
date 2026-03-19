import logoSps from "@/assets/logo-sps-white.png";

const SpsFooter = () => {
  return (
    <footer
      className="px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6"
      style={{
        background: "hsl(264 80% 3%)",
        borderTop: "1px solid hsl(0 0% 100% / 0.06)",
      }}
    >
      <a href="#">
        <img src={logoSps} alt="SPS Cycling" className="h-8 w-auto" />
      </a>

      <p className="text-foreground/30 text-sm">
        © {new Date().getFullYear()} SPS – Solo Plus Solo. Montpellier.
      </p>

      <div className="flex gap-6">
        {["Instagram", "Strava", "Contact"].map((link) => (
          <a
            key={link}
            href={link === "Strava" ? "https://www.strava.com/clubs/spscycling" : link === "Contact" ? "#contact" : "#"}
            target={link === "Strava" ? "_blank" : undefined}
            rel={link === "Strava" ? "noopener noreferrer" : undefined}
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

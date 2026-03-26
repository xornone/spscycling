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

      <iframe
        allowTransparency={true}
        frameBorder="0"
        height="160"
        scrolling="no"
        src="https://www.strava.com/clubs/1622153/latest-rides/4a6a40ce793c0ee74b9423143f32d4b949d0339c?show_rides=false"
        width="300"
        title="Statistiques Strava du club SPS"
        className="block"
      />

      <div className="flex gap-6">
        {[
          { label: "Instagram", href: "https://www.instagram.com/spscycling/", external: true },
          { label: "Strava", href: "https://www.strava.com/clubs/spscycling", external: true },
          { label: "Contact", href: "#contact", external: false },
          { label: "Mentions légales", href: "/mentions-legales", external: false },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="font-barlow-condensed text-xs uppercase tracking-wider text-foreground/30 hover:text-sps-pink transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default SpsFooter;

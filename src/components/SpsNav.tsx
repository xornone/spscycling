import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoSps from "@/assets/logo-sps.png";

const navLinks = [
  { label: "Le club", href: "#about" },
  { label: "Les sorties", href: "#sorties" },
  { label: "Contact", href: "#contact" },
];

const SpsNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 backdrop-blur-xl ${
        scrolled ? "bg-background/90 border-b border-border" : "bg-background/60"
      }`}
      style={{ borderBottom: scrolled ? "1px solid hsl(330 85% 49% / 0.15)" : "none" }}
    >
      <a href="#" className="flex items-center">
        <img src={logoSps} alt="SPS Cycling" className="h-8 w-auto" />
      </a>

      {/* Desktop */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-barlow-condensed text-sm font-semibold uppercase tracking-[2px] text-foreground/80 hover:text-sps-pink transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#rejoindre"
            className="btn-sps !py-2.5 !px-6 !text-xs"
          >
            Nous rejoindre
          </a>
        </li>
      </ul>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-foreground"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 md:hidden flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-barlow-condensed text-sm font-semibold uppercase tracking-[2px] text-foreground/80 hover:text-sps-pink transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#rejoindre" className="btn-sps !py-2.5 !px-6 !text-xs mt-2 text-center" onClick={() => setMobileOpen(false)}>
            Nous rejoindre
          </a>
        </div>
      )}
    </nav>
  );
};

export default SpsNav;

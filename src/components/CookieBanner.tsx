import { useState, useEffect } from "react";

const COOKIE_KEY = "sps-cookies-accepted";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "true");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div
        className="max-w-2xl mx-auto rounded-sm border border-border bg-card/95 backdrop-blur-xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 shadow-2xl"
      >
        <p className="text-foreground/70 text-sm leading-relaxed flex-1">
          Ce site utilise des cookies pour améliorer votre expérience.
          Consultez nos{" "}
          <a href="/mentions-legales" className="text-sps-pink hover:underline">
            mentions légales
          </a>{" "}
          pour en savoir plus.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="font-barlow-condensed text-xs uppercase tracking-widest text-foreground/40 hover:text-foreground/70 transition-colors px-4 py-2"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="btn-sps !py-2.5 !px-6 !text-xs"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

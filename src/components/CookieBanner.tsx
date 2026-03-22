import { useState, useEffect } from "react";

const COOKIE_KEY = "sps-cookie-preferences";

type CookiePrefs = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const DEFAULT_PREFS: CookiePrefs = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>(DEFAULT_PREFS);

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY);
    if (!saved) setVisible(true);
  }, []);

  const save = (p: CookiePrefs) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(p));
    setVisible(false);
  };

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true });
  const declineAll = () => save({ necessary: true, analytics: false, marketing: false });
  const saveCustom = () => save({ ...prefs, necessary: true });

  if (!visible) return null;

  const categories: { key: keyof CookiePrefs; label: string; desc: string; locked?: boolean }[] = [
    { key: "necessary", label: "Essentiels", desc: "Nécessaires au fonctionnement du site (navigation, sécurité).", locked: true },
    { key: "analytics", label: "Analytiques", desc: "Permettent de mesurer l'audience et d'améliorer le site." },
    { key: "marketing", label: "Marketing", desc: "Utilisés pour afficher des contenus personnalisés." },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="max-w-2xl mx-auto rounded-sm border border-border bg-card/95 backdrop-blur-xl p-5 md:p-6 shadow-2xl">
        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
          Ce site utilise des cookies pour améliorer votre expérience.
          Consultez nos{" "}
          <a href="/mentions-legales" className="text-sps-pink hover:underline">
            mentions légales
          </a>{" "}
          pour en savoir plus.
        </p>

        {showDetails && (
          <div className="mb-4 space-y-3">
            {categories.map((cat) => (
              <label
                key={cat.key}
                className="flex items-start gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={prefs[cat.key]}
                  disabled={cat.locked}
                  onChange={() =>
                    setPrefs((p) => ({ ...p, [cat.key]: !p[cat.key] }))
                  }
                  className="mt-1 h-4 w-4 rounded-sm border-border accent-sps-pink shrink-0"
                />
                <div>
                  <span className="font-barlow-condensed text-sm font-semibold uppercase tracking-wide text-foreground/90">
                    {cat.label}
                    {cat.locked && (
                      <span className="ml-2 text-[10px] normal-case tracking-normal text-foreground/30 font-normal">
                        (toujours actif)
                      </span>
                    )}
                  </span>
                  <p className="text-foreground/50 text-xs leading-relaxed mt-0.5">
                    {cat.desc}
                  </p>
                </div>
              </label>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="font-barlow-condensed text-xs uppercase tracking-widest text-foreground/40 hover:text-foreground/70 transition-colors px-4 py-2"
          >
            {showDetails ? "Masquer" : "Personnaliser"}
          </button>
          <button
            onClick={declineAll}
            className="font-barlow-condensed text-xs uppercase tracking-widest text-foreground/40 hover:text-foreground/70 transition-colors px-4 py-2"
          >
            Tout refuser
          </button>
          {showDetails ? (
            <button onClick={saveCustom} className="btn-sps !py-2.5 !px-6 !text-xs">
              Enregistrer mes choix
            </button>
          ) : (
            <button onClick={acceptAll} className="btn-sps !py-2.5 !px-6 !text-xs">
              Tout accepter
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

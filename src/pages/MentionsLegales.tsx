const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <a
          href="/"
          className="inline-block mb-8 font-barlow-condensed text-sm uppercase tracking-widest text-sps-pink hover:text-sps-pink/80 transition-colors"
        >
          ← Retour au site
        </a>
        <h1 className="font-barlow-condensed text-4xl md:text-5xl font-bold uppercase tracking-tight mb-12">
          Mentions légales
        </h1>

        {sections.map((s, i) => (
          <section key={i} className="mb-10">
            <h2 className="font-barlow-condensed text-xl font-semibold uppercase tracking-wide text-sps-pink mb-4">
              {s.title}
            </h2>
            <div className="text-foreground/70 leading-relaxed space-y-3 text-sm">
              {s.content}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

const sections = [
  {
    title: "1. Éditeur du site",
    content: (
      <>
        <p><strong>Nom de l'association :</strong> SPS</p>
        <p><strong>Statut :</strong> Association loi 1901</p>
        <p><strong>Adresse :</strong> 69 Plan de Barcelone, 34970 Lattes</p>
        <p><strong>Email :</strong> <a href="mailto:contact@spscycling.fr" className="text-sps-pink hover:underline">contact@spscycling.fr</a></p>
        <p className="mt-4"><strong>Directeur de la publication :</strong> Thomas Trégaro, président de l'association</p>
      </>
    ),
  },
  {
    title: "2. Hébergement du site",
    content: (
      <>
        <p><strong>Hébergeur :</strong> OVHcloud</p>
        <p><strong>Adresse :</strong> 2, rue Kellermann, 59100 Roubaix, France</p>
        <p><strong>Site web :</strong> <a href="https://www.ovhcloud.com/fr/" target="_blank" rel="noopener noreferrer" className="text-sps-pink hover:underline">ovhcloud.com</a></p>
      </>
    ),
  },
  {
    title: "3. Propriété intellectuelle",
    content: (
      <>
        <p>L'ensemble des contenus présents sur le site (textes, images, logo, éléments graphiques, etc.) est la propriété exclusive de l'association SPS, sauf mention contraire.</p>
        <p>Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, est interdite sans l'autorisation préalable de l'association.</p>
      </>
    ),
  },
  {
    title: "4. Données personnelles",
    content: (
      <>
        <p>Les informations collectées via le site, notamment à travers le formulaire de contact ou les formulaires d'adhésion, sont utilisées uniquement dans le cadre des activités de l'association SPS (gestion des demandes, communication, organisation des activités).</p>
        <p>Les données collectées sont destinées exclusivement à l'association et ne sont en aucun cas cédées ou vendues à des tiers.</p>
        <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
        <ul className="list-disc list-inside pl-2 space-y-1">
          <li>droit d'accès</li>
          <li>droit de rectification</li>
          <li>droit de suppression</li>
        </ul>
        <p>Vous pouvez exercer ces droits en contactant : <a href="mailto:contact@spscycling.fr" className="text-sps-pink hover:underline">contact@spscycling.fr</a></p>
      </>
    ),
  },
  {
    title: "5. Cookies",
    content: (
      <>
        <p>Le site peut être amené à utiliser des cookies afin d'améliorer l'expérience utilisateur et mesurer l'audience.</p>
        <p>Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies.</p>
      </>
    ),
  },
  {
    title: "6. Responsabilité",
    content: (
      <>
        <p>L'association SPS s'efforce de fournir des informations aussi précises que possible. Toutefois, elle ne saurait être tenue responsable :</p>
        <ul className="list-disc list-inside pl-2 space-y-1">
          <li>des omissions ou erreurs</li>
          <li>des problèmes techniques rencontrés sur le site</li>
          <li>du contenu des sites externes accessibles via des liens</li>
        </ul>
      </>
    ),
  },
];

export default MentionsLegales;

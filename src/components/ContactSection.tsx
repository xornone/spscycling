import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé ! On te répond bientôt.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-[800px] mx-auto text-center">
      <span className="section-tag">Contact</span>
      <h2 className="section-title">On se parle ?</h2>
      <div className="divider-gradient mx-auto" />
      <p className="text-foreground/60 text-lg leading-relaxed font-light mb-12">
        Une question sur le club, les sorties ou le maillot ? Envoie-nous un message, on te répond vite.
      </p>

      <form onSubmit={handleSubmit} className="grid gap-4 text-left">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Prénom & Nom"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-input border border-border text-foreground px-5 py-4 font-barlow text-[15px] outline-none transition-colors focus:border-sps-magenta placeholder:text-foreground/30"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-input border border-border text-foreground px-5 py-4 font-barlow text-[15px] outline-none transition-colors focus:border-sps-magenta placeholder:text-foreground/30"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Sujet"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full bg-input border border-border text-foreground px-5 py-4 font-barlow text-[15px] outline-none transition-colors focus:border-sps-magenta placeholder:text-foreground/30"
        />
        <textarea
          placeholder="Ton message..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-input border border-border text-foreground px-5 py-4 font-barlow text-[15px] outline-none transition-colors focus:border-sps-magenta placeholder:text-foreground/30 h-36 resize-y"
          required
        />
        <button type="submit" className="btn-sps justify-self-center mt-2">
          Envoyer le message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;

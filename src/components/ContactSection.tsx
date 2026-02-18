import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-charcoal">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="premium-label text-gold-light mb-4">{t("Contact", "Contact")}</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-ivory mb-4">
            {t("Demander une disponibilité", "Enquire availability")}
          </h2>
          <p className="text-ivory/60 font-light font-sans">
            {t(
              "Dites-nous vos dates, le nombre de personnes et vos attentes. Réponse rapide.",
              "Share your dates, group size and preferences. Quick reply."
            )}
          </p>
        </motion.div>

        {submitted ? (
          <div className="text-center py-12">
            <p className="font-serif text-2xl text-ivory mb-2">{t("Merci\u00a0!", "Thank you!")}</p>
            <p className="text-ivory/60 font-sans">{t("Nous vous répondrons rapidement.", "We'll get back to you shortly.")}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input type="text" required placeholder={t("Nom", "Name")} className="w-full bg-charcoal-light/50 border border-ivory/10 text-ivory placeholder:text-ivory/30 px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold/50 transition-colors" />
              <input type="email" required placeholder="Email" className="w-full bg-charcoal-light/50 border border-ivory/10 text-ivory placeholder:text-ivory/30 px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold/50 transition-colors" />
              <input type="tel" placeholder={t("Téléphone", "Phone")} className="w-full bg-charcoal-light/50 border border-ivory/10 text-ivory placeholder:text-ivory/30 px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold/50 transition-colors" />
              <input type="text" placeholder={t("Nombre d'invités", "Number of guests")} className="w-full bg-charcoal-light/50 border border-ivory/10 text-ivory placeholder:text-ivory/30 px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold/50 transition-colors" />
            </div>
            <input type="text" placeholder={t("Dates souhaitées", "Preferred dates")} className="w-full bg-charcoal-light/50 border border-ivory/10 text-ivory placeholder:text-ivory/30 px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold/50 transition-colors" />
            <textarea rows={4} placeholder="Message" className="w-full bg-charcoal-light/50 border border-ivory/10 text-ivory placeholder:text-ivory/30 px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold/50 transition-colors resize-none" />
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button type="submit" className="flex items-center gap-2 px-8 py-3.5 bg-gold hover:bg-gold-dark text-ivory text-sm uppercase tracking-[0.15em] font-sans transition-colors">
                <Send className="w-4 h-4" />
                {t("Envoyer ma demande", "Send enquiry")}
              </button>
            </div>
          </form>
        )}

        <div className="mt-10 text-center">
          <p className="text-ivory/40 text-sm font-sans mb-3">
            {t("Ou réservez directement via notre agence partenaire", "Or book directly via our partner rental agency")}
          </p>
          <a
            href="https://www.nendaz.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-gold/30 text-gold text-sm uppercase tracking-[0.15em] font-sans hover:bg-gold/10 transition-colors"
          >
            {t("Réserver via l'agence", "Book via the agency")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

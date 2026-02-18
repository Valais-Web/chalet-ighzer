import { useState, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const { lang, t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Clear honeypot before submit
    const honeypot = formRef.current.querySelector<HTMLInputElement>('input[name="bot-field"]');
    if (honeypot) honeypot.value = '';

    const formData = new FormData(formRef.current);
    const entries: [string, string][] = [];
    formData.forEach((value, key) => {
      entries.push([key, value as string]);
    });
    const body = new URLSearchParams(entries).toString();

    try {
      const res = await fetch('/?no-cache=1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  const inputClass = "w-full bg-charcoal-light/50 border border-ivory/10 text-ivory placeholder:text-ivory/30 px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold/50 transition-colors";

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
          <form
            ref={formRef}
            name="contact"
            method="POST"
            action="/"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="lang" value={lang} />
            {/* Honeypot — off-screen, never display:none */}
            <p className="absolute -left-[9999px]" aria-hidden="true">
              <label>
                Don't fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              <input type="text" name="name" required placeholder={t("Nom", "Name")} className={inputClass} />
              <input type="email" name="email" required placeholder="Email" className={inputClass} />
              <input type="tel" name="phone" placeholder={t("Téléphone", "Phone")} className={inputClass} />
              <input type="text" name="guests" placeholder={t("Nombre d'invités", "Number of guests")} className={inputClass} />
            </div>
            <input type="text" name="dates" placeholder={t("Dates souhaitées", "Preferred dates")} className={inputClass} />
            <textarea name="message" rows={4} placeholder="Message" className={`${inputClass} resize-none`} />
            
            {error && (
              <p className="text-red-400 text-sm font-sans">
                {t("Une erreur est survenue. Veuillez réessayer.", "An error occurred. Please try again.")}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button type="submit" className="flex items-center gap-2 px-8 py-3.5 bg-gold hover:bg-gold-dark text-ivory text-sm uppercase tracking-[0.15em] font-sans transition-colors">
                <Send className="w-4 h-4" />
                {t("Envoyer ma demande", "Send enquiry")}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;

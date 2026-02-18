import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { fr: { q: "Le chalet est-il adapté aux familles\u00a0?", a: "Oui, avec une chambre enfants et de grands espaces." }, en: { q: "Is it family-friendly?", a: "Yes, with a children's room and generous spaces." } },
  { fr: { q: "Le spa est-il privé\u00a0?", a: "Oui, piscine intérieure, jacuzzi et sauna sont privatifs." }, en: { q: "Is the spa private?", a: "Yes, the indoor pool, hot tub and sauna are private." } },
  { fr: { q: "Peut-on venir sans voiture\u00a0?", a: "C'est possible, mais une voiture est fortement recommandée." }, en: { q: "Do I need a car?", a: "Strongly recommended for comfort and flexibility." } },
  { fr: { q: "En hiver, faut-il un 4x4\u00a0?", a: "Recommandé/nécessaire selon conditions\u00a0: prévoir chaînes." }, en: { q: "Do I need a 4x4 in winter?", a: "Often recommended/required: bring snow chains." } },
  { fr: { q: "Le chalet est-il ski-in/ski-out\u00a0?", a: "Non strictement, mais accès piste à courte distance." }, en: { q: "Is it ski-in/ski-out?", a: "Not strictly, but the piste is a short distance away." } },
  { fr: { q: "Combien de personnes peut-on loger\u00a0?", a: "Jusqu'à 12 (et parfois plus sur demande selon configuration)." }, en: { q: "How many guests?", a: "Up to 12 (sometimes more on request depending on setup)." } },
  { fr: { q: "Les chambres ont-elles une salle de bain\u00a0?", a: "Oui, toutes les chambres sont en suite." }, en: { q: "Are bedrooms en-suite?", a: "Yes, all bedrooms have en-suite bathrooms." } },
  { fr: { q: "Comment réserver\u00a0?", a: "Via l'agence de location ou via le formulaire de demande ci-dessous." }, en: { q: "How do I book?", a: "Through the rental agency link or via the enquiry form below." } },
];

const FaqSection = () => {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="premium-label mb-4">FAQ</p>
          <h2 className="premium-heading">{lang === 'fr' ? "Questions fréquentes" : "Frequently asked questions"}</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const item = lang === 'fr' ? faq.fr : faq.en;
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="font-serif text-lg text-charcoal">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gold transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="premium-body text-sm pb-5">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

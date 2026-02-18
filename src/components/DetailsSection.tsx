import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';
import { Home, Flame, ChefHat, Sun, Wifi } from 'lucide-react';

const DetailsSection = () => {
  const { t } = useLang();

  const details = [
    { icon: Home, fr: "400 m² sur 3 niveaux pour vivre ensemble sans se marcher dessus", en: "400 m² across 3 levels with generous space and privacy" },
    { icon: Flame, fr: "Grand salon & salle à manger ouverts, cheminée centrale, poutres apparentes", en: "Large open living & dining area with a central fireplace and exposed beams" },
    { icon: ChefHat, fr: "Cuisine ouverte entièrement équipée + coin petit-déjeuner", en: "Fully equipped open kitchen with breakfast corner" },
    { icon: Sun, fr: "Terrasse ensoleillée avec vue panoramique", en: "Sunlit terrace with panoramic views" },
    { icon: Wifi, fr: "Wi-Fi, espaces de rangement, buanderie", en: "Wi-Fi, storage, laundry area" },
  ];

  return (
    <section id="details" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="premium-label mb-4">{t("Le chalet en détail", "The chalet in detail")}</p>
          <h2 className="premium-heading">
            {t("400 m² d'art de vivre alpin", "400 m² of alpine living")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="premium-card flex items-start gap-4"
            >
              <d.icon className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <p className="premium-body text-base">{t(d.fr, d.en)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;

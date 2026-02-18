import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';
import { Shirt, Wifi, Sparkles, WashingMachine, ParkingCircle, HeadphonesIcon } from 'lucide-react';

const ServicesSection = () => {
  const { t } = useLang();

  const services = [
    { icon: Shirt, fr: "Linge de qualité, serviettes + serviettes spa, peignoirs", en: "Premium linen, towels + spa towels, bathrobes" },
    { icon: Wifi, fr: "Wi-Fi, bois pour cheminée", en: "Wi-Fi, firewood" },
    { icon: Sparkles, fr: "Ménage fin de séjour + petit ménage en semaine", en: "End-of-stay cleaning + a light mid-week clean" },
    { icon: WashingMachine, fr: "Lave-linge / sèche-linge", en: "Washer / dryer" },
    { icon: ParkingCircle, fr: "Parking sur place + garage", en: "On-site parking + garage" },
    { icon: HeadphonesIcon, fr: "Assistance sur place & informations station", en: "In-resort assistance & local information" },
  ];

  return (
    <section className="section-padding bg-ivory-dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="premium-label mb-4">{t("Inclus", "Included")}</p>
          <h2 className="premium-heading">{t("Services & attentions", "Services & thoughtful details")}</h2>
          <p className="premium-body mt-4 max-w-xl mx-auto text-sm italic">
            {t("Selon conditions de location", "Subject to rental conditions")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <s.icon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <span className="premium-body text-sm">{t(s.fr, s.en)}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

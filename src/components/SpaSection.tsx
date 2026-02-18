import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';
import poolImg from '@/assets/chalet-pool.jpg';
import { Waves, Droplets, Thermometer, ShowerHead } from 'lucide-react';

const spaFeatures = [
  { icon: Waves, fr: "Piscine intérieure", en: "Indoor pool" },
  { icon: Droplets, fr: "Jacuzzi", en: "Hot tub" },
  { icon: Thermometer, fr: "Sauna", en: "Sauna" },
  { icon: ShowerHead, fr: "Douche", en: "Shower" },
];

const SpaSection = () => {
  const { t } = useLang();

  return (
    <section id="spa" className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${poolImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/30" />

      <div className="relative z-10 section-padding w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="premium-label text-gold-light mb-4">{t("Bien-être exclusif", "Exclusive wellness")}</p>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-ivory mb-6">
              {t("Spa privé, à l'abri du monde", "Your private spa, away from everything")}
            </h2>
            <p className="text-ivory/80 text-lg font-light font-sans mb-10 leading-relaxed">
              {t(
                "Piscine intérieure chauffée (env. 8 m), jacuzzi, sauna, douche. Parfait après le ski ou une journée de randonnée.",
                "Indoor heated pool (around 8 m), hot tub, sauna and shower. The perfect reset after skiing or hiking."
              )}
            </p>

            <div className="flex flex-wrap gap-6">
              {spaFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <f.icon className="w-5 h-5 text-gold-light" />
                  <span className="text-ivory/70 text-sm uppercase tracking-wider font-sans">{t(f.fr, f.en)}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpaSection;

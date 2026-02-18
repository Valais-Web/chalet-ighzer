import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';
import { MapPin, Car, SkipForward, Bus } from 'lucide-react';
import quatreValleesImg from '@/assets/quatre-vallees.webp';

const SkiAccessSection = () => {
  const { t } = useLang();

  const infos = [
    { icon: MapPin, fr: "Situé à quelques minutes du centre de Nendaz, dans un environnement calme avec vue.", en: "A few minutes from Nendaz centre, peaceful setting with panoramic views." },
    { icon: Car, fr: "En hiver\u00a0: arrivée recommandée en 4x4 et/ou chaînes.", en: "Winter access: 4x4 and/or snow chains recommended/required." },
    { icon: SkipForward, fr: "Accès ski\u00a0: courte marche vers la piste (Les Clèves). Retour à ski possible selon conditions.", en: "Ski access: short walk to the piste (Les Clèves). Ski back possible depending on conditions." },
    { icon: Bus, fr: "Navette ski privée quotidienne possible (selon organisation/location).", en: "Daily private ski shuttle may be available (depending on rental arrangements)." },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="premium-label mb-4">{t("Accès & Localisation", "Access & Location")}</p>
          <h2 className="premium-heading">{t("Au cœur des 4 Vallées", "In the heart of 4 Vallées")}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {infos.map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <info.icon className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
              <p className="premium-body text-base">{t(info.fr, info.en)}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 rounded-2xl overflow-hidden"
        >
          <img
            src={quatreValleesImg}
            alt={t("Vue panoramique des 4 Vallées", "Panoramic view of the 4 Vallées")}
            className="w-full h-auto object-cover max-h-[400px]"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SkiAccessSection;

import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';
import gymImg from '@/assets/chalet-gym.jpg';

const GymSection = () => {
  const { t } = useLang();

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          src={gymImg}
          alt={t("Salle de sport privée chalet luxe Nendaz", "Private gym luxury chalet Nendaz")}
          className="w-full h-[400px] object-cover"
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="premium-label mb-4">{t("Fitness", "Fitness")}</p>
          <h2 className="premium-heading mb-6">
            {t("Gym privée, niveau hôtel", "Private gym, hotel-level")}
          </h2>
          <p className="premium-body">
            {t(
              "Une salle de fitness équipée (type Technogym) pour garder le rythme\u00a0: cardio et renforcement.",
              "A well-equipped fitness room (Technogym-style) for cardio and strength."
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GymSection;

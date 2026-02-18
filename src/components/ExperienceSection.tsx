import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';
import livingImg from '@/assets/chalet-living.jpg';

const ExperienceSection = () => {
  const { t } = useLang();

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="premium-label mb-4">{t("L'expérience", "The experience")}</p>
            <h2 className="premium-heading mb-8">
              {t(
                "Un chalet d'exception, une atmosphère unique",
                "An exceptional chalet, a unique atmosphere"
              )}
            </h2>
            <div className="space-y-6">
              <p className="premium-body">
                {t(
                  "Chalet Ighzer réunit l'authenticité d'un chalet suisse et une exigence hôtelière\u00a0: bois massif, matières nobles, lumière, volumes généreux.",
                  "Chalet Ighzer blends true Swiss chalet character with a hotel-level standard: noble materials, warm textures, and generous volumes filled with light."
                )}
              </p>
              <p className="premium-body">
                {t(
                  "Après le ski ou une journée en montagne, retrouvez votre spa privé avec piscine intérieure chauffée, jacuzzi, sauna et salle de sport, le tout dans une atmosphère feutrée et exclusive.",
                  "After skiing or a day in the mountains, retreat to your private spa with an indoor heated pool, hot tub, sauna and gym, all in a calm, exclusive atmosphere."
                )}
              </p>
            </div>
            <div className="gold-separator mt-10 !mx-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={livingImg}
              alt={t(
                "Salon luxueux du chalet de luxe Nendaz avec cheminée et poutres apparentes",
                "Luxurious living room of premium chalet Nendaz with fireplace and exposed beams"
              )}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-charcoal/80 backdrop-blur-sm px-4 py-2">
              <span className="premium-label text-gold-light text-[10px]">{t("Salon & Cheminée", "Lounge & Fireplace")}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

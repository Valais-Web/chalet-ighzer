import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';
import heroImg from '@/assets/chalet-terrace.jpg';
import { Users, BedDouble, Waves, Flame, Dumbbell, Mountain, Home } from 'lucide-react';

const highlights = [
  { icon: Users, fr: '12 personnes', en: 'Sleeps 12' },
  { icon: BedDouble, fr: '5 suites', en: '5 en-suites' },
  { icon: Waves, fr: 'Spa privé', en: 'Private spa' },
  { icon: Home, fr: 'Piscine intérieure', en: 'Indoor pool' },
  { icon: Flame, fr: 'Cheminée', en: 'Fireplace' },
  { icon: Dumbbell, fr: 'Gym', en: 'Gym' },
  { icon: Mountain, fr: '4 Vallées', en: '4 Vallées' },
];

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background with parallax-like effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="premium-label text-gold-light mb-6"
        >
          Haute-Nendaz · 4 Vallées · Valais
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium text-ivory leading-tight mb-6"
        >
          {t(
            "Chalet Ighzer, l'art du luxe alpin",
            "Chalet Ighzer, alpine luxury redefined"
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-ivory/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 font-sans"
        >
          {t(
            "400 m² de raffinement, spa privé (piscine, jacuzzi, sauna), vue sur la vallée. Jusqu'à 12 hôtes.",
            "400 m² of refined comfort, private spa (pool, hot tub, sauna), sweeping valley views. Sleeps up to 12."
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a href="#contact" className="inline-block px-8 py-3.5 bg-gold hover:bg-gold-dark text-ivory text-sm uppercase tracking-[0.15em] font-sans transition-colors">
            {t("Demander une disponibilité", "Enquire availability")}
          </a>
          <a href="#experience" className="inline-block px-8 py-3.5 border border-ivory/30 text-ivory hover:bg-ivory/10 text-sm uppercase tracking-[0.15em] font-sans transition-colors">
            {t("Découvrir le chalet", "Explore the chalet")}
          </a>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-3"
        >
          {highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2 text-ivory/60">
              <h.icon className="w-4 h-4 text-gold-light" />
              <span className="text-xs uppercase tracking-wider font-sans">{t(h.fr, h.en)}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold-light animate-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;

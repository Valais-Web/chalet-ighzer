import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    fr: "Un lieu hors du temps. Le spa après une journée de ski est un pur bonheur.",
    en: "A place out of time. The spa after a day of skiing is pure bliss.",
    name: "M. & Mme D.",
  },
  {
    fr: "Service impeccable, cadre exceptionnel. Nos enfants en parlent encore.",
    en: "Impeccable service, exceptional setting. Our children still talk about it.",
    name: "Famille W.",
  },
];

const TestimonialsSection = () => {
  const { t } = useLang();

  return (
    <section className="section-padding bg-ivory-dark">
      <div className="max-w-4xl mx-auto text-center">
        <p className="premium-label mb-10">{t("Retours clients", "Guest feedback")}</p>
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <Quote className="w-6 h-6 text-gold/40 mx-auto mb-4" />
              <p className="font-serif text-lg italic text-charcoal-light leading-relaxed mb-4">
                "{t(test.fr, test.en)}"
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-stone font-sans">{test.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

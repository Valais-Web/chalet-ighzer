import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';

interface Floor {
  titleFr: string;
  titleEn: string;
  rooms: { fr: string; en: string }[];
}

const floors: Floor[] = [
  {
    titleFr: "Étage supérieur",
    titleEn: "Top floor",
    rooms: [
      { fr: "Suite master\u00a0: lit super king, cheminée, balcon, salle de bain en suite (baignoire + douche séparée), dressing", en: "Master suite: super-king bed, fireplace, balcony, en-suite with separate bath & shower, dressing area" },
      { fr: "Chambre enfants\u00a0: 2 lits superposés (4 couchages), balcon, salle de bain en suite", en: "Children's room: two bunk beds (sleeps 4), balcony, en-suite bathroom" },
    ],
  },
  {
    titleFr: "Étage intermédiaire",
    titleEn: "Middle floor",
    rooms: [
      { fr: "Chambre double/twin\u00a0: salle de bain en suite + espace bureau", en: "Double/twin: en-suite shower room + office space" },
      { fr: "Chambre double\u00a0: salle de bain en suite", en: "Double: en-suite bathroom" },
      { fr: "Espace de vie\u00a0: salon/salle à manger + cuisine + terrasse", en: "Living level: open lounge/dining + kitchen + terrace" },
    ],
  },
  {
    titleFr: "Niveau inférieur",
    titleEn: "Lower level",
    rooms: [
      { fr: "Chambre twin\u00a0: salle de bain en suite + canapé-lit possible", en: "Twin: en-suite shower room + optional sofa bed" },
      { fr: "Spa (piscine/jacuzzi/sauna) + ski room + buanderie", en: "Spa area + ski room + laundry" },
    ],
  },
];

const BedroomsSection = () => {
  const { t } = useLang();

  return (
    <section id="bedrooms" className="section-padding bg-ivory-dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="premium-label mb-4">{t("Disposition", "Layout")}</p>
          <h2 className="premium-heading">
            {t("5 chambres en suite, jusqu'à 12 hôtes", "5 en-suite bedrooms, sleeps up to 12")}
          </h2>
        </div>

        <div className="space-y-10">
          {floors.map((floor, fi) => (
            <motion.div
              key={fi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: fi * 0.15 }}
              className="premium-card"
            >
              <h3 className="font-serif text-xl font-medium text-charcoal mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-gold" />
                {t(floor.titleFr, floor.titleEn)}
              </h3>
              <ul className="space-y-3">
                {floor.rooms.map((room, ri) => (
                  <li key={ri} className="premium-body text-sm pl-11 relative">
                    <span className="absolute left-5 top-2 w-1.5 h-1.5 rounded-full bg-gold/50" />
                    {t(room.fr, room.en)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BedroomsSection;

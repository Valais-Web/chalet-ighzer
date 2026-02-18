import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';
import { X } from 'lucide-react';

import imgExterior from '@/assets/chalet-exterior.jpg';
import imgPool from '@/assets/chalet-pool.jpg';
import imgLiving from '@/assets/chalet-living.jpg';
import imgDining from '@/assets/chalet-dining.jpg';
import imgBedroom from '@/assets/chalet-bedroom.jpg';
import imgBathroom from '@/assets/chalet-bathroom.jpg';
import imgKitchen from '@/assets/chalet-kitchen.jpg';
import imgSauna from '@/assets/chalet-sauna.jpg';

const images = [
  { src: imgExterior, altFr: "Vue extérieure du chalet de luxe Ighzer à Haute-Nendaz en hiver", altEn: "Exterior winter view of luxury chalet Ighzer in Haute-Nendaz" },
  { src: imgPool, altFr: "Piscine intérieure chauffée et jacuzzi du chalet prestige Nendaz", altEn: "Indoor heated pool and hot tub at premium chalet Nendaz" },
  { src: imgLiving, altFr: "Grand salon avec cheminée centrale du chalet de luxe 4 Vallées", altEn: "Grand living room with central fireplace at luxury chalet 4 Vallées" },
  { src: imgDining, altFr: "Salle à manger élégante avec vue du chalet luxe Valais", altEn: "Elegant dining area with views at luxury chalet Valais" },
  { src: imgBedroom, altFr: "Suite master avec cheminée du chalet prestige Suisse", altEn: "Master suite with fireplace at premium Swiss chalet" },
  { src: imgBathroom, altFr: "Salle de bain en suite chalet luxe Nendaz", altEn: "En-suite bathroom luxury chalet Nendaz" },
  { src: imgKitchen, altFr: "Cuisine équipée haut de gamme chalet de luxe Haute-Nendaz", altEn: "Premium equipped kitchen luxury chalet Haute-Nendaz" },
  { src: imgSauna, altFr: "Sauna privatif du chalet avec piscine intérieure Valais", altEn: "Private sauna at chalet with indoor pool Valais" },
];

const GallerySection = () => {
  const { t } = useLang();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="premium-label text-gold-light mb-4">{t("Galerie Signature", "Signature Gallery")}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-ivory">
            {t("Un lieu, mille émotions", "One place, a thousand emotions")}
          </h2>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden cursor-pointer group ${
                i === 0 ? 'col-span-2 row-span-2' :
                i === 3 ? 'col-span-2' : ''
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={t(img.altFr, img.altEn)}
                className="w-full h-full object-cover aspect-square"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-ivory/60 hover:text-ivory">
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={images[selected].src}
              alt={t(images[selected].altFr, images[selected].altEn)}
              className="max-w-full max-h-[85vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;

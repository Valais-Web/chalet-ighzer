import { useLang } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="bg-charcoal border-t border-ivory/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-serif text-xl text-ivory tracking-wide">Chalet Ighzer</p>
          <p className="text-ivory/40 text-xs font-sans mt-1">Haute-Nendaz · 4 Vallées · Valais · Suisse</p>
        </div>
        <p className="text-ivory/30 text-xs font-sans">
          © {new Date().getFullYear()} Chalet Ighzer. {t("Tous droits réservés.", "All rights reserved.")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

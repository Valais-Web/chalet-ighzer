import { useLang } from '@/contexts/LanguageContext';
import valaisWebLogo from '@/assets/valais-web-logo.png';

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="bg-charcoal border-t border-ivory/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-serif text-xl text-ivory tracking-wide">Chalet Ighzer</p>
          <p className="text-ivory/40 text-xs font-sans mt-1">Haute-Nendaz · 4 Vallées · Valais · Suisse</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="text-ivory/30 text-xs font-sans">
            © {new Date().getFullYear()} Chalet Ighzer. {t("Tous droits réservés.", "All rights reserved.")}
          </p>
          <a href="https://valaisweb.ch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ivory/30 hover:text-ivory/50 transition-colors">
            <span className="text-xs font-sans">{t("Site web réalisé par", "Website by")}</span>
            <img src={valaisWebLogo} alt="Valais Web" className="h-4 opacity-50 hover:opacity-70 transition-opacity" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

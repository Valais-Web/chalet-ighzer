import { useLang } from '@/contexts/LanguageContext';

const Navbar = () => {
  const { lang, setLang } = useLang();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/90 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#hero" className="font-serif text-xl md:text-2xl tracking-wide text-ivory">
          Chalet Ighzer
        </a>
        <div className="hidden md:flex items-center gap-8">
          <NavItem href="#experience" label={lang === 'fr' ? "L'expérience" : "Experience"} />
          <NavItem href="#gallery" label={lang === 'fr' ? "Galerie" : "Gallery"} />
          <NavItem href="#spa" label="Spa" />
          <NavItem href="#bedrooms" label={lang === 'fr' ? "Chambres" : "Bedrooms"} />
          <NavItem href="#contact" label="Contact" />
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang('fr')}
            className={`text-sm font-sans tracking-wider transition-colors ${lang === 'fr' ? 'text-gold' : 'text-ivory/50 hover:text-ivory'}`}
          >
            FR
          </button>
          <span className="text-ivory/20">|</span>
          <button
            onClick={() => setLang('en')}
            className={`text-sm font-sans tracking-wider transition-colors ${lang === 'en' ? 'text-gold' : 'text-ivory/50 hover:text-ivory'}`}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, label }: { href: string; label: string }) => (
  <a href={href} className="text-xs uppercase tracking-[0.2em] text-ivory/70 hover:text-gold transition-colors font-sans">
    {label}
  </a>
);

export default Navbar;

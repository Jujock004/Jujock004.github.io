import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations, type Language, type Translations } from '@/i18n/translations';

interface LanguageContextType {
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('language') as Language) || 'fr';
  });

  const t = translations[language];

  const toggleLanguage = () => {
    const next: Language = language === 'en' ? 'fr' : 'en';
    setLanguage(next);
    localStorage.setItem('language', next);
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
};

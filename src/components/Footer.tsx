import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border py-6 flex justify-center items-center">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Julien Joecker · {t.footer.madeWith}
      </p>
    </footer>
  );
};

import { GithubIcon } from '@/assets/icons/GithubIcon';
import { Section } from './Section';
import { buttonVariants } from './ui/button';
import { LinkedinIcon } from '@/assets/icons/LinkedinIcon';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import useScrollToSection from '@/hooks/useScrollToSection';
import useTheme from '@/hooks/useTheme';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Stack', id: 'stack' },
  { label: 'Contact', id: 'contact' },
];

const scrollToSection = useScrollToSection().scrollToSection;

export const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    ['hero', ...navLinks.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Fermer le menu au resize desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="bg-background/80 backdrop-blur-sm text-foreground sticky top-0 z-50 border-b border-border">
      <Section className="flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="text-base font-semibold tracking-tight text-primary hover:opacity-80 transition-opacity"
        >
          Julien Joecker
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className={cn(
                'text-sm transition-colors',
                activeSection === link.id
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Icônes sociales + burger */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Jujock004/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'outline' }), 'size-9 p-0')}
          >
            <GithubIcon size={16} className="text-foreground" />
          </a>
          <a
            href="https://www.linkedin.com/in/julien-joecker/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'outline' }), 'size-9 p-0')}
          >
            <LinkedinIcon size={16} className="text-foreground" />
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'size-9 p-0 cursor-pointer'
            )}
            aria-label={
              theme === 'dark'
                ? 'Passer en mode clair'
                : 'Passer en mode sombre'
            }
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Burger — mobile only */}
          <button
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'size-9 p-0 md:hidden'
            )}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </Section>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className={cn(
                  'px-6 py-3 text-sm transition-colors',
                  activeSection === link.id
                    ? 'text-foreground font-medium bg-muted'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

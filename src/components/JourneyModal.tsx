import { X } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect } from 'react';

interface JourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JourneyModal = ({ isOpen, onClose }: JourneyModalProps) => {
  // Empêcher le scroll en arrière-plan quand la modale est ouverte
  useEffect(() => {
    if (isOpen) {
      // Sauvegarder la position de scroll actuelle
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restaurer la position de scroll
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative bg-background border rounded-lg shadow-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">My Journey</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 cursor-pointer "
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">
              &#8627; From Marketing to Development
            </h3>
            <p className="text-muted-foreground">
              My journey into web development began after 5 years in marketing.
              While working in marketing, I discovered my passion for technology
              and decided to make a career change that would allow me to create
              and build digital solutions.
            </p>
          </div>

          <div className="space-y-4 border-t border-muted-foreground pt-6">
            <h3 className="text-xl font-semibold text-primary">
              &#8627; Wild Code School
            </h3>
            <p className="text-muted-foreground">
              I enrolled at Wild Code School to pursue my dream of becoming a
              full-stack developer. Through intensive training and hands-on
              projects, I successfully earned my Web & Mobile Web Developer
              certificate, gaining expertise in modern web technologies.
            </p>
          </div>

          <div className="space-y-4 border-t border-muted-foreground pt-6">
            <h3 className="text-xl font-semibold text-primary">
              &#8627; Next Steps
            </h3>
            <p className="text-muted-foreground">
              My plans evolved constantly, and I’ll keep learning new things on
              my own. Right now, I’m focusing on PHP and Next.js. My goal is to
              obtain the official title of Software Designer and Developer by
              validating significant professional experience and skills.
            </p>
          </div>

          <div className="space-y-4 border-t border-muted-foreground pt-6">
            <h3 className="text-xl font-semibold text-primary">
              &#8627; My Passion
            </h3>
            <p className="text-muted-foreground">
              What drives me is the endless possibility to create, innovate, and
              solve problems through code. Every project is an opportunity to
              learn something new and push the boundaries of what's possible on
              the web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyModal;

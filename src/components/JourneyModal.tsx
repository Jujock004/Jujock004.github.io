import { X, Megaphone, GraduationCap, Rocket, Heart } from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface JourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const stepIcons = [Megaphone, GraduationCap, Rocket, Heart];

const JourneyModal = ({ isOpen, onClose }: JourneyModalProps) => {
  const { t } = useLanguage();
  const steps = t.journey.steps.map((step, i) => ({
    ...step,
    icon: stepIcons[i],
  }));

  useEffect(() => {
    if (!isOpen) return;
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-20 sm:pt-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative bg-background border border-border rounded-xl shadow-xl w-full max-w-lg max-h-[calc(100vh-5rem)] sm:max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="journey-modal-title"
      >
        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-5 pb-4 border-b border-border">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
              {t.journey.aboutMe}
            </p>
            <h2
              id="journey-modal-title"
              className="text-xl font-semibold tracking-tight"
            >
              {t.journey.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="mt-0.5 h-7 w-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
            aria-label={t.journey.close}
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Timeline */}
        <div className="px-6 py-5">
          <ol className="flex flex-col">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === steps.length - 1;
              return (
                <li key={step.title} className="flex gap-4">
                  {/* Left — icon + line */}
                  <div className="flex flex-col items-center w-8 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full border border-border bg-muted flex items-center justify-center text-muted-foreground flex-shrink-0 z-10">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    {!isLast && (
                      <div className="w-px flex-1 bg-border mt-1 mb-1" />
                    )}
                  </div>

                  {/* Right — content */}
                  <div className={`flex-1 ${!isLast ? 'pb-6' : ''} pt-1`}>
                    <span className="inline-block text-[11px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border mb-2">
                      {step.tag}
                    </span>
                    <p className="text-sm font-medium text-foreground mb-1.5">
                      {step.title}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default JourneyModal;

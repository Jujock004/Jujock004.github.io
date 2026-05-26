import { Button } from './ui/button';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { Section } from './Section';
import { Send, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const { t } = useLanguage();

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setSending(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID!,
        import.meta.env.VITE_TEMPLATE_ID!,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY!
      );
      toast.success(t.contact.successToast);
      form.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(t.contact.errorToast);
    } finally {
      setSending(false);
    }
  };

  return (
    <Section
      className="flex flex-col justify-center gap-6 py-20 scroll-mt-20"
      id="contact"
    >
      <div className="flex flex-col items-end text-right">
        <h2 className="text-2xl font-bold mb-2">{t.contact.title}</h2>
        <p className="text-sm text-muted-foreground max-w-lg">{t.contact.subtitle}</p>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        autoComplete="off"
        className="flex flex-col gap-4 w-full max-w-lg border border-border rounded-xl bg-background p-6 ml-auto"
      >
        {/* Subject */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted-foreground">
            {t.contact.subject}
          </label>
          <input
            type="text"
            name="title"
            placeholder={t.contact.subjectPlaceholder}
            required
            className="bg-muted border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
          />
        </div>

        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              {t.contact.yourName}
            </label>
            <input
              type="text"
              name="name"
              placeholder={t.contact.yourNamePlaceholder}
              required
              autoComplete="name"
              className="bg-muted border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              {t.contact.yourEmail}
            </label>
            <input
              type="email"
              name="email"
              placeholder={t.contact.yourEmailPlaceholder}
              required
              autoComplete="email"
              className="bg-muted border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted-foreground">
            {t.contact.message}
          </label>
          <textarea
            name="message"
            placeholder={t.contact.messagePlaceholder}
            required
            className="bg-muted border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors min-h-[120px] resize-y"
          />
        </div>

        {/* Submit */}
        <div className="flex justify-end pt-1">
          <Button type="submit" disabled={sending} className="cursor-pointer gap-2">
            {sending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {t.contact.sending}
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                {t.contact.send}
              </>
            )}
          </Button>
        </div>
      </form>
    </Section>
  );
};
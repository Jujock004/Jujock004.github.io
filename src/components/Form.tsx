import { Button } from './ui/button';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { Section } from './Section';
import { Send, Loader2 } from 'lucide-react';

export const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

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
      toast.success('Message sent successfully!');
      form.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again later.');
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
        <h2 className="text-2xl font-bold mb-2">Let's work together</h2>
        <p className="text-sm text-muted-foreground max-w-lg">
          I'm always open to new projects and opportunities. Have something in
          mind? Drop me a message.
        </p>
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
            Subject
          </label>
          <input
            type="text"
            name="title"
            placeholder="What's this about?"
            required
            className="bg-muted border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
          />
        </div>

        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Your name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              required
              autoComplete="name"
              className="bg-muted border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Your email
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              required
              autoComplete="email"
              className="bg-muted border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted-foreground">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Tell me about your project..."
            required
            className="bg-muted border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors min-h-[120px] resize-y"
          />
        </div>

        {/* Submit */}
        <div className="flex justify-end pt-1">
          <Button
            type="submit"
            disabled={sending}
            className="cursor-pointer gap-2"
          >
            {sending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send message
              </>
            )}
          </Button>
        </div>
      </form>
    </Section>
  );
};

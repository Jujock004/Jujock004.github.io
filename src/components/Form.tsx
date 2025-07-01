import { Button } from "./ui/button";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { Section } from "./Section";

export const Form = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.success("Message sent successfully!");
        if (form.current) {
            try {
                // Send the form data using EmailJS
                emailjs.sendForm(
                    import.meta.env.VITE_SERVICE_ID!,
                    import.meta.env.VITE_TEMPLATE_ID!,
                    form.current,
                    import.meta.env.VITE_PUBLIC_KEY!
                );
            } catch (error) {
                console.error("Error sending email:", error);
                toast.error("Failed to send message. Please try again later.");
            } finally {
                // Reset the form after sending
                form.current.reset();
                window.scrollTo({ top: 0, left: 0 })
            }
        }
    }

    return(
    <Section className="flex flex-col justify-center gap-8 py-20 scroll-mt-20" id="contact">
                <h1 className="text-2xl font-bold flex justify-start">Let's work together!</h1>
                <p className="text-muted-foreground">I'm always looking for new challenges and opportunities to grow. If you have a project in mind or just want to say hi, don't hesitate to contact me.</p>
                <form
                    ref={form}
                    className="flex flex-col w-full max-w-lg gap-4 mx-auto items-center bg-background p-6 rounded-md shadow-md border border-solid "
                    onSubmit={sendEmail}
                    autoComplete="off"
                >
                    <div className="flex flex-col gap-4 w-full">
                        <label className="flex flex-col gap-3">
                            <span className="text-sm font-medium text-primary">Object</span>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter the object of your message"
                                className="border border-solid rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                required
                            />
                        </label>
                        <label className="flex flex-col gap-3">
                            <span className="text-sm font-medium text-primary">Your name</span>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="border border-solid rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                required
                                autoComplete="name"
                            />
                        </label>
                        <label className="flex flex-col gap-3">
                            <span className="text-sm font-medium text-primary">Your email</span>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="border border-solid rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                required
                                autoComplete="email"
                            />
                        </label>
                        <label className="flex flex-col gap-3">
                            <span className="text-sm font-medium text-primary">Your message</span>
                            <textarea
                                name="message"
                                placeholder="Type your message..."
                                className="border border-solid rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-primary transition-colors min-h-20 resize-y"
                                required
                            ></textarea>
                        </label>
                    </div>
                    <Button type="submit" className="mt-4 self-end cursor-pointer">Send message</Button>
                </form>
             </Section>
    )
}
import { GithubIcon } from "@/assets/icons/GithubIcon"
import { Section } from "./Section"
import { buttonVariants } from "./ui/button"
import { LinkedinIcon } from "@/assets/icons/LinkedinIcon"
import { cn } from "@/lib/utils"

export const Header = () => {
    return (
        <header className="bg-background text-foreground sticky-top-0 ">
            <Section className="flex items-center justify-between">
                <h1 className="text-lg font-bold text-primary">Julien Joecker</h1>
                <div className="flex-1"></div>
                <nav className="flex items-center gap-2">
                    <a
                        href="https://github.com/Jujock004/"
                        target="_blank"
                        className={cn(buttonVariants({ variant: "outline" }), "size-10 p-0")}>
                        <GithubIcon size={18} className="text-foreground" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/julien-joecker/"
                        target="_blank"
                        className={cn(buttonVariants({ variant: "outline" }), "size-10 p-0")}>
                        <LinkedinIcon size={18} className="text-foreground" />
                    </a>
                </nav>
            </Section>
        </header >
    )
}
import { GithubIcon } from "@/assets/icons/GithubIcon"
import { Section } from "./Section"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LinkedinIcon } from "@/assets/icons/LinkedinIcon"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"


export const Hero = () => {
    return (
        <Section className="flex flex-col items-center justify-center gap-8 text-center py-20">
            <Avatar className="size-60">
                <AvatarImage src="https://avatars.githubusercontent.com/u/179485912?v=4" alt="Avatar" />
                <AvatarFallback>JJ</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-4xl font-bold text-primary">Hi, I’m Julien 👋</h1>
                <p className="text-lg text-muted-foreground">I’m a software engineer with a passion for building new projects.</p>
                <p className="text-lg text-muted-foreground">I love to learn new technologies and improve my skills.</p>
            </div>
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
    )
}
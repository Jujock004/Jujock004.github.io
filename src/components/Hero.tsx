import { GithubIcon } from "@/assets/icons/GithubIcon"
import { Section } from "./Section"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LinkedinIcon } from "@/assets/icons/LinkedinIcon"
import { Button, buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import { ProjectCard } from "./ProjectCard"
import { projectList } from "@/utils/projects"
import { Info, MapPin } from "lucide-react";
import { useEffect, useState } from "react"
import getAge from "@/utils/age"

interface Project {
    name: string
    description: string
    image: string
    link: string
}

const projects = projectList as Project[]

const TypeWriter = ({ text, delay = 50 }: { text: string; delay?: number }) => {
    const [currentText, setCurrentText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex])
                setCurrentIndex(prevIndex => prevIndex + 1)
            }, delay)

            return () => clearTimeout(timeout)
        }
    }, [currentIndex, delay, text])

    return <span>{currentText}</span>
}

export const Hero = () => {
    return (
        <div className="scroll-smooth">
            <Section className="flex flex-col items-center justify-center gap-8 text-center min-h-screen" id="hero">
                <Avatar className="size-60 hover:scale-110 transition-all duration-300 hover:rotate-4">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/179485912?v=4" alt="Avatar" />
                    <AvatarFallback>JJ</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-4xl font-bold text-primary">
                        <TypeWriter text="Hi, I'm Julien 👋" />
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        <TypeWriter text="A web developer passionate in building new projects." delay={30} />
                    </p>
                </div>
                <nav className="flex items-center gap-2">
                    <a
                        href="https://github.com/Jujock004/"
                        target="_blank"
                        className={cn(buttonVariants({ variant: "outline" }), "size-10 p-0 rounded-full")}>
                        <GithubIcon size={18} className="text-foreground" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/julien-joecker/"
                        target="_blank"
                        className={cn(buttonVariants({ variant: "outline" }), "size-10 p-0 rounded-full")}>
                        <LinkedinIcon size={18} className="text-foreground" />
                    </a>
                </nav>
                <div className="flex items-center gap-4">
                    <Button onClick={() => window.open('mailto:julien.joecker@gmail.com')} className="text-lg rounded-full cursor-pointer">Contact me</Button>
                    <Button onClick={() => window.open('src/assets/files/CV_Julien_Joecker.pdf')} className="text-lg rounded-full cursor-pointer">My resume</Button>
                </div>
            </Section>
            <Section className="flex flex-col justify-center gap-8 py-20 scroll-mt-20" id="about">
                <h1 className="text-2xl font-bold ">About me</h1>
                <div className="border border-solid bg-background text-foreground flex flex-col items-center gap-6 p-4 rounded-sm">
                    <p className="text-muted-foreground text-justify">
                        Hi, I'm Julien, {getAge()} years old.
                        <br /><br />
                        After 5 years working in marketing, I chose to shift careers and dive into web development — a field that had intrigued me for years. I joined Wild Code School to train as a full-stack developer, and successfully earned my Web & Mobile Web Developer certificate.
                        Next, I’ll be continuing my journey with a Bachelor’s in Web Development at Ynov Campus starting September 2025, through a work-study program, aiming to earn the official title of Software designer and developer.</p>
                    <Button className="h-12 cursor-pointer self-start" variant="outline"><Info />My journey</Button>
                </div>
                <p className="flex gap-4 italic"><MapPin /> Toulouse, France</p>
            </Section>
            <Section className="flex flex-col justify-center gap-8 py-20 scroll-mt-20" id="projects">
                <h1 className="text-2xl font-bold flex justify-end">My latest projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.name}
                            title={project.name}
                            description={project.description}
                            image={project.image}
                            link={project.link}
                        />
                    ))}
                </div>
            </Section>
            <Section className="flex flex-col justify-center gap-8 sm:py-20 scroll-mt-20" id="stack">
                <h1 className="text-2xl font-bold flex justify-start">My stack</h1>
                <div className="border border-solid bg-background text-foreground flex flex-col items-center sm:flex-row justify-around gap-4 p-4 rounded-sm relative overflow-hidden hover:bg-primary/10 transition-colors">
                    <img className="transition-all duration-500 transform hover:scale-110" width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="react-logo" title="React" />
                    <img className="transition-all duration-500 transform hover:scale-110" width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" alt="node-logo" title="Node" />
                    <img className="transition-all duration-500 transform hover:scale-110" width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="tailwind-logo" title="Tailwind" />
                    <img className="transition-all duration-500 transform hover:scale-110" width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg" alt="mysql-logo" title="MySQL"/>
                </div>
            </Section>
            <Section className="flex flex-col justify-center gap-8 py-20 scroll-mt-20" id="contact">
                <h1 className="text-2xl font-bold flex justify-start">Let's work together!</h1>
                <p className="text-muted-foreground">I'm always looking for new challenges and opportunities to grow. If you have a project in mind or just want to say hi, don't hesitate to contact me.</p>
                <Button onClick={() => window.open('mailto:julien.joecker@gmail.com')} className="text-lg rounded-full cursor-pointer">Contact me</Button>
            </Section>
        </div>
    )
}
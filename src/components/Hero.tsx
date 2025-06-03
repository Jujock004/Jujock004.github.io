import { GithubIcon } from "@/assets/icons/GithubIcon"
import { Section } from "./Section"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LinkedinIcon } from "@/assets/icons/LinkedinIcon"
import { Button, buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import { ProjectCard } from "./ProjectCard"
import { projectList } from "@/utils/projects"
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react"

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
            <Section className="flex flex-col items-center justify-center gap-8 text-center py-20">
                <Avatar className="size-60 hover:scale-110 transition-all duration-300 hover:rotate-4">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/179485912?v=4" alt="Avatar" />
                    <AvatarFallback>JJ</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-4xl font-bold text-primary">
                        <TypeWriter text="Hi, I'm Julien 👋" />
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        <TypeWriter text="I'm a web developer passionate in building new projects." delay={30} />
                    </p>
                    <p className="text-lg text-muted-foreground">
                        <TypeWriter text="I love to learn new technologies and improve my skills." delay={30} />
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
            <Section className="flex flex-col justify-center gap-8 py-20" id="about">
                <h1 className="text-2xl font-bold ">About me</h1>
                <div className="border border-solid bg-background text-foreground flex flex-col items-center gap-2 p-4 rounded-sm">
                    <p className="text-muted-foreground text-justify">I am a passionate junior developer with a 5-year background in marketing, which has given me a strong understanding of user behavior and the importance of creating solutions that truly resonate with the end-user. I love exploring new technologies and frameworks, and I’m always excited to start fresh projects that challenge my creativity and problem-solving skills.</p>
                </div>
                <p className="flex gap-4 italic"><MapPin /> Toulouse</p>
            </Section>
            <Section className="flex flex-col justify-center gap-8 py-20" id="projects">
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
            <Section className="flex flex-col justify-center gap-8 py-20" id="stack">
                <h1 className="text-2xl font-bold flex justify-start">My stack</h1>
                <div className="border border-solid bg-background text-foreground flex flex-col items-center sm:flex-row justify-around gap-4 p-4 rounded-sm relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/10 before:to-secondary/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                    <img className="transition-all duration-500 transform hover:scale-110 hover:-translate-y-2" width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="react-logo" />
                    <img className="transition-all duration-500 transform hover:scale-110 hover:-translate-y-2" width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="node-logo" />
                    <img className="transition-all duration-500 transform hover:scale-110 hover:-translate-y-2" width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="tailwind-logo" />
                    <img className="transition-all duration-500 transform hover:scale-110 hover:-translate-y-2" width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="mysql-logo" />
                </div>
            </Section>
            <Section className="flex flex-col justify-center gap-8 py-20" id="contact">
                <h1 className="text-2xl font-bold flex justify-start">Want to work with me?</h1>
                <p className="text-muted-foreground">I'm always looking for new challenges and opportunities to grow. If you have a project in mind or just want to say hi, don't hesitate to contact me.</p>
                <Button onClick={() => window.open('mailto:julien.joecker@gmail.com')} className="text-lg rounded-full cursor-pointer">Contact me</Button>
            </Section>
        </div>
    )
}
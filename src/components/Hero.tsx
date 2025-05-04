import { GithubIcon } from "@/assets/icons/GithubIcon"
import { Section } from "./Section"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LinkedinIcon } from "@/assets/icons/LinkedinIcon"
import { Button, buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import { ProjectCard } from "./ProjectCard"
import { projectList } from "@/utils/projects"

interface Project {
    name: string
    description: string
    image: string
    link: string
}

const projects = projectList as Project[]

export const Hero = () => {
    return (
        <>
            <Section className="flex flex-col items-center justify-center gap-8 text-center py-20">
                <Avatar className="size-60">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/179485912?v=4" alt="Avatar" />
                    <AvatarFallback>JJ</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-4xl font-bold text-primary">Hi, I’m Julien 👋</h1>
                    <p className="text-lg text-muted-foreground">I’m a web developer passionate in building new projects.</p>
                    <p className="text-lg text-muted-foreground">I love to learn new technologies and improve my skills.</p>
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
            <Section className="flex flex-col justify-center gap-8 py-20">
                <h1 className="text-2xl font-bold ">About me</h1>
                <div className="border border-solid bg-background text-foreground flex flex-col items-center gap-2 p-4 rounded-sm">
                    <p className="text-muted-foreground">I am a developer passionate about creating innovative projects and learning new technologies. I enjoy tackling technical challenges and working in a team to achieve common goals.</p>
                </div>
            </Section>
            <Section className="flex flex-col justify-center gap-8 py-20">
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
        </>
    )
}
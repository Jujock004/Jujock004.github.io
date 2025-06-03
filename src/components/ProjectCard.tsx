import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
    title: string
    description: string
    image: string
    link: string
}

export const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => {
    return (
        <a href={link} target="_blank" className="group h-full">
            <Card className="overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl relative before:absolute before:inset-0 before:z-10 before:border before:border-transparent before:rounded-lg hover:before:border-gradient-to-r hover:before:from-primary hover:before:to-secondary h-full flex flex-col">
                <CardHeader className="p-0">
                    <img src={image} alt={title} className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent className="p-4 flex-1 flex flex-col">
                    <CardTitle className="mb-2">{title}</CardTitle>
                    <CardDescription className="flex-1">{description}</CardDescription>
                </CardContent>
            </Card>
        </a>
    )
}
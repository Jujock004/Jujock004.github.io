export const ProjectCard = (props: { title: string; description: string; image: string; link: string }) => {
    return (
        <div className="border border-solid bg-background text-foreground flex flex-col items-center gap-2 p-4 rounded-sm">
            <div className="flex items-center justify-center w-full h-60 overflow-hidden rounded-md">
                <img
                    src={props.image}
                    alt={props.title}
                    className="object-cover p-8 transition-transform duration-300 transform hover:scale-105"
                />
            </div>
            <h1 className="text-lg font-bold">{props.title}</h1>
            <p className="text-muted-foreground text-center">{props.description}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View Project
            </a>
        </div>
    )
}
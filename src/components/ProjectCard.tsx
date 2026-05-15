import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { GithubIcon } from '@/assets/icons/GithubIcon';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github: string;
  tags: string[];
}

export const ProjectCard = ({
  title,
  description,
  image,
  github,
  tags,
}: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden gap-0 py-0 transition-all duration-200 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="h-40 overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <CardContent className="flex flex-col flex-1 gap-2 px-4 py-4">
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {description}
        </p>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex items-center justify-between px-4 pb-4 pt-3 border-t border-border">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub — ${title}`}
          className="ml-3 flex-shrink-0 w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
        >
          <GithubIcon size={14} />
        </a>
      </CardFooter>
    </Card>
  );
};

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { GithubIcon } from '@/assets/icons/GithubIcon';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string | null;
  github: string | null;
  tags: string[];
  inProgress?: boolean;
}

export const ProjectCard = ({
  title,
  description,
  image,
  github,
  tags,
  inProgress = false,
}: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden gap-0 py-0 transition-all duration-200 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="h-40 overflow-hidden bg-muted relative">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="m3 9 4-4 4 4 4-4 4 4" />
              <path d="M3 15h18" />
            </svg>
          </div>
        )}
        {inProgress && (
          <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-full bg-background/90 border border-border text-foreground backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            In progress
          </span>
        )}
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
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub — ${title}`}
            className="ml-3 flex-shrink-0 w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
          >
            <GithubIcon size={14} />
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

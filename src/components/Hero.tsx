import { GithubIcon } from '@/assets/icons/GithubIcon';
import { Section } from './Section';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LinkedinIcon } from '@/assets/icons/LinkedinIcon';
import { Button, buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { ProjectCard } from './ProjectCard';
import { projectList } from '@/utils/projects';
import { Info, MapPin, ChevronDown, Briefcase, Code } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Form } from './Form';
import JourneyModal from './JourneyModal';
import useModal from '@/hooks/useModal';
import useScrollToSection from '@/hooks/useScrollToSection';

interface Project {
  name: string;
  description: string;
  image: string | null;
  github: string | null;
  tags: string[];
  inProgress: boolean;
}

const projects = projectList as Project[];

const devicons = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const stackCategories = [
  {
    label: 'Frontend',
    items: [
      { name: 'React', icon: `${devicons}/react/react-original.svg` },
      {
        name: 'TypeScript',
        icon: `${devicons}/typescript/typescript-original.svg`,
      },
      {
        name: 'Tailwind CSS',
        icon: `${devicons}/tailwindcss/tailwindcss-original.svg`,
      },
      { name: 'Next.js', icon: `${devicons}/nextjs/nextjs-original.svg` },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', icon: `${devicons}/nodejs/nodejs-plain.svg` },
      { name: 'PHP', icon: `${devicons}/php/php-original.svg` },
    ],
  },
  {
    label: 'Database & Tools',
    items: [
      { name: 'MySQL', icon: `${devicons}/mysql/mysql-original.svg` },
      { name: 'Git', icon: `${devicons}/git/git-original.svg` },
      { name: 'VS Code', icon: `${devicons}/vscode/vscode-original.svg` },
    ],
  },
];

const TypeWriter = ({ text, delay = 50 }: { text: string; delay?: number }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      setDone(true);
    }
  }, [currentIndex, delay, text]);

  return (
    <span>
      {currentText}
      {!done && (
        <span className="inline-block w-0.5 h-[1em] bg-current align-middle ml-0.5 animate-pulse" />
      )}
    </span>
  );
};

const scrollToSection = useScrollToSection().scrollToSection;

const ScrollIndicator = () => (
  <a
    href="#about"
    onClick={(e) => {
      e.preventDefault();
      scrollToSection('about');
    }}
    className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
    aria-label="Scroll vers la section suivante"
  >
    <span className="text-xs tracking-widest uppercase">Scroll</span>
    <ChevronDown className="h-4 w-4 animate-bounce" />
  </a>
);

const AvailabilityBadge = () => (
  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
    </span>
    Open to work
  </span>
);

export const Hero = () => {
  const { isShowing, toggle } = useModal();

  return (
    <div className="scroll-smooth">
      {/* ── Hero ── */}
      <Section
        className="relative flex flex-col items-center justify-center gap-8 text-center min-h-[calc(100dvh-4rem)] calc(100dvh - 4rem) md:min-h-screen"
        id="hero"
      >
        <Avatar className="size-60 hover:scale-110 transition-all duration-300 hover:rotate-4">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/179485912?v=4"
            alt="Avatar de Julien Joecker"
          />
          <AvatarFallback>JJ</AvatarFallback>
        </Avatar>

        <div className="flex flex-col items-center gap-3">
          <h1 className="text-4xl font-bold text-primary">Hi, I'm Julien 👋</h1>
          <p className="text-lg text-muted-foreground">
            <TypeWriter
              text="A web developer passionate in building new projects."
              delay={30}
            />
          </p>
          <AvailabilityBadge />
        </div>

        <nav className="flex items-center gap-2">
          <a
            href="https://github.com/Jujock004/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'size-10 p-0 rounded-full'
            )}
          >
            <GithubIcon size={18} className="text-foreground" />
          </a>
          <a
            href="https://www.linkedin.com/in/julien-joecker/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'size-10 p-0 rounded-full'
            )}
          >
            <LinkedinIcon size={18} className="text-foreground" />
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            onClick={() =>
              window.open(
                'mailto:julien.joecker@gmail.com?subject=Contacte depuis Portfolio&body=Bonjour Julien,'
              )
            }
            className="text-lg rounded-full cursor-pointer"
          >
            Contact me
          </Button>
          <Button
            variant="outline"
            onClick={() => window.open('/CV_Julien_Joecker.pdf')}
            className="text-lg rounded-full cursor-pointer"
          >
            My resume
          </Button>
        </div>

        <ScrollIndicator />
      </Section>

      {/* ── About ── */}
      <Section
        className="flex flex-col justify-center gap-8 py-20 scroll-mt-20"
        id="about"
      >
        <h2 className="text-2xl font-bold">About me</h2>
        <div className="border bg-background text-foreground flex flex-col gap-6 p-6 rounded-xl">
          {/* Mini profile */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-border bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground flex-shrink-0">
              JJ
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-foreground">
                Julien Joecker
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> Toulouse
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Briefcase className="h-3 w-3" /> Freelance
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Code className="h-3 w-3" /> Full-stack
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            I made the jump from 5 years in marketing to full-stack development
            and earned my Web & Mobile Developer certificate at Wild Code
            School. Since then, I've been sharpening my skills the self-taught
            way — building real projects and taking on freelance work.
          </p>

          {/* CTA */}
          <Button
            className="w-fit cursor-pointer"
            variant="outline"
            onClick={toggle}
          >
            <Info className="mr-2 h-4 w-4" />
            My journey
          </Button>
        </div>
      </Section>

      {/* ── Projects ── */}
      <Section
        className="flex flex-col justify-center gap-8 py-20 scroll-mt-20"
        id="projects"
      >
        <h1 className="text-2xl font-bold flex justify-end">
          My latest projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              title={project.name}
              description={project.description}
              image={project.image}
              github={project.github}
              tags={project.tags}
              inProgress={project.inProgress}
            />
          ))}
        </div>
      </Section>

      {/* ── Stack ── */}
      <Section
        className="flex flex-col justify-center gap-8 sm:py-20 scroll-mt-20"
        id="stack"
      >
        <h2 className="text-2xl font-bold">My stack</h2>
        <div className="border bg-background text-foreground flex flex-col gap-6 p-6 rounded-sm">
          {stackCategories.map((cat) => (
            <div key={cat.label}>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border border-border bg-muted text-muted-foreground"
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-4 h-4 object-contain"
                    />
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Form />
      <JourneyModal isOpen={isShowing} onClose={toggle} />
    </div>
  );
};

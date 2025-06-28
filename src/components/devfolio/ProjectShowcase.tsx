import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
    aiHint: 'ecommerce website',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with drag-and-drop boards, real-time updates, and user authentication.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'Firebase', 'Zustand', 'Framer Motion'],
    liveUrl: '#',
    repoUrl: '#',
    aiHint: 'task manager',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my work and skills, featuring a modern design and smooth animations.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'GenAI', 'Shadcn/UI', 'TypeScript'],
    liveUrl: '#',
    repoUrl: '#',
    aiHint: 'portfolio design',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets with various chart types and filtering options.',
    image: 'https://placehold.co/600x400.png',
    tags: ['D3.js', 'React', 'Node.js', 'Express'],
    liveUrl: '#',
    repoUrl: '#',
    aiHint: 'data dashboard',
  }
];

export function ProjectShowcase() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here are some of the projects I've worked on. Explore them to see my skills in action.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mt-12">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 shadow-lg transition-all hover:shadow-primary/20 hover:border-primary/50">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover aspect-video"
                  data-ai-hint={project.aiHint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl text-primary">{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-end gap-2">
                 <Button asChild variant="outline">
                   <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                     Code
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github ml-2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
                   </a>
                 </Button>
                 <Button asChild className="bg-primary hover:bg-primary/90">
                   <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                     Live Demo
                     <ExternalLink className="ml-2" />
                   </a>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

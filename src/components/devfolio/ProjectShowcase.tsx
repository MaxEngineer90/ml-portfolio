'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { useI18n } from '@/context/i18n-provider';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: 'https://github.com/MaxEngineer90/e-commerce-platform',
    aiHint: 'ecommerce website',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with drag-and-drop boards, real-time updates, and user authentication.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'Firebase', 'Zustand', 'Framer Motion'],
    liveUrl: '#',
    repoUrl: 'https://github.com/MaxEngineer90/task-management-app',
    aiHint: 'task manager',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my work and skills, featuring a modern design and smooth animations.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'GenAI', 'Shadcn/UI', 'TypeScript'],
    liveUrl: '#',
    repoUrl: 'https://github.com/MaxEngineer90/portfolio-website',
    aiHint: 'portfolio design',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets with various chart types and filtering options.',
    image: 'https://placehold.co/600x400.png',
    tags: ['D3.js', 'React', 'Node.js', 'Express'],
    liveUrl: '#',
    repoUrl: 'https://github.com/MaxEngineer90/data-visualization-dashboard',
    aiHint: 'data dashboard',
  }
];

export function ProjectShowcase() {
  const { t } = useI18n();

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline tracking-tighter sm:text-4xl md:text-5xl">{t('ProjectShowcase.title')}</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t('ProjectShowcase.subtitle')}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mt-12">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 shadow-lg transition-all hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
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
                     {t('ProjectShowcase.codeButton')}
                     <Github className="ml-2" />
                   </a>
                 </Button>
                 <Button asChild className="bg-primary hover:bg-primary/90">
                   <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                     {t('ProjectShowcase.demoButton')}
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

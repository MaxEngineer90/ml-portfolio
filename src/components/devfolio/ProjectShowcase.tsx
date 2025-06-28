import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { getI18n } from '@/lib/i18n-server';

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  topics: string[];
  language: string | null;
}

async function getGitHubProjects(): Promise<GitHubRepo[]> {
  try {
    // Fetch repositories sorted by the last update time, descending
    const response = await fetch('https://api.github.com/users/MaxEngineer90/repos?sort=updated&direction=desc', {
      next: { revalidate: 3600 } // Re-fetch data at most once per hour
    });

    if (!response.ok) {
      console.error(`Failed to fetch GitHub projects: ${response.status} ${response.statusText}`);
      return [];
    }

    const data: GitHubRepo[] = await response.json();
    return data;
  } catch (error) {
    console.error('An error occurred while fetching GitHub projects:', error);
    return [];
  }
}

export async function ProjectShowcase() {
  const { t } = await getI18n();
  const allProjects = await getGitHubProjects();
  const projects = allProjects.slice(0, 4); // Display the 4 most recently updated projects

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline tracking-tighter sm:text-4xl md:text-5xl">{t('ProjectShowcase.title')}</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t('ProjectShowcase.subtitle')}
          </p>
        </div>
        {projects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mt-12">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 shadow-lg transition-all hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1 flex flex-col">
                <CardHeader className="p-0">
                  <Image
                    src={'https://placehold.co/600x400.png'}
                    alt={project.name}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover aspect-video"
                    data-ai-hint={project.name.replace(/-/g, ' ').split(' ').slice(0, 2).join(' ')}
                  />
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="font-headline text-2xl text-primary">{project.name}</CardTitle>
                  <CardDescription className="mt-2 h-12 overflow-hidden text-ellipsis">
                    {project.description || t('ProjectShowcase.noDescription')}
                  </CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.topics.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                    {project.language && <Badge variant="secondary">{project.language}</Badge>}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-end gap-2">
                   <Button asChild variant="outline">
                     <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                       {t('ProjectShowcase.codeButton')}
                       <Github className="ml-2" />
                     </a>
                   </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center mt-12 text-muted-foreground">
            <p>{t('ProjectShowcase.noProjects')}</p>
          </div>
        )}
      </div>
    </section>
  );
}

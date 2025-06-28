'use client';

import { useEffect, useState } from 'react';
import { useI18n } from '@/context/i18n-provider';
import { ProjectGrid } from './ProjectGrid';
import { Skeleton } from '../ui/skeleton';

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
    const response = await fetch('https://api.github.com/users/MaxEngineer90/repos?sort=updated&direction=desc');

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

function LoadingSkeleton() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mt-12">
            {[...Array(4)].map((_, i) => (
                <Card key={i} className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg flex flex-col">
                     <CardHeader className="p-6 pb-0">
                        <Skeleton className="h-8 w-1/2" />
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3 mt-2" />
                        <div className="mt-4 flex flex-wrap gap-2">
                            <Skeleton className="h-6 w-16" />
                            <Skeleton className="h-6 w-20" />
                        </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 flex justify-end">
                         <Skeleton className="h-10 w-24" />
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}

import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

export function ProjectShowcase() {
  const { t } = useI18n();
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      const fetchedProjects = await getGitHubProjects();
      setProjects(fetchedProjects);
      setIsLoading(false);
    };
    fetchProjects();
  }, []);


  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline tracking-tighter sm:text-4xl md:text-5xl">{t('ProjectShowcase.title')}</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t('ProjectShowcase.subtitle')}
          </p>
        </div>
        {isLoading ? <LoadingSkeleton /> : <ProjectGrid projects={projects} />}
      </div>
    </section>
  );
}

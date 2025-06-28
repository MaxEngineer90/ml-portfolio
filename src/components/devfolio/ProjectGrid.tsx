'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ChevronDown, ChevronUp } from 'lucide-react';
import { useI18n } from '@/context/i18n-provider';

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  topics: string[];
  language: string | null;
}

export function ProjectGrid({ projects }: { projects: GitHubRepo[] }) {
    const { t } = useI18n();
    const [showAll, setShowAll] = useState(false);

    const visibleProjects = showAll ? projects : projects.slice(0, 4);

    if (projects.length === 0) {
        return (
            <div className="text-center mt-12 text-muted-foreground">
                <p>{t('ProjectShowcase.noProjects')}</p>
            </div>
        );
    }

    return (
        <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mt-12">
                {visibleProjects.map((project) => (
                    <Card key={project.id} className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 shadow-lg transition-all hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1 flex flex-col">
                        <CardHeader className="p-6 pb-0">
                            <CardTitle className="font-headline text-2xl text-primary">{project.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 flex-grow">
                            <CardDescription className="h-12 overflow-hidden text-ellipsis">
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
                            <Button asChild variant="outline" className="transition-transform duration-200 hover:-translate-y-0.5">
                                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                                    {t('ProjectShowcase.codeButton')}
                                    <Github className="ml-2" />
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            {projects.length > 4 && (
                <div className="mt-12 text-center">
                    <Button variant="ghost" onClick={() => setShowAll(!showAll)}>
                        {showAll ? t('ProjectShowcase.showLess') : t('ProjectShowcase.showMore')}
                        {showAll ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                    </Button>
                </div>
            )}
        </>
    );
}

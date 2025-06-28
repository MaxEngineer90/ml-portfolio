'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Code, Database, Github, KeyRound, Layers, Rocket, Server } from 'lucide-react';
import { useI18n } from '@/context/i18n-provider';

const skills = {
  'frontend': [
    { name: 'HTML', icon: <Code className="h-5 w-5 text-accent" /> },
    { name: 'CSS/SCSS', icon: <Layers className="h-5 w-5 text-accent" /> },
    { name: 'Angular', icon: <Code className="h-5 w-5 text-accent" /> },
    { name: 'TypeScript', icon: <Code className="h-5 w-5 text-accent" /> },
    { name: 'Cypress', icon: <Rocket className="h-5 w-5 text-accent" /> },
    { name: 'Playwright', icon: <Rocket className="h-5 w-5 text-accent" /> },
  ],
  'backend': [
    { name: 'Java', icon: <Server className="h-5 w-5 text-accent" /> },
    { name: 'Spring', icon: <Server className="h-5 w-5 text-accent" /> },
    { name: 'Docker', icon: <Rocket className="h-5 w-5 text-accent" /> },
    { name: 'Keycloak', icon: <KeyRound className="h-5 w-5 text-accent" /> },
    { name: 'SQL', icon: <Database className="h-5 w-5 text-accent" /> },
  ],
  'tools': [
    { name: 'Jest', icon: <Rocket className="h-5 w-5 text-accent" /> },
    { name: 'Git & GitHub', icon: <Github className="h-5 w-5 text-accent" /> },
    { name: 'Atlassian Suite', icon: <Briefcase className="h-5 w-5 text-accent" /> },
  ]
};

export function AboutSection() {
  const { t } = useI18n();
  const skillCategories = {
    'frontend': t('AboutSection.frontend'),
    'backend': t('AboutSection.backend'),
    'tools': t('AboutSection.tools')
  }

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-headline tracking-tighter sm:text-4xl md:text-5xl">{t('AboutSection.title')}</h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t('AboutSection.bio')}
            </p>
          </div>
          <div className="space-y-8">
            {Object.entries(skills).map(([categoryKey, skillList]) => (
              <Card key={categoryKey} className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">{skillCategories[categoryKey as keyof typeof skillCategories]}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skillList.map(skill => (
                    <Badge key={skill.name} variant="outline" className="flex items-center gap-2 px-3 py-1 text-base border-accent text-accent-foreground bg-accent/10 hover:bg-accent/20 transition-colors">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { getI18n } from '@/lib/i18n-server';
import { ProjectGrid } from './ProjectGrid';

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

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline tracking-tighter sm:text-4xl md:text-5xl">{t('ProjectShowcase.title')}</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t('ProjectShowcase.subtitle')}
          </p>
        </div>
        <ProjectGrid projects={allProjects} />
      </div>
    </section>
  );
}

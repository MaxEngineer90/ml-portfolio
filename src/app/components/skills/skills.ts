import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateDirective } from '../../directives/translation';
import { Skill } from '../../types/skill';
import { SkillBadge } from './skill-badge/skill-badge';

@Component({
  selector: 'app-skills',
  imports: [SkillBadge, TranslateDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  frontend: Skill[] = [
    { icon: 'html5', label: 'HTML5' },
    { icon: 'css', label: 'CSS/SCSS' },
    { icon: 'tailwindcss', label: 'Tailwind CSS' },
    { icon: 'angular', label: 'Angular' },
    { icon: 'typescript', label: 'TypeScript' },
  ];

  backend: Skill[] = [
    { icon: 'java', label: 'Java' },
    { icon: 'spring', label: 'Spring Framework' },
    { icon: 'docker', label: 'Docker' },
    { icon: 'keycloak', label: 'Keycloak' },
    { icon: 'postgresql', label: 'SQL' },
  ];

  testing: Skill[] = [
    { icon: 'jest', label: 'Jest' },
    { icon: 'junit5', label: 'JUnit' },
    { icon: 'cypress', label: 'Cypress' },
    { icon: 'playwright', label: 'Playwright' },
  ];

  tools: Skill[] = [
    { icon: 'vscode', label: 'VSCode' },
    { icon: 'intellijidea', label: 'IntelliJ IDEA' },
    { icon: 'git', label: 'Git' },
    { icon: 'github', label: 'Github' },
    { icon: 'atlassian', label: 'Atlassian Suite' },
  ];
}

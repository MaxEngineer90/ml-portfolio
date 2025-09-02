export type Language = 'de' | 'en';

export interface Translations {
  nav: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  menu: {
    close: string;
    open: string;
    social: string;
  };
  hero: {
    greeting: string;
    name: string;
    titles: {
      cleanCode: string;
      fullstack: string;
      expert: string;
      problemSolver: string;
    };
    description: string;
    buttons: {
      projects: string;
      contact: string;
      projectsAria: string;
      contactAria: string;
    };
  };
  buttons: {
    projects: string;
    contact: string;
  };
  language: {
    switch: string;
  };
  about: {
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    stats: {
      experience: string;
      projects: string;
    };
  };
  skills: {
    testing: string;
    tools: string;
  };
  repo: {
    updated: string;
    view: string;
    viewAria: string;
    demo: string;
    demoAria: string;
    showMore:string;
    showLess:string;
  };
  errors: {
    githubLoadFailed: string;
  };
}

export type TranslationKey =
  | 'nav.about'
  | 'nav.projects'
  | 'nav.skills'
  | 'nav.contact'
  | 'menu.close'
  | 'menu.open'
  | 'menu.social'
  | 'hero.greeting'
  | 'hero.name'
  | 'hero.titles.cleanCode'
  | 'hero.titles.fullstack'
  | 'hero.titles.expert'
  | 'hero.titles.problemSolver'
  | 'hero.description'
  | 'hero.buttons.projects'
  | 'hero.buttons.contact'
  | 'hero.buttons.projectsAria'
  | 'hero.buttons.contactAria'
  | 'buttons.projects'
  | 'buttons.contact'
  | 'language.switch'
  | 'about.description1'
  | 'about.description2'
  | 'about.description3'
  | 'about.description4'
  | 'about.stats.experience'
  | 'about.stats.projects'
  | 'skills.testing'
  | 'skills.tools'
  | 'repo.updated'
  | 'repo.view'
  | 'repo.viewAria'
  | 'repo.demo'
  | 'repo.demoAria'
  | 'repo.showMore'
  | 'repo.showLess'
  | 'errors.githubLoadFailed';

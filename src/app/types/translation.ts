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
  | 'language.switch';

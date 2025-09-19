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
    showMore: string;
    showLess: string;
  };
  errors: {
    githubLoadFailed: string;
  };
  contact: {
    heading: string;
    subheading: string;
    fields: {
      name: string;
      email: string;
      message: string;
      phone: string;
      subject: string;
      files: string;
    };
    placeholders: {
      name: string;
      email: string;
      message: string;
      phone: string;
      subject: string;
    };
    errors: {
      nameRequired: string;
      emailRequired: string;
      subjectRequired: string;
      emailInvalid: string;
      messageRequired: string;
      tooShort: string;
      tooLong: string;
    };
    actions: {
      send: string;
      sending: string;
      retry: string;
    };
    status: {
      successTitle: string;
      successBody: string;
      errorTitle: string;
      errorBody: string;
    };
    mail: {
      subject: string;
    };
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
  | 'errors.githubLoadFailed'
  | 'contact.heading'
  | 'contact.subheading'
  | 'contact.fields.name'
  | 'contact.fields.email'
  | 'contact.fields.message'
  | 'contact.fields.phone'
  | 'contact.fields.subject'
  | 'contact.fields.files'
  | 'contact.placeholders.name'
  | 'contact.placeholders.email'
  | 'contact.placeholders.message'
  | 'contact.placeholders.phone'
  | 'contact.placeholders.subject'
  | 'contact.errors.nameRequired'
  | 'contact.errors.emailRequired'
  | 'contact.errors.subjectRequired'
  | 'contact.errors.emailInvalid'
  | 'contact.errors.messageRequired'
  | 'contact.errors.tooShort'
  | 'contact.errors.tooLong'
  | 'contact.actions.send'
  | 'contact.actions.sending'
  | 'contact.actions.retry'
  | 'contact.status.successTitle'
  | 'contact.status.successBody'
  | 'contact.status.errorTitle'
  | 'contact.status.errorBody'
  | 'contact.mail.subject';

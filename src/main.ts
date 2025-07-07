import { bootstrapApplication } from '@angular/platform-browser';
import { initFlowbite } from 'flowbite';
import { App } from './app/app';
import { appConfig } from './app/app.config';

bootstrapApplication(App, appConfig)
  .then(() => {
    initFlowbite();
  })
  .catch((err) => console.error(err));

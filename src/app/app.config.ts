import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { GITHUB_BASE_URL } from './tokens/github/github-base-url';
import { GITHUB_USERNAME } from './tokens/github/github-username';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch()),
    { provide: GITHUB_BASE_URL, useValue: 'https://api.github.com' },
    { provide: GITHUB_USERNAME, useValue: 'MaxEngineer90' },
  ],
};

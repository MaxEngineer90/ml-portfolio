import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  CONTACT_HONEYPOT_FIELD,
  CONTACT_NEXT_URL,
  CONTACT_SUBJECT_TEMPLATE,
  FORM_TAXI_ENDPOINT,
  FORM_TAXI_FORM_CODE,
} from './tokens/contact/contact';
import { GITHUB_BASE_URL } from './tokens/github/github-base-url';
import { GITHUB_USERNAME } from './tokens/github/github-username';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch()),
    { provide: GITHUB_BASE_URL, useValue: 'https://api.github.com' },
    { provide: GITHUB_USERNAME, useValue: 'MaxEngineer90' },
    { provide: FORM_TAXI_ENDPOINT, useValue: 'https://form.taxi/s' },
    { provide: FORM_TAXI_FORM_CODE, useValue: 'mw1oxkdi' },
    { provide: CONTACT_HONEYPOT_FIELD, useValue: '_gotcha' },
    {
      provide: CONTACT_SUBJECT_TEMPLATE,
      useValue: 'Kontaktanfrage – {{name}}',
    },
    { provide: CONTACT_NEXT_URL, useValue: null },
  ],
};

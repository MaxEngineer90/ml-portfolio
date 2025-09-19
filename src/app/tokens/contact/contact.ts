import { InjectionToken } from '@angular/core';

export const FORM_TAXI_ENDPOINT = new InjectionToken<string>(
  'FORM_TAXI_ENDPOINT',
);

export const FORM_TAXI_FORM_CODE = new InjectionToken<string>(
  'FORM_TAXI_FORM_CODE',
);

export const CONTACT_HONEYPOT_FIELD = new InjectionToken<string>(
  'CONTACT_HONEYPOT_FIELD',
);

export const CONTACT_SUBJECT_TEMPLATE = new InjectionToken<string>(
  'CONTACT_SUBJECT_TEMPLATE',
);

export const CONTACT_NEXT_URL = new InjectionToken<string | null>(
  'CONTACT_NEXT_URL',
);

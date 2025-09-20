import { TestBed } from '@angular/core/testing';

import { Contact } from './contact';
import {
  FORM_TAXI_ENDPOINT,
  FORM_TAXI_FORM_CODE,
  CONTACT_HONEYPOT_FIELD,
  CONTACT_SUBJECT_TEMPLATE,
  CONTACT_NEXT_URL,
} from '../../tokens/contact/contact';

describe('Contact', () => {
  let service: Contact;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Contact,
        { provide: FORM_TAXI_ENDPOINT, useValue: 'https://form.taxi/s' },
        { provide: FORM_TAXI_FORM_CODE, useValue: 'mw1oxkdi' },
        { provide: CONTACT_HONEYPOT_FIELD, useValue: '_gotcha' },
        {
          provide: CONTACT_SUBJECT_TEMPLATE,
          useValue: 'Kontaktanfrage – {{name}}',
        },
        { provide: CONTACT_NEXT_URL, useValue: null },
      ],
    });
    service = TestBed.inject(Contact);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

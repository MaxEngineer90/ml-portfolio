import { describe, it, beforeEach, expect } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactForm } from './contact-form';
import {
  CONTACT_HONEYPOT_FIELD,
  CONTACT_NEXT_URL,
  CONTACT_SUBJECT_TEMPLATE,
  FORM_TAXI_ENDPOINT,
  FORM_TAXI_FORM_CODE,
} from '../../tokens/contact/contact';

describe('ContactForm', () => {
  let fixture: ComponentFixture<ContactForm>;
  let component: ContactForm;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactForm],
      providers: [
        { provide: FORM_TAXI_ENDPOINT, useValue: 'https://form.taxi/s' },
        { provide: FORM_TAXI_FORM_CODE, useValue: 'mw1oxkdi' },
        { provide: CONTACT_HONEYPOT_FIELD, useValue: '_gotcha' },
        {
          provide: CONTACT_SUBJECT_TEMPLATE,
          useValue: 'Kontaktanfrage – {{name}}',
        },
        { provide: CONTACT_NEXT_URL, useValue: null },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

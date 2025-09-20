import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT, inject, Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import {
  CONTACT_HONEYPOT_FIELD,
  CONTACT_NEXT_URL,
  CONTACT_SUBJECT_TEMPLATE,
  FORM_TAXI_ENDPOINT,
  FORM_TAXI_FORM_CODE,
} from '../../tokens/contact/contact';
import { ContactPayload } from '../../types/contact-payload';
import { ContactSubmissionResult } from '../../types/contact-submission-result';

@Injectable({
  providedIn: 'root',
})
export class Contact {
  private readonly httpClient = inject(HttpClient);
  private readonly documentRef = inject(DOCUMENT);

  private readonly formTaxiEndpoint = inject(FORM_TAXI_ENDPOINT);
  private readonly formCode = inject(FORM_TAXI_FORM_CODE);

  private readonly honeypot = inject(CONTACT_HONEYPOT_FIELD);
  private readonly subjectTemplate = inject(CONTACT_SUBJECT_TEMPLATE);
  private readonly nextUrl = inject(CONTACT_NEXT_URL);

  submitContactForm(payload: ContactPayload) {
    const submissionUrl = this.buildSubmissionUrl();
    const requestBody = this.buildFormDataFromPayload(payload);
    const requestHeaders = this.buildDefaultHeaders();

    return this.httpClient
      .post(submissionUrl, requestBody, {
        headers: requestHeaders,
        observe: 'response',
      })
      .pipe(
        map(
          (response) =>
            ({
              success: response.status >= 200 && response.status < 300,
              httpStatus: response.status,
              data: response.body,
            }) as ContactSubmissionResult,
        ),
        catchError((error) =>
          of({
            success: false,
            httpStatus: error?.status ?? 0,
            data: error?.error ?? null,
          } as ContactSubmissionResult),
        ),
      );
  }

  private buildSubmissionUrl(): string {
    const base = this.formTaxiEndpoint.replace(/\/$/, '');
    const code = String(this.formCode).replace(/^\//, '');
    return `${base}/${code}`;
  }

  private getBrowserLanguage(): 'de' | 'en' {
    const langAttr = this.documentRef?.documentElement?.lang ?? '';
    const short = langAttr.slice(0, 2).toLowerCase();
    return (short === 'en' ? 'en' : 'de') as 'de' | 'en';
  }

  private renderSubjectLine(senderName: string): string {
    const template = this.subjectTemplate || 'Kontaktanfrage – {{name}}';
    return template.replace('{{name}}', senderName);
  }

  private buildFormDataFromPayload(payload: ContactPayload): FormData {
    const formData = new FormData();

    formData.set('name', payload.name);
    formData.set('email', payload.email);
    formData.set('message', payload.message);
    if (payload.phone) formData.set('phone', payload.phone);
    if (payload.subject) formData.set('subject', payload.subject);

    formData.set('_replyto', payload.email);
    formData.set('_subject', this.renderSubjectLine(payload.name));
    formData.set('_lang', this.getBrowserLanguage());

    if (this.honeypot) {
      formData.set(this.honeypot, '');
    }

    return formData;
  }

  private buildDefaultHeaders(): HttpHeaders {
    return new HttpHeaders({ Accept: 'application/json' });
  }
}

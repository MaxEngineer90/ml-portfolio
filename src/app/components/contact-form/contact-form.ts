import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs';
import { TranslateDirective } from '../../directives/translation';
import { Contact } from '../../services/contact/contact';
import { ContactPayload } from '../../types/contact-payload';
import { ContactSubmissionResult } from '../../types/contact-submission-result';
import { ContactSnackbar } from './contact-snackbar/contact-snackbar';
import { ContactSnackbarWrapper } from './contact-snackbar/contact-snackbar-wrapper';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateDirective,
    ContactSnackbar,
  ],
  templateUrl: './contact-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactForm {
  private readonly formBuilder = inject(FormBuilder);
  private readonly contactService = inject(Contact);
  private readonly contactSnackbar = inject(ContactSnackbarWrapper);

  readonly contactForm = this.formBuilder.nonNullable.group({
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(80)],
    ],
    email: [
      '',
      [Validators.required, Validators.email, Validators.maxLength(120)],
    ],
    phone: [''],
    subject: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(30)],
    ],
    message: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(2000),
      ],
    ],
  });

  readonly isSubmitting = signal(false);
  readonly submitErrorMessage = signal<string | null>(null);
  readonly submitSucceeded = signal(false);

  readonly formControls = this.contactForm.controls;
  readonly isSubmitDisabled = computed(
    () => !this.isFormValid() || this.isSubmitting(),
  );

  submitContactForm(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.isSubmitting.set(true);
    this.submitErrorMessage.set(null);
    this.submitSucceeded.set(false);

    const payload: ContactPayload = this.contactForm.getRawValue();
    this.contactService.submitContactForm(payload).subscribe({
      next: (result: ContactSubmissionResult) => {
        this.isSubmitting.set(false);
        if (result.success) {
          this.submitSucceeded.set(true);
          this.contactForm.reset();
          this.contactSnackbar.success();
        } else {
          this.contactSnackbar.error();
        }
      },
      error: () => {
        this.isSubmitting.set(false);
        this.contactSnackbar.error();
      },
    });
  }
  readonly isFormValid = toSignal(
    this.contactForm.statusChanges.pipe(
      startWith(this.contactForm.status),
      map((status) => status === 'VALID'),
    ),
    { initialValue: this.contactForm.valid },
  );
}

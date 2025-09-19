import { Injectable, inject } from '@angular/core';
import { Snackbar } from '../../../services/snackbar/snackbar';

@Injectable({ providedIn: 'root' })
export class ContactSnackbarWrapper {
  private readonly snackbarService = inject(Snackbar);

  success() {
    this.snackbarService.showSuccess({
      titleKey: 'contact.status.successTitle',
      bodyKey: 'contact.status.successBody',
      autoDismissMs: 4000,
    });
  }

  error() {
    this.snackbarService.showError({
      titleKey: 'contact.status.errorTitle',
      bodyKey: 'contact.status.errorBody',
    });
  }
}

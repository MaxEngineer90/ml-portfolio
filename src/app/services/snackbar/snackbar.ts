import { Injectable, Signal, signal } from '@angular/core';
import { SnackbarItem } from '../../types/snackbar-item';
import { TranslationKey } from '../../types/translation';

const MAX_SNACKS = 4;

@Injectable({
  providedIn: 'root',
})
export class Snackbar {
  private readonly itemsSignal = signal<Array<SnackbarItem>>([]);

  items(): Signal<Array<SnackbarItem>> {
    return this.itemsSignal.asReadonly();
  }

  showSuccess(args: {
    titleKey: TranslationKey;
    bodyKey?: TranslationKey;
    autoDismissMs?: number;
  }): string {
    const id = crypto.randomUUID();
    const snack: SnackbarItem = {
      id,
      variant: 'success',
      titleKey: args.titleKey,
      bodyKey: args.bodyKey,
      autoDismissMs: args.autoDismissMs ?? 4000,
      createdAt: Date.now(),
    };
    this.pushSnack(snack);
    return id;
  }

  showError(args: {
    titleKey: TranslationKey;
    bodyKey?: TranslationKey;
    confirmLabelKey?: TranslationKey;
  }): string {
    const id = crypto.randomUUID();
    const snack: SnackbarItem = {
      id,
      variant: 'error',
      titleKey: args.titleKey,
      bodyKey: args.bodyKey,
      createdAt: Date.now(),
    };
    this.pushSnack(snack);
    return id;
  }

  dismiss(id: string): void {
    this.itemsSignal.update((list) => list.filter((s) => s.id !== id));
  }

  private pushSnack(snack: SnackbarItem): void {
    this.itemsSignal.update((list) => {
      const next = [snack, ...list]; // neueste oben
      return next.slice(0, MAX_SNACKS);
    });
  }
}

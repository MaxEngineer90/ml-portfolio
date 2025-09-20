import { Component, inject, OnDestroy, DoCheck } from '@angular/core';
import { Snackbar } from '../../../services/snackbar/snackbar';
import { TranslateDirective } from '../../../directives/translation';

@Component({
  selector: 'app-contact-snackbar',
  imports: [TranslateDirective],
  templateUrl: './contact-snackbar.html',
  styleUrl: './contact-snackbar.css',
})
export class ContactSnackbar implements OnDestroy, DoCheck {
  private readonly snackbar = inject(Snackbar);
  readonly items = this.snackbar.items();
  private timers = new Map<string, number>();

  ngDoCheck() {
    // Auto-Dismiss für Erfolg
    for (const s of this.items()) {
      if (
        s.variant === 'success' &&
        s.autoDismissMs &&
        !this.timers.has(s.id)
      ) {
        const tid = window.setTimeout(
          () => this.dismiss(s.id),
          s.autoDismissMs,
        );
        this.timers.set(s.id, tid);
      }
    }

    for (const [id, tid] of this.timers) {
      if (!this.items().some((x) => x.id === id)) {
        clearTimeout(tid);
        this.timers.delete(id);
      }
    }
  }

  dismiss(id: string) {
    const tid = this.timers.get(id);
    if (tid) {
      clearTimeout(tid);
      this.timers.delete(id);
    }
    this.snackbar.dismiss(id);
  }

  ngOnDestroy() {
    for (const tid of this.timers.values()) clearTimeout(tid);
    this.timers.clear();
  }
}

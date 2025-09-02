import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { TranslateDirective } from '../../../../directives/translation';
import { TranslationService } from '../../../../services/translation/translation';

@Component({
  selector: 'app-repository-card',
  imports: [NgOptimizedImage, TranslateDirective],
  templateUrl: './repository-card.html',
  styleUrl: './repository-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryCard {
  private readonly translationService = inject(TranslationService);

  readonly repo = input.required<Repo>();
  readonly showActions = input.required();

  // i18n
  readonly translate = computed(() => this.translationService.translate());
  readonly locale = computed(() =>
    this.translationService.language() === 'de' ? 'de-DE' : 'en-US',
  );

  formatDate(isoString: string): string {
    return new Date(isoString).toLocaleDateString(this.locale(), {
      dateStyle: 'medium',
    });
  }
}

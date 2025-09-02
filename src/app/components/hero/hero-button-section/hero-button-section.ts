import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateDirective } from '../../../directives/translation';
import { TranslationService } from '../../../services/translation/translation';

@Component({
  selector: 'app-hero-button-section',
  imports: [TranslateDirective],
  templateUrl: './hero-button-section.html',
  styleUrl: './hero-button-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroButtonSection {
  private readonly translationService = inject(TranslationService);

  get translateFunction() {
    return this.translationService.translate();
  }
}

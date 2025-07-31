import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslationService } from '../../../services/translation';

@Component({
  selector: 'app-language-switch',
  imports: [],
  templateUrl: './language-switch.html',
  styleUrl: './language-switch.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitch {
  private readonly translationService = inject(TranslationService);

  get translateFunction() {
    return this.translationService.translate();
  }

  get currentLanguage() {
    return this.translationService.language();
  }

  get isLoading() {
    return this.translationService.loading();
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }
}

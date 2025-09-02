import { Directive, effect, ElementRef, inject, Input } from '@angular/core';
import { TranslationService } from '../services/translation/translation';
import { TranslationKey } from '../types/translation';

@Directive({
  selector: '[appTranslate]',
})
export class TranslateDirective {
  private readonly htmlElement = inject(ElementRef);
  private readonly translationService = inject(TranslationService);

  @Input('appTranslate') translationKey!: TranslationKey;

  constructor() {
    effect(() => {
      if (this.translationKey) {
        const translatedText = this.translationService.translate()(
          this.translationKey,
        );
        this.htmlElement.nativeElement.textContent = translatedText;
      }
    });
  }
}

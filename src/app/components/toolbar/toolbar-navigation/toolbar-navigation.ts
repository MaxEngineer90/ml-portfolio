import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateDirective } from '../../../directives/translation';
import { TranslationService } from '../../../services/translation';

@Component({
  selector: 'app-toolbar-navigation',
  imports: [TranslateDirective],
  templateUrl: './toolbar-navigation.html',
  styleUrl: './toolbar-navigation.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarNavigation {
  translationService = inject(TranslationService);
  get translateFunction() {
    return this.translationService.translate();
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateDirective } from '../../../directives/translation';

@Component({
  selector: 'app-skills',
  imports: [TranslateDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {}

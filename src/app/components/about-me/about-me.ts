import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateDirective } from '../../directives/translation';

@Component({
  selector: 'app-about-me',
  imports: [TranslateDirective],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMe {}

import {
  Component,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { TranslateDirective } from '../../../directives/translation';
import { TranslationService } from '../../../services/translation';
import { TranslationKey } from '../../../types/translation';
import { ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-hero-greet-section',
  imports: [TranslateDirective],
  templateUrl: './hero-greet-section.html',
  styleUrl: './hero-greet-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroGreetSection implements OnInit, OnDestroy {
  private readonly translationService = inject(TranslationService);

  private readonly titleKeys: TranslationKey[] = [
    'hero.titles.cleanCode',
    'hero.titles.fullstack',
    'hero.titles.expert',
    'hero.titles.problemSolver',
  ];

  readonly currentTitle = signal('');
  private currentIndex = 0;
  private intervalId?: number;

  constructor() {
    // Reagiere auf Sprachänderungen
    effect(() => {
      this.updateCurrentTitle();
    });
  }

  ngOnInit(): void {
    this.updateCurrentTitle();
    this.startTitleRotation();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateCurrentTitle(): void {
    const translateFunction = this.translationService.translate();
    const translatedTitle = translateFunction(
      this.titleKeys[this.currentIndex],
    );
    this.currentTitle.set(translatedTitle);
  }

  private startTitleRotation(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.titleKeys.length;
      this.updateCurrentTitle();
    }, 3000);
  }
}

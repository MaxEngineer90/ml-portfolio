import { NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { TranslationService } from '../../../services/translation';

@Component({
  selector: 'app-toolbar-mobile-menu',
  imports: [NgOptimizedImage],
  templateUrl: './toolbar-mobile-menu.html',
  styleUrl: './toolbar-mobile-menu.css',
})
export class ToolbarMobileMenu {
  private readonly translationService = inject(TranslationService);

  readonly isMenuOpen = signal(false);

  get translateFunction() {
    return this.translationService.translate();
  }

  toggleMenu(): void {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}

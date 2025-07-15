import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-toolbar-mobile-menu',
  imports: [NgOptimizedImage],
  templateUrl: './toolbar-mobile-menu.html',
  styleUrl: './toolbar-mobile-menu.css',
})
export class ToolbarMobileMenu {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}

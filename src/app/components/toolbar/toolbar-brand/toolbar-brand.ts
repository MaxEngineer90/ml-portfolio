import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-toolbar-brand',
  imports: [NgOptimizedImage],
  templateUrl: './toolbar-brand.html',
  styleUrl: './toolbar-brand.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarBrand {
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}

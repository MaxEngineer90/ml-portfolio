import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero-image-section',
  imports: [NgOptimizedImage],
  templateUrl: './hero-image-section.html',
  styleUrl: './hero-image-section.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroImageSection {}

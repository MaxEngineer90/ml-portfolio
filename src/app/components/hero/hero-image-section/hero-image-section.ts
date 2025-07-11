import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-image-section',
  imports: [NgOptimizedImage],
  templateUrl: './hero-image-section.html',
  styleUrl: './hero-image-section.css',
})
export class HeroImageSection {}

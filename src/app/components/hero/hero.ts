import { Component } from '@angular/core';
import { HeroButtonSection } from './hero-button-section/hero-button-section';
import { HeroGreetSection } from './hero-greet-section/hero-greet-section';
import { HeroImageSection } from './hero-image-section/hero-image-section';

@Component({
  selector: 'app-hero',
  imports: [HeroImageSection, HeroGreetSection, HeroButtonSection],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}

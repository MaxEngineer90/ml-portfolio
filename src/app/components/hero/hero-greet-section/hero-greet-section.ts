import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero-greet-section',
  imports: [],
  templateUrl: './hero-greet-section.html',
  styleUrl: './hero-greet-section.css',
})
export class HeroGreetSection {
  titles = [
    'Verfechter von Clean Code',
    'Fullstack Developer aus Leidenschaft',
    'Java Spring Angular Profi',
    'Innovativer Problemlöser',
  ];

  currentTitle = signal(this.titles[0]);
  private currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.titles.length;
      this.currentTitle.set(this.titles[this.currentIndex]);
    }, 3000);
  }
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Toolbar } from './components/toolbar/toolbar';
import { AboutMe } from "./components/about-me/about-me";
@Component({
  selector: 'app-root',
  imports: [Hero, Toolbar, AboutMe],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
   title = 'ml-portfolio';
}

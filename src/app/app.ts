import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Toolbar } from './components/toolbar/toolbar';
@Component({
  selector: 'app-root',
  imports: [Hero, Toolbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
   title = 'ml-portfolio';
}

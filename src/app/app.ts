import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Toolbar } from "./components/toolbar/toolbar";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Toolbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'ml-portfolio';
}

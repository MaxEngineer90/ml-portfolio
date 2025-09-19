import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutMe } from './components/about-me/about-me';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Toolbar } from './components/toolbar/toolbar';
import { ContactForm } from './components/contact-form/contact-form';
@Component({
  selector: 'app-root',
  imports: [Hero, Toolbar, AboutMe, Skills, Projects, ContactForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  title = 'ml-portfolio';
}

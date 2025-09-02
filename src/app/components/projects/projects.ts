import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GithubProjects } from './github-projects/github-projects';
import { TranslateDirective } from '../../directives/translation';

@Component({
  selector: 'app-projects',
  imports: [GithubProjects, TranslateDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {}

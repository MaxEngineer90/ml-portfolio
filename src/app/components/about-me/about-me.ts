import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TranslationService } from "../../services/translation";
import { TranslateDirective } from "../../directives/translation";
import { Skills } from "./skills/skills";


@Component({
  selector: 'app-about-me',
  imports: [TranslateDirective, Skills],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMe {
}

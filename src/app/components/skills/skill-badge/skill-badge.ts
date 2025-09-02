import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-skill-badge',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './skill-badge.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillBadge {
  icon = input.required<string>();

  label = input.required<string>();

  iconPath = computed(() => `assets/images/icons/skills/${this.icon()}.svg`);
}

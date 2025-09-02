import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageSwitch } from './language-switch/language-switch';
import { ToolbarBrand } from './toolbar-brand/toolbar-brand';
import { ToolbarMobileMenu } from './toolbar-mobile-menu/toolbar-mobile-menu';
import { ToolbarNavigation } from './toolbar-navigation/toolbar-navigation';

@Component({
  selector: 'app-toolbar',
  imports: [ToolbarBrand, ToolbarNavigation, ToolbarMobileMenu, LanguageSwitch],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toolbar {}

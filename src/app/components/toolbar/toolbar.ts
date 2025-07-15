import { Component } from '@angular/core';
import { ToolbarBrand } from './toolbar-brand/toolbar-brand';
import { ToolbarMobileMenu } from './toolbar-mobile-menu/toolbar-mobile-menu';
import { ToolbarNavigation } from './toolbar-navigation/toolbar-navigation';

@Component({
  selector: 'app-toolbar',
  imports: [ToolbarBrand, ToolbarNavigation, ToolbarMobileMenu],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
})
export class Toolbar {}

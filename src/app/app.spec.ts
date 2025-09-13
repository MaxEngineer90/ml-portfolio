import {
  ApplicationConfig,
  provideZonelessChangeDetection,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { App } from './app';
import { appConfig } from './app.config';
import { AboutMe } from './components/about-me/about-me';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Toolbar } from './components/toolbar/toolbar';
describe('App', () => {
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        App,
        MockComponent(Projects),
        MockComponent(Toolbar),
        MockComponent(AboutMe),
        MockComponent(Skills),
        MockComponent(Hero),
      ],
      providers: [
        provideZonelessChangeDetection(),
        ...(appConfig.providers as ApplicationConfig['providers']),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});

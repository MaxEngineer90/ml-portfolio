import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { provideZonelessChangeDetection } from '@angular/core';
import { MockComponent } from 'ng-mocks';
import { Hero } from './hero';
import { HeroButtonSection } from './hero-button-section/hero-button-section';
import { HeroGreetSection } from './hero-greet-section/hero-greet-section';
import { HeroImageSection } from './hero-image-section/hero-image-section';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Hero,
        MockComponent(HeroImageSection),
        MockComponent(HeroGreetSection),
        MockComponent(HeroButtonSection),
      ],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

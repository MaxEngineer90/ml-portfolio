import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroGreetSection } from './hero-greet-section';

describe('HeroGreetSection', () => {
  let component: HeroGreetSection;
  let fixture: ComponentFixture<HeroGreetSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroGreetSection],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroGreetSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

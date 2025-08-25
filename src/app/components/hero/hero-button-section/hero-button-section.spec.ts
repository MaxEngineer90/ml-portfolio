import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroButtonSection } from './hero-button-section';

describe('HeroButtonSection', () => {
  let component: HeroButtonSection;
  let fixture: ComponentFixture<HeroButtonSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroButtonSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroButtonSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

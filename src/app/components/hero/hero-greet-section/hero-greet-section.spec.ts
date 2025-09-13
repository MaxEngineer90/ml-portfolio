import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { provideZonelessChangeDetection } from '@angular/core';
import { TranslationService } from '../../../services/translation/translation';
import { HeroGreetSection } from './hero-greet-section';

describe('HeroGreetSection', () => {
  let fixture: ComponentFixture<HeroGreetSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroGreetSection],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: TranslationService,
          useValue: { translate: () => () => '' },
        },
      ],
    })
      .overrideComponent(HeroGreetSection, { set: { template: '' } })
      .compileComponents();

    fixture = TestBed.createComponent(HeroGreetSection);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});

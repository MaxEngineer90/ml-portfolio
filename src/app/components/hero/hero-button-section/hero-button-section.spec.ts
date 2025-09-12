// hero-button-section.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { provideZonelessChangeDetection } from '@angular/core';
import { MockDirective, MockService } from 'ng-mocks';
import { TranslateDirective } from '../../../directives/translation';
import { TranslationService } from '../../../services/translation/translation';
import { HeroButtonSection } from './hero-button-section';

describe('HeroButtonSection', () => {
  let fixture: ComponentFixture<HeroButtonSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroButtonSection],
      providers: [
        provideZonelessChangeDetection(),
         { provide: TranslationService, useValue: { translate: vi.fn() } },
      ],
    })
      .overrideComponent(HeroButtonSection, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(HeroButtonSection);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});

import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { LanguageSwitch } from './language-switch';
import { TranslationService } from '../../../services/translation';

describe('LanguageSwitch', () => {
  let component: LanguageSwitch;
  let fixture: ComponentFixture<LanguageSwitch>;
  //TODO: RICHTIG IMPLEMENTIERUNG
  let mockTranslationService: unknown;

  beforeEach(async () => {
    mockTranslationService = {
      toggleLanguage: vi.fn(),
      translate: vi.fn().mockReturnValue((key: string) => key),
      language: vi.fn().mockReturnValue('de'),
      loading: vi.fn().mockReturnValue(false)
    };

    TestBed.configureTestingModule({
      imports: [LanguageSwitch],
      providers: [
        { provide: TranslationService, useValue: mockTranslationService },
      ]
    });

    fixture = TestBed.createComponent(LanguageSwitch);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});

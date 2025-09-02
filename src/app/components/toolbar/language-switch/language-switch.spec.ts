import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { TranslationService } from '../../../services/translation/translation';
import { LanguageSwitch } from './language-switch';

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
      loading: vi.fn().mockReturnValue(false),
    };

    TestBed.configureTestingModule({
      imports: [LanguageSwitch],
      providers: [
        { provide: TranslationService, useValue: mockTranslationService },
      ],
    });

    fixture = TestBed.createComponent(LanguageSwitch);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

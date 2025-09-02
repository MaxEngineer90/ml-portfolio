import { describe, it, expect, vi } from 'vitest';
import { TranslateDirective } from './translation';

describe('TranslateDirective', () => {
  it('should create', () => {
    // Mock der Dependencies
    const mockElementRef = {
      nativeElement: {
        textContent: '',
      },
    };

    const mockTranslationService = {
      translate: vi.fn().mockReturnValue(() => 'translated text'),
    };

    expect(TranslateDirective).toBeDefined();
    expect(typeof TranslateDirective).toBe('function');
  });
});

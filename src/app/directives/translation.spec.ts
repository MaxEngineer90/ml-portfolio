import { describe, expect, it } from 'vitest';
import { TranslateDirective } from './translation';

describe('TranslateDirective', () => {
  it('should create', () => {
    expect(TranslateDirective).toBeDefined();
    expect(typeof TranslateDirective).toBe('function');
  });
});

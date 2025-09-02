import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { TranslationService } from './translation';

describe('TranslationService', () => {
  let service: TranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslationService],
    });

    service = TestBed.inject(TranslationService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});

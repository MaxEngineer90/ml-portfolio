import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { TranslateDirective } from './directives/translation';
import { TranslationService } from './services/translation/translation';

// Test component to use the directive
@Component({
  template: `<div appTranslate="test.key" id="test-element"></div>`,
  imports: [TranslateDirective],
})
class TestComponent {}

describe('TranslateDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let mockTranslationService: unknown;

  beforeEach(async () => {
    mockTranslationService = {
      translate: vi.fn().mockReturnValue(() => 'translated text'),
    };

    await TestBed.configureTestingModule({
      imports: [TestComponent, TranslateDirective],
      providers: [
        { provide: TranslationService, useValue: mockTranslationService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

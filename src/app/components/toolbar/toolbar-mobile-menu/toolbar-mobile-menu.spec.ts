import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ToolbarMobileMenu } from './toolbar-mobile-menu';

describe('ToolbarMobileMenu', () => {
  let component: ToolbarMobileMenu;
  let fixture: ComponentFixture<ToolbarMobileMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarMobileMenu],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarMobileMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

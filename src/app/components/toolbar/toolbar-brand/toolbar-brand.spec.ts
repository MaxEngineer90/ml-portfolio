import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { ToolbarBrand } from './toolbar-brand';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ToolbarBrand', () => {
  let component: ToolbarBrand;
  let fixture: ComponentFixture<ToolbarBrand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarBrand],
      providers: [ provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarBrand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

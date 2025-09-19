import { describe, it, beforeEach, expect } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactSnackbar } from './contact-snackbar';

describe('ContactSnackbar', () => {
  let fixture: ComponentFixture<ContactSnackbar>;
  let component: ContactSnackbar;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSnackbar],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSnackbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSnackbar } from './contact-snackbar';

describe('ContactSnackbar', () => {
  let component: ContactSnackbar;
  let fixture: ComponentFixture<ContactSnackbar>;

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

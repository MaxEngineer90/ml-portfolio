import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarMobileMenu } from './toolbar-mobile-menu';

describe('ToolbarMobileMenu', () => {
  let component: ToolbarMobileMenu;
  let fixture: ComponentFixture<ToolbarMobileMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarMobileMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarMobileMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

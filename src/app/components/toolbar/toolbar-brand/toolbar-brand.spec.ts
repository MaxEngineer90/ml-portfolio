import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarBrand } from './toolbar-brand';

describe('ToolbarBrand', () => {
  let component: ToolbarBrand;
  let fixture: ComponentFixture<ToolbarBrand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarBrand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarBrand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

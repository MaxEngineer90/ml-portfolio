import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroImageSection } from './hero-image-section';

describe('HeroImageSection', () => {
  let component: HeroImageSection;
  let fixture: ComponentFixture<HeroImageSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroImageSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroImageSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

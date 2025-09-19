import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { AboutMe } from './about-me';

describe('AboutMe', () => {
  let component: AboutMe;
  let fixture: ComponentFixture<AboutMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMe],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

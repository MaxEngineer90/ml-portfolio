import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillBadge } from './skill-badge';
import { provideZonelessChangeDetection } from '@angular/core';

describe('SkillBadge', () => {
  let fixture: ComponentFixture<SkillBadge>;
  let component: SkillBadge;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillBadge],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillBadge);

    fixture.componentRef.setInput('icon', 'angular');
    fixture.componentRef.setInput('label', 'Angular');

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

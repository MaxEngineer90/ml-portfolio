import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent, MockDirective } from 'ng-mocks';
import { TranslateDirective } from '../../directives/translation';
import { SkillBadge } from './skill-badge/skill-badge';
import { Skills } from './skills';

describe('Skills', () => {
  let fixture: ComponentFixture<Skills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Skills,
        MockComponent(SkillBadge),
        MockDirective(TranslateDirective),
      ],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Skills);
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});

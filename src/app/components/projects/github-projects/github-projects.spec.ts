import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { GithubProjects } from './github-projects';
import { GithubClient } from '../../../services/github-client/github-client';
import { TranslationService } from '../../../services/translation/translation';
import { Repo } from '../../../types/repo';

class TranslationServiceStub {
  language() {
    return 'en';
  }
  translate() {
    return (key: string) => key;
  }
}

describe('GithubProjects', () => {
  let fixture: ComponentFixture<GithubProjects>;
  let component: GithubProjects;

  beforeEach(async () => {
    const githubClientStub = {
      isLoading: signal(false),
      error: signal<string | null>(null),
      repositories: signal<Array<Repo>>([]),
    };

    await TestBed.configureTestingModule({
      imports: [GithubProjects],
      providers: [
         provideZonelessChangeDetection(),
        { provide: GithubClient, useValue: githubClientStub },
        { provide: TranslationService, useClass: TranslationServiceStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GithubProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

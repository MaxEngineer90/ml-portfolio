import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';

import { TranslationService } from '../../../../services/translation/translation';
import { GithubClient } from '../../../../services/github-client/github-client';
import { GithubProjects } from '../github-projects';

class TranslationServiceStub {
  language() {
    return 'en';
  }
  translate() {
    return (key: string) => key;
  }
}

describe('GithubProjects', () => {
  let component: GithubProjects;
  let fixture: ComponentFixture<GithubProjects>;

  beforeEach(async () => {
    const githubClientStub = {
      isLoading: signal(false),
      error: signal<string | null>(null),
      repositories: signal<any[]>([]),
    };

    await TestBed.configureTestingModule({
      imports: [GithubProjects],
      providers: [
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

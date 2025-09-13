import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projects } from './projects';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { GithubClient } from '../../services/github-client/github-client';
import { Repo } from '../../types/repo';

describe('Projects', () => {
  let component: Projects;
  let fixture: ComponentFixture<Projects>;

  beforeEach(async () => {
    const githubClientStub = {
      isLoading: signal(false),
      error: signal<string | null>(null),
      repositories: signal<Array<Repo>>([]),
    };

    await TestBed.configureTestingModule({
      imports: [Projects],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection(),
        { provide: GithubClient, useValue: githubClientStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Projects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

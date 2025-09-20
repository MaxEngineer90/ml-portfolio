import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { GITHUB_BASE_URL } from '../../tokens/github/github-base-url';
import { GITHUB_USERNAME } from '../../tokens/github/github-username';
import { GithubClient } from './github-client';

describe('GithubClient', () => {
  let service: GithubClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GithubClient,
        { provide: GITHUB_BASE_URL, useValue: 'https://mock.com' },
        { provide: GITHUB_USERNAME, useValue: 'test-user' },
      ],
    });
    service = TestBed.inject(GithubClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

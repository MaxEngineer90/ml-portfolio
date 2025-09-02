import { HttpClient, httpResource } from '@angular/common/http';
import { computed, inject, Injectable } from '@angular/core';
import { GITHUB_BASE_URL } from '../../tokens/github/github-base-url';
import { GITHUB_USERNAME } from '../../tokens/github/github-username';

@Injectable({
  providedIn: 'root',
})
export class GithubClient {
  private readonly base = inject(GITHUB_BASE_URL);
  private readonly user = inject(GITHUB_USERNAME);

  private reposResource = httpResource<Array<Repo>>(
    () =>
      `${this.base}/users/${encodeURIComponent(this.user)}/repos?per_page=12&sort=pushed&direction=desc`,
    { defaultValue: [] },
  );

  repositories = computed<Array<Repo>>(() =>
    this.reposResource
      .value()
      .filter((repo) => !repo.fork && !repo.archived)
      .sort(
        (repoA, repoB) =>
          new Date(repoB.pushed_at).getTime() -
          new Date(repoA.pushed_at).getTime(),
      ),
  );

  isLoading = this.reposResource.isLoading;
  error = this.reposResource.error;
  reload = this.reposResource.reload;
}

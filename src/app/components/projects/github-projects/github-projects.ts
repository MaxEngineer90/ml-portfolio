import { ChangeDetectionStrategy, Component, computed, inject, Signal, signal } from '@angular/core';
import { GithubClient } from '../../../services/github-client/github-client';
import { RepositoryCard } from './repository-card/repository-card';
import { TranslateDirective } from '../../../directives/translation';

@Component({
  selector: 'app-github-projects',
  standalone: true,
  imports: [RepositoryCard, TranslateDirective],
  providers: [],
  templateUrl: './github-projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubProjects {
private readonly githubClient = inject(GithubClient);

  readonly isLoading = this.githubClient.isLoading;
  readonly error = this.githubClient.error;
  readonly repositories = this.githubClient.repositories as Signal<Repo[]>;

  readonly latestRepository = computed<Repo | null>(() => this.repositories()[0] ?? null);
  readonly remainingRepositories = computed<Repo[]>(() => this.repositories().slice(1));

  readonly pageSize = 4;
  readonly otherVisibleCount = signal(this.pageSize);

  readonly visibleRemainingRepositories = computed<Repo[]>(() =>
    this.remainingRepositories().slice(0, this.otherVisibleCount())
  );

  readonly canShowMore = computed<boolean>(() =>
    this.remainingRepositories().length > this.otherVisibleCount()
  );
  readonly canShowLess = computed(() =>
  this.otherVisibleCount() > this.pageSize
);

  showMore = () => {
    const next = this.otherVisibleCount() + this.pageSize;
    const limit = this.remainingRepositories().length;
    this.otherVisibleCount.set(Math.min(next, limit));
  };

  showLess = () => {
  this.otherVisibleCount.set(this.pageSize);
};
}

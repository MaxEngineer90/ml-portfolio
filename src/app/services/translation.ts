import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Language, TranslationKey, Translations } from '../types/translation';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private static readonly STORAGE_KEY = 'portfolio-lang';
  private static readonly DEFAULT_LANGUAGE: Language = 'de';
  private static readonly AVAILABLE_LANGUAGES: readonly Language[] = [
    'de',
    'en',
  ];

  private readonly currentLanguage = signal<Language>(
    TranslationService.DEFAULT_LANGUAGE,
  );
  private readonly translationsCache = new Map<Language, Translations>();
  private readonly isLoading = signal(false);
  private readonly currentTranslations = signal<Translations | null>(null);
  private readonly httpClient = inject(HttpClient);

  readonly language = computed(() => this.currentLanguage());
  readonly loading = computed(() => this.isLoading());
  readonly translate = computed(() => this.buildTranslateFunction());

  constructor() {
    this.initializeLanguage();
    this.watchLanguageChanges();
  }

  setLanguage(language: Language): void {
    if (this.currentLanguage() === language) return;

    this.currentLanguage.set(language);
    this.persistLanguage(language);
  }

  toggleLanguage(): void {
    const newLanguage = this.currentLanguage() === 'de' ? 'en' : 'de';
    this.setLanguage(newLanguage);
  }

  getAvailableLanguages(): readonly Language[] {
    return TranslationService.AVAILABLE_LANGUAGES;
  }

  private watchLanguageChanges(): void {
    effect(() => {
      const language = this.currentLanguage();

      if (this.translationsCache.has(language)) {
        this.setTranslationsFromCache(language);
      } else {
        this.loadTranslations(language);
      }
    });
  }

  private buildTranslateFunction() {
    const translations = this.currentTranslations();

    return (key: TranslationKey): string => {
      if (!translations) return key;
      return this.resolveTranslation(translations, key);
    };
  }

  private resolveTranslation(
    translations: Translations,
    key: TranslationKey,
  ): string {
    const keys = key.split('.');
    let current: unknown = translations;

    for (const keyPart of keys) {
      if (
        typeof current === 'object' &&
        current !== null &&
        keyPart in current
      ) {
        current = (current as Record<string, unknown>)[keyPart];
      } else {
        console.warn(`Translation key "${key}" not found`);
        return key;
      }
    }

    return typeof current === 'string' ? current : key;
  }

  private async loadTranslations(language: Language): Promise<void> {
    this.isLoading.set(true);

    try {
      const translations = await firstValueFrom(
        this.httpClient.get<Translations>(`assets/i18n/${language}.json`),
      );

      this.translationsCache.set(language, translations);
      this.currentTranslations.set(translations);
    } catch (error) {
      this.handleLoadError(language, error);
    } finally {
      this.isLoading.set(false);
    }
  }

  private setTranslationsFromCache(language: Language): void {
    const translations = this.translationsCache.get(language)!;
    this.currentTranslations.set(translations);
  }

  private handleLoadError(language: Language, error: unknown): void {
    console.error(`Failed to load translations for ${language}:`, error);

    if (
      language !== TranslationService.DEFAULT_LANGUAGE &&
      this.translationsCache.has(TranslationService.DEFAULT_LANGUAGE)
    ) {
      this.setTranslationsFromCache(TranslationService.DEFAULT_LANGUAGE);
    }
  }

  private initializeLanguage(): void {
    const storedLanguage = this.getStoredLanguage();
    const browserLanguage = this.getBrowserLanguage();
    const language = storedLanguage ?? browserLanguage;

    this.currentLanguage.set(language);
  }

  private getBrowserLanguage(): Language {
    return navigator.language.startsWith('de') ? 'de' : 'en';
  }

  private getStoredLanguage(): Language | null {
    try {
      const stored = localStorage.getItem(
        TranslationService.STORAGE_KEY,
      ) as Language;
      return this.isValidLanguage(stored) ? stored : null;
    } catch {
      return null;
    }
  }

  private isValidLanguage(language: string): language is Language {
    return TranslationService.AVAILABLE_LANGUAGES.includes(
      language as Language,
    );
  }

  private persistLanguage(language: Language): void {
    try {
      localStorage.setItem(TranslationService.STORAGE_KEY, language);
    } catch {
      // Silent fail for SSR/incognito
    }
  }
}

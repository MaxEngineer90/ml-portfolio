import { computed, effect, Injectable, signal } from '@angular/core';
import { Language, TranslationKey, Translations } from '../types/translation';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly currentLanguage = signal<Language>('de');
  private readonly translationsCache = new Map<Language, Translations>();
  private readonly isLoading = signal(false);
  private readonly currentTranslations = signal<Translations | null>(null);

  constructor(private readonly httpClient: HttpClient) {
    this.initializeLanguage();

    effect(() => {
      document.documentElement.lang = this.currentLanguage();
    });

    effect(async () => {
      const selectedLanguage = this.currentLanguage();
      await this.loadTranslations(selectedLanguage);
    });
  }

  readonly language = computed(() => this.currentLanguage());
  readonly loading = computed(() => this.isLoading());

  readonly translate = computed(() => {
    const translations = this.currentTranslations();

    return (translationKey: TranslationKey): string => {
      if (!translations) return translationKey;

      const keyParts = translationKey.split('.');
      let translationValue: any = translations;

      for (const keyPart of keyParts) {
        translationValue = translationValue?.[keyPart];
        if (translationValue === undefined) {
          console.warn(`Translation key "${translationKey}" not found`);
          return translationKey;
        }
      }

      return typeof translationValue === 'string'
        ? translationValue
        : translationKey;
    };
  });

  // Für Kompatibilität mit bestehenden Templates
  readonly t = this.translate;

  async setLanguage(language: Language): Promise<void> {
    if (language === this.currentLanguage()) return;
    this.currentLanguage.set(language);
    this.saveLanguageToStorage(language);
  }

  async toggleLanguage(): Promise<void> {
    const newLanguage = this.currentLanguage() === 'de' ? 'en' : 'de';
    await this.setLanguage(newLanguage);
  }

  getAvailableLanguages(): Language[] {
    return ['de', 'en'];
  }

  private async loadTranslations(language: Language): Promise<void> {
    if (this.translationsCache.has(language)) {
      this.currentTranslations.set(this.translationsCache.get(language)!);
      return;
    }

    this.isLoading.set(true);

    try {
      const translations = await firstValueFrom(
        this.httpClient.get<Translations>(`assets/i18n/${language}.json`),
      );

      this.translationsCache.set(language, translations);
      this.currentTranslations.set(translations);
    } catch (error) {
      console.error(
        `Failed to load translations for language: ${language}`,
        error,
      );

      if (language !== 'de' && this.translationsCache.has('de')) {
        this.currentTranslations.set(this.translationsCache.get('de')!);
      }
    } finally {
      this.isLoading.set(false);
    }
  }

  private initializeLanguage(): void {
    const storedLanguage = this.getLanguageFromStorage();
    const browserLanguage = navigator.language.startsWith('de') ? 'de' : 'en';
    const initialLanguage = storedLanguage || browserLanguage;

    this.currentLanguage.set(initialLanguage);
  }

  private getLanguageFromStorage(): Language | null {
    try {
      const storedLanguage = localStorage.getItem('portfolio-lang') as Language;
      return this.getAvailableLanguages().includes(storedLanguage)
        ? storedLanguage
        : null;
    } catch {
      return null;
    }
  }

  private saveLanguageToStorage(language: Language): void {
    try {
      localStorage.setItem('portfolio-lang', language);
    } catch {
      // Silent fail für SSR/Tests
    }
  }
}

'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { setCookie } from 'cookies-next';
import enMessages from '../../messages/en.json';
import deMessages from '../../messages/de.json';

const messages: Record<string, any> = {
  en: enMessages,
  de: deMessages,
};

type I18nContextType = {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children, initialLocale }: { children: ReactNode, initialLocale: string }) {
  const [locale, setLocaleState] = useState(initialLocale);

  const setLocale = (newLocale: string) => {
    setLocaleState(newLocale);
    setCookie('locale', newLocale, { maxAge: 60 * 60 * 24 * 365, path: '/' });
    // We might need a full page reload if not using next-intl router
    // For now, let's rely on components re-rendering from context change
    window.location.reload();
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let result = messages[locale];
    try {
      for (const k of keys) {
        result = result[k];
      }
      if (result === undefined) {
        throw new Error('not found');
      }
      return result;
    } catch (e) {
      // Fallback to English
      let fallbackResult = messages['en'];
      try {
        for (const fk of keys) {
            fallbackResult = fallbackResult?.[fk];
        }
        return fallbackResult || key;
      } catch (fe) {
        return key;
      }
    }
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

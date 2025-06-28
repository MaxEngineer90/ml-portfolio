'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import enMessages from '../../messages/en.json';
import deMessages from '../../messages/de.json';

const messages: Record<string, any> = {
  en: enMessages,
  de: deMessages,
};

type I18nContextType = {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string) => any;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  // We initialize the locale to 'de' to match the default content, preventing a mismatch on initial server render.
  const [locale, setLocaleState] = useState('de');

  // This effect runs only on the client, after the initial render.
  useEffect(() => {
    // Check for a saved locale in cookies.
    const savedLocale = getCookie('locale');
    
    // Default to 'de' if cookie is not set or invalid
    const validLocale = savedLocale === 'en' || savedLocale === 'de' ? savedLocale : 'de';

    // Update the state and the HTML lang attribute with the correct locale.
    if (validLocale !== locale) {
      setLocaleState(validLocale);
    }
    document.documentElement.lang = validLocale;
  }, []); // The empty dependency array ensures this runs only once on mount.

  const setLocale = (newLocale: string) => {
    setLocaleState(newLocale);
    setCookie('locale', newLocale, { maxAge: 60 * 60 * 24 * 365, path: '/' });
    document.documentElement.lang = newLocale;
    // Reloading is a simple and effective way to apply the language change across the entire application.
    window.location.reload();
  };

  const t = (key: string): any => {
    const keys = key.split('.');
    
    const findValue = (obj: any, path: string[]) => path.reduce((acc, part) => acc && acc[part], obj);

    let translation = findValue(messages[locale], keys);

    if (translation === undefined) {
      // Fallback to English if translation not found in current locale
      translation = findValue(messages['en'], keys);
    }

    // Return the key itself if no translation is found in either locale
    return translation ?? key;
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

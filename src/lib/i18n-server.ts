import 'server-only';
import { cookies } from 'next/headers';
import enMessages from '../../messages/en.json';
import deMessages from '../../messages/de.json';

const messages: Record<string, any> = {
  en: enMessages,
  de: deMessages,
};

const getLocale = () => {
  const cookieStore = cookies();
  return cookieStore.get('locale')?.value || 'en';
}

export const getI18n = async () => {
  const locale = getLocale();
  
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

  return { t, locale };
};

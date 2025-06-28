'use client';

import { useI18n } from '@/context/i18n-provider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div className="flex items-center gap-2">
      <Select value={locale} onValueChange={setLocale}>
        <SelectTrigger className="w-auto bg-transparent border-0 shadow-none focus:ring-0 gap-2">
          <Globe className="h-5 w-5 text-muted-foreground" />
          <SelectValue placeholder={t('LanguageSwitcher.label')} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">{t('LanguageSwitcher.en')}</SelectItem>
          <SelectItem value="de">{t('LanguageSwitcher.de')}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

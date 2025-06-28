'use client';

import { useI18n } from '@/context/i18n-provider';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Logo } from './Logo';

export function Header() {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex flex-grow items-center">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">DevFolio Pro</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#about" className="transition-colors hover:text-primary">{t('Header.about')}</a>
            <a href="#projects" className="transition-colors hover:text-primary">{t('Header.projects')}</a>
            <a href="#contact" className="transition-colors hover:text-primary">{t('Header.contact')}</a>
          </nav>
        </div>
        <div className="flex items-center">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

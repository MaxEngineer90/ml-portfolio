'use client';

import { useI18n } from "@/context/i18n-provider";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border/40 py-6">
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {t('Footer.copyright').replace('{year}', new Date().getFullYear().toString())}
        </p>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <a href="https://github.com/MaxEngineer90" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/maximilian-lamm-941b49281/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

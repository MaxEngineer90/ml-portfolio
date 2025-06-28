'use client';

import { useI18n } from "@/context/i18n-provider";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border/40 py-6">
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {t('Footer.copyright').replace('{year}', new Date().getFullYear().toString())}
        </p>
        <div className="flex items-center gap-4">
            <a href="/imprint" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('Footer.imprint')}</a>
            <a href="https://github.com/MaxEngineer90" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/maximilian-lamm-941b49281/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
        </div>
      </div>
    </footer>
  );
}

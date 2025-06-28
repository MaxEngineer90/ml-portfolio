'use client';

import { useI18n } from '@/context/i18n-provider';

export function HeroSection() {
  const { t } = useI18n();
  return (
    <section id="hero" className="relative w-full py-20 md:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)]"></div>
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-primary">
            {t('HeroSection.name')}
          </h1>
          <p className="mt-4 text-2xl md:text-3xl font-headline text-foreground">
            {t('HeroSection.title')}
          </p>
          <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground">
            {t('HeroSection.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useI18n } from '@/context/i18n-provider';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export function HeroSection() {
  const { t } = useI18n();
  const titles = t('HeroSection.titles') as string[];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (!titles || titles.length === 0) return;

    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsFading(false);
      }, 300); // Animation duration (should match transition duration)
    }, 3000); // Time between title changes

    return () => clearInterval(interval);
  }, [titles]);

  return (
    <section id="hero" className="relative w-full min-h-[calc(100vh-56px)] flex items-center justify-center py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          <div className="flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] flex-shrink-0">
                <Image
                    src="/images/profile-image.png"
                    alt="Maximilian Lamm"
                    width={420}
                    height={420}
                    className="rounded-full object-cover object-top w-full h-full"
                    priority
                />
              </div>
          </div>

          <div className="text-center lg:text-left order-2 lg:order-1 min-w-0">
            <div className="w-full inline-flex items-center justify-center lg:justify-start gap-2 mb-4">
                <span className="text-2xl" role="img" aria-label="waving hand">👋</span>
                <span className="text-xl font-medium text-muted-foreground">{t('HeroSection.greeting')}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-headline font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent break-words">
                {t('HeroSection.name')}
              </span>
            </h1>
            
            <p className={`mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-headline text-accent transition-opacity duration-300 min-h-[28px] sm:min-h-[32px] md:min-h-[40px] lg:min-h-[44px] ${isFading ? 'opacity-0' : 'opacity-100'}`}>
              {titles?.[currentIndex] || ''}
            </p>
            
            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground">
              {t('HeroSection.subtitle_start')}
              <span className="text-primary font-medium">{t('HeroSection.subtitle_passion')}</span>
              {t('HeroSection.subtitle_middle')}
              <span className="text-accent font-medium">{t('HeroSection.subtitle_innovation')}</span>
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/40">
                    <a href="#projects">
                        {t('HeroSection.projectsButton')}
                        <ArrowRight className="ml-2 h-5 w-5"/>
                    </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border/50 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:shadow-[0_0_15px_-3px_hsl(var(--accent))]">
                     <a href="#contact">
                        {t('HeroSection.contactButton')}
                    </a>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useI18n } from '@/context/i18n-provider';
import Link from 'next/link';

const COOKIE_NAME = 'cookie_consent';

export function CookieConsent({ initiallyVisible = false }) {
  const [visible, setVisible] = useState(initiallyVisible);
  const { t } = useI18n();

  useEffect(() => {
    const consent = getCookie(COOKIE_NAME);
    if (consent) {
      setVisible(false);
    }
  }, []);

  const acceptCookie = () => {
    setVisible(false);
    setCookie(COOKIE_NAME, 'true', { maxAge: 60 * 60 * 24 * 365, path: '/' });
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 right-0 z-[100] w-full p-4 sm:w-auto sm:max-w-md">
        <Card className="bg-card/80 backdrop-blur-lg border-border/50 shadow-2xl">
        <CardContent className="p-6 flex flex-col items-start gap-4">
            <p className="text-sm text-muted-foreground flex-grow">
            {t('CookieConsent.message')}{' '}
            <Link href="/imprint" className="underline hover:text-primary">
                {t('CookieConsent.imprintLink')}
            </Link>
            .
            </p>
            <Button onClick={acceptCookie} className="w-full sm:w-auto">
            {t('CookieConsent.acceptButton')}
            </Button>
        </CardContent>
        </Card>
    </div>
  );
}

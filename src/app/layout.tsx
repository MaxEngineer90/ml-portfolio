import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { I18nProvider } from '@/context/i18n-provider';
import { CookieConsent } from '@/components/devfolio/CookieConsent';

export const metadata: Metadata = {
  title: 'Maximilian Lamm | Developer Portfolio',
  description: 'A professional portfolio for developers, built with Next.js and AI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{scrollBehavior:'smooth'}}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <I18nProvider>
          {children}
          <CookieConsent />
        </I18nProvider>
        <Toaster />
      </body>
    </html>
  );
}

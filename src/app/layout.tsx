import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { I18nProvider } from '@/context/i18n-provider';

const siteUrl = 'https://maxengineer90.github.io/ml-portfolio';
const authorName = 'Maximilian Lamm';
const siteTitle = `${authorName} | Full-Stack Developer Portfolio`;
const siteDescription = `Entdecken Sie das Portfolio von ${authorName}, einem leidenschaftlichen Full-Stack-Entwickler, der auf Angular, TypeScript, Java und Spring spezialisiert ist. Sehen Sie sich Projekte an, lernen Sie meine Fähigkeiten kennen und nehmen Sie Kontakt auf.`;
const profileImageUrl = '/images/profile-image.png';
const faviconDataUri = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHN0eWxlPnBhdGggeyBzdHJva2U6ICMzYjgyZjY7IH0gQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykgeyBwYXRoIHsgc3Ryb2tlOiAjZmQ5ODQzOyB9IH08L3N0eWxlPjxwYXRoIGQ9Ik00IDE4VjZMOTIDE0TDE0IDZWMTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPjxwYXRoIGQ9Ik0xNiA2VjE4SDIwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz48L3N2Zz4=";


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${authorName}`,
  },
  description: siteDescription,
  keywords: ['Maximilian Lamm', 'Full-Stack Entwickler', 'Angular', 'TypeScript', 'Java', 'Spring', 'Portfolio', 'Webentwickler', 'Softwareentwickler', 'Freelancer'],
  authors: [{ name: authorName, url: siteUrl }],
  creator: authorName,
  
  icons: {
    icon: faviconDataUri,
    apple: faviconDataUri,
  },

  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    images: [
      {
        url: profileImageUrl,
        width: 420,
        height: 420,
        alt: `Profilbild von ${authorName}`,
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [profileImageUrl],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark" style={{scrollBehavior:'smooth'}}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <I18nProvider>
          {children}
        </I18nProvider>
        <Toaster />
      </body>
    </html>
  );
}

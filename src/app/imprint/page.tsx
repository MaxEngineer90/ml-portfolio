"use client";

import { Header } from "@/components/devfolio/Header";
import { Footer } from "@/components/devfolio/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/context/i18n-provider";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function ImprintPage() {
    const { t } = useI18n();
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-24">
        <Card className="max-w-3xl mx-auto bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
            <CardHeader>
                <CardTitle className="text-3xl font-headline tracking-tighter sm:text-4xl">{t('Imprint.title')}</CardTitle>
                <CardDescription>{t('Imprint.description')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <h3 className="font-semibold">{t('Imprint.nameAndAddress.title')}</h3>
                    <p className="text-muted-foreground whitespace-pre-line">{t('Imprint.nameAndAddress.placeholder')}</p>
                </div>
                <div className="space-y-2">
                    <h3 className="font-semibold">{t('Imprint.contact.title')}</h3>
                    <p className="text-muted-foreground whitespace-pre-line">{t('Imprint.contact.placeholder')}</p>
                </div>

                <Alert variant="destructive">
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>{t('Imprint.disclaimer.title')}</AlertTitle>
                  <AlertDescription>
                    {t('Imprint.disclaimer.placeholder')}
                  </AlertDescription>
                </Alert>
            </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

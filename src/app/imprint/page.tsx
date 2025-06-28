"use client";

import { Header } from "@/components/devfolio/Header";
import { Footer } from "@/components/devfolio/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/context/i18n-provider";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicyText = () => {
  const { t } = useI18n();
  const text = t('Imprint.PrivacyPolicy.text');
  const parts = text.split(/<link>|<\/link>/);

  return (
    <p className="text-muted-foreground">
      {parts[0]}
      <a href="/privacy-policy" className="underline hover:text-primary">
        {parts[1]}
      </a>
      {parts[2]}
    </p>
  );
};


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
                <Separator />
                <div className="space-y-4">
                    <h2 className="text-2xl font-headline">{t('Imprint.PrivacyPolicy.title')}</h2>
                     <div className="space-y-2">
                        <PrivacyPolicyText />
                    </div>
                </div>
            </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

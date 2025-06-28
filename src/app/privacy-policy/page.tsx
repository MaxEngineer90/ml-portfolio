"use client";

import { Header } from "@/components/devfolio/Header";
import { Footer } from "@/components/devfolio/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/context/i18n-provider";
import { Separator } from "@/components/ui/separator";

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="space-y-2">
    <h3 className="text-xl font-semibold text-primary">{title}</h3>
    <div className="text-muted-foreground space-y-2">{children}</div>
  </div>
);

export default function PrivacyPolicyPage() {
    const { t, locale } = useI18n();
    const currentDate = new Date().toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-24">
        <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
            <CardHeader>
                <CardTitle className="text-3xl font-headline tracking-tighter sm:text-4xl">{t('PrivacyPolicy.title')}</CardTitle>
                <CardDescription>{t('PrivacyPolicy.lastUpdated').replace('{date}', currentDate)}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
                <p className="text-muted-foreground">{t('PrivacyPolicy.introduction')}</p>
                
                <Section title={t('PrivacyPolicy.controller.title')}>
                    <p>{t('PrivacyPolicy.controller.text')}</p>
                    <p className="whitespace-pre-line font-medium text-foreground">
                        {t('PrivacyPolicy.controller.placeholder_name')}<br/>
                        {t('PrivacyPolicy.controller.placeholder_address')}<br/>
                        {t('PrivacyPolicy.controller.placeholder_email')}
                    </p>
                </Section>
                
                <Separator />

                <Section title={t('PrivacyPolicy.hosting.title')}>
                    <p>{t('PrivacyPolicy.hosting.text1')}</p>
                    <p>{t('PrivacyPolicy.hosting.text2')} <a href={t('PrivacyPolicy.hosting.link')} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">{t('PrivacyPolicy.hosting.link')}</a></p>
                </Section>

                <Section title={t('PrivacyPolicy.cookies.title')}>
                    <p>{t('PrivacyPolicy.cookies.text1')}</p>
                    <p>{t('PrivacyPolicy.cookies.text2')}</p>
                </Section>
                
                <Section title={t('PrivacyPolicy.contactForm.title')}>
                    <p>{t('PrivacyPolicy.contactForm.text')}</p>
                </Section>
                
                <Section title={t('PrivacyPolicy.googleFonts.title')}>
                    <p>{t('PrivacyPolicy.googleFonts.text')}</p>
                </Section>

                <Section title={t('PrivacyPolicy.githubApi.title')}>
                    <p>{t('PrivacyPolicy.githubApi.text')}</p>
                </Section>

                <Separator />

                <Section title={t('PrivacyPolicy.userRights.title')}>
                    <p>{t('PrivacyPolicy.userRights.text')}</p>
                </Section>
                
                <Section title={t('PrivacyPolicy.disclaimer.title')}>
                    <p className="text-sm italic">{t('PrivacyPolicy.disclaimer.text')}</p>
                </Section>

            </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

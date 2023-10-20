import BackButton from './BackButton';
import LanguageChanger from '@/components/LanguageChanger';
import TranslationsProvider from '@/components/TranslationsProvider';
import initTranslations from '@/app/i18n';

const i18nNamespaces = ['about'];

async function About({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale}>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <h1>{t('about_header')}</h1>
        <BackButton />
        <LanguageChanger />
      </main>
    </TranslationsProvider>
  );
}

export default About;
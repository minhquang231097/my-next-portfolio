import ExampleClientComponent from "@/components/ExampleClientComponent";
import LanguageChanger from "@/components/LanguageChanger";
import Link from "next/link";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const i18nNamespaces = ["home"];

async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale}>
      <main className="flex min-h-screen flex-col">
        <Header
          params={{
            locale,
          }}
        />
        {/* <h1>{t("header")}</h1> */}
        <ExampleClientComponent />
        <Hero />
        <Link href="/about">{t("page2")}</Link>
        <LanguageChanger />
        <Footer />
      </main>
    </TranslationsProvider>
  );
}

export default Home;

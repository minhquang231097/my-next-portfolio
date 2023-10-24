import { i18nConfig } from '@/i18nConfig';
import '@/app/globals.css';
import type { Metadata } from 'next';
import { Fira_Sans, Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { dir } from 'i18next';
import MachineLogo from '@/public/machine.png'

const inter = Inter({ subsets: ['latin'] });
const firaSans = Fira_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: `alpha7xcoder's Portfolio | Next App`,
  description: `Generated by Create Next App`,
  icons: [
    { rel: 'icon', url: MachineLogo.src },
  ],
}

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={firaSans.className}>{children}</body>
    </html>
  );
}

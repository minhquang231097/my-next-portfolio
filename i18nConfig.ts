import { Config } from 'next-i18n-router/dist/types';

export const i18nConfig: Config = {
   locales: ['en', 'vi'],
   defaultLocale: 'en',
   localeDetector: false,
   routingStrategy: 'dynamicSegment',
};

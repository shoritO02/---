'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { LANGUAGES, FALLBACK_LANG, DEFAULT_NS } from './config';

const i18nClient = i18next.createInstance();

i18nClient
  .use(initReactI18next)
  .use(resourcesToBackend((language: string, namespace: string) => {
    return import(`../locales/${language}/${namespace}.json`);
  }))
  .init({
    supportedLngs: LANGUAGES,
    fallbackLng: FALLBACK_LANG,
    lng: FALLBACK_LANG,
    fallbackNS: DEFAULT_NS,
    defaultNS: DEFAULT_NS,
    returnObjects: true,
  });

export default i18nClient;
import { headers as _headers } from 'next/headers';
import i18nInstance from './index';
import { HEADER_NAME } from './config';

export async function getT(
  ns?: string | string[],
  lang?: string | null,
  keyPrefix?: string
) {
  const headers = await _headers();
  const language = lang || headers.get(HEADER_NAME);

  if (language && i18nInstance.resolvedLanguage !== language) {
    await i18nInstance.changeLanguage(language);
  }

  if (ns && !i18nInstance.hasLoadedNamespace(ns)) {
    await i18nInstance.loadNamespaces(ns);
  }

  return {
    t: i18nInstance.getFixedT(language ?? i18nInstance.resolvedLanguage!, ns, keyPrefix),
    i18n: i18nInstance,
  };
}
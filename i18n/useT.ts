'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useTranslation, type UseTranslationOptions } from 'react-i18next';
import type { FlatNamespace, KeyPrefix } from 'i18next';
import type { FallbackNs } from 'react-i18next';
import i18nClient from './client';

export function useT(
  ns?: string,
  options: UseTranslationOptions<KeyPrefix<FallbackNs<FlatNamespace>>> = {}
) {
  const params = useParams();
  const lang = params?.lang;

  if (typeof lang !== 'string') {
    throw new Error('useT is only available inside [lang]');
  }

  useEffect(() => {
    if (!lang || i18nClient.resolvedLanguage === lang) return;
    i18nClient.changeLanguage(lang);
  }, [lang]);

  return useTranslation(ns, { ...options, i18n: i18nClient });
}
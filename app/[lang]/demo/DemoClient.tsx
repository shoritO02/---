'use client';

import { Trans } from 'react-i18next';
import { useT } from '@/i18n/useT';

export default function DemoClient() {
  const { t } = useT('common');

  return (
    <main style={{ padding: '40px' }}>
      <h1>i18n Demo</h1>
      <p>{t('welcome', { name: 'Студент' })}</p>
      <p>{t('items_count', { count: 1 })}</p>
      <p>{t('items_count', { count: 3 })}</p>
      <p>{t('items_count', { count: 10 })}</p>
      <Trans
        i18nKey="visit_docs"
        ns="common"
        components={{
          link: <a href="https://www.i18next.com" style={{ color: 'blue' }} />,
        }}
      />
    </main>
  );
}
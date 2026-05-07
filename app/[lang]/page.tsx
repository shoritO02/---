import Link from 'next/link';
import { getT } from '@/i18n/getT';

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const { t } = await getT('common', lang);

  return (
    <main>
      <h1>{t('home')}</h1>
      <p>{t('welcome', { name: 'Клиент' })}</p>
      <p>{t('items_count', { count: 1 })}</p>
      <p>{t('items_count', { count: 3 })}</p>
      <p>{t('items_count', { count: 10 })}</p>
      <br />
      <Link href={`/${lang}/register`}>{t('register')}</Link><br />
      <Link href={`/${lang}/products`}>{t('products')}</Link><br />
      <Link href={`/${lang}/posts`}>{t('posts')}</Link><br />
      <Link href={`/${lang}/tasks`}>{t('tasks')}</Link><br />
      <br />
      <Link href="/en">🇬🇧 English</Link> | <Link href="/ru">🇷🇺 Русский</Link>
    </main>
  );
}
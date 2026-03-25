import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Главная страница</h1>
      <Link href="/products">Перейти к списку продуктов</Link>
      <br />
      <Link href="/posts">Перейти к постам</Link>
    </main>
  );
}
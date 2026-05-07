import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Главная страница</h1>
      <Link href="/register">Регистрация</Link>
      <br />
      <Link href="/products">Перейти к списку продуктов</Link>
      <br />
      <Link href="/posts">Перейти к постам</Link>
      <br />
      <Link href="/tasks">Перейти к задачам</Link>
    </main>
  );
}
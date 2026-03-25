import Link from "next/link";

export default function PostsPage() {
  return (
    <main>
      <h1>Список постов</h1>
      <ul>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((id) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>Пост {id}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
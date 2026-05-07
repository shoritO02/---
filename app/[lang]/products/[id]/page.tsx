import Link from "next/link";

const products: Record<string, string> = {
  "1": "Товар 1",
  "2": "Товар 2",
  "3": "Товар 3",
};

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main>
      <h1>{products[id]}</h1>
      <p>Идентификатор: {id}</p>
      <Link href={`/products/${id}/comments`}>Перейти к комментариям</Link>
    </main>
  );
}
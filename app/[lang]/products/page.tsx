import Link from "next/link";

const products = [
  { id: 1, name: "Товар 1" },
  { id: 2, name: "Товар 2" },
  { id: 3, name: "Товар 3" },
];

export default function ProductsPage() {
  return (
    <main>
      <h1>Список продуктов</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
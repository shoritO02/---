export default async function CommentsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main>
      <h1>Комментарии продукта {id}</h1>
      <p>Раздел комментариев</p>
    </main>
  );
}
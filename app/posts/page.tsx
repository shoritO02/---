'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PostsPage() {
  const [date] = useState(() => new Date().toISOString());

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 16px' }}>
      <span>{date}</span>
      <br /><br />
      <Link href="/posts/create">Create Post</Link>
      <br /><br />
      <Link href="/posts/1">Перейти к посту 1</Link>
    </div>
  );
}
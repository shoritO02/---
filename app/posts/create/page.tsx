'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';

const schema = yup.object({
  title: yup.string().required('Заголовок обязателен'),
  body: yup.string().required('Текст обязателен'),
}).required();

type FormData = yup.InferType<typeof schema>;

export default function CreatePostPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    router.push('/posts');
  };

  return (
    <main style={{ maxWidth: '400px', margin: '40px auto', padding: '0 16px' }}>
      <h1>Создать пост</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <input {...register('title')} placeholder="Заголовок" style={{ width: '100%', padding: '8px' }} />
          {errors.title && <p role="alert" style={{ color: 'red', fontSize: '13px' }}>{errors.title.message}</p>}
        </div>
        <div>
          <textarea {...register('body')} placeholder="Текст поста" rows={5} style={{ width: '100%', padding: '8px' }} />
          {errors.body && <p role="alert" style={{ color: 'red', fontSize: '13px' }}>{errors.body.message}</p>}
        </div>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#1F2D3D', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          Опубликовать
        </button>
      </form>
    </main>
  );
}
'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';

const schema = yup.object({
  user_name: yup.string().required('Имя пользователя обязательно'),
  email: yup.string().email('Некорректный email').required('Email обязателен'),
  age: yup.number().positive('Возраст должен быть положительным').integer().required('Возраст обязателен'),
  password: yup.string().min(6, 'Минимум 6 символов').required('Пароль обязателен'),
  confirm_password: yup.string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
    .required('Подтверждение пароля обязательно'),
}).required();

type FormData = yup.InferType<typeof schema>;

export default function RegisterPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    router.push('/posts');
  };

  return (
    <main style={{ maxWidth: '400px', margin: '40px auto', padding: '0 16px' }}>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <input {...register('user_name')} placeholder="Имя пользователя" style={{ width: '100%', padding: '8px' }} />
          {errors.user_name && <p role="alert" style={{ color: 'red', fontSize: '13px' }}>{errors.user_name.message}</p>}
        </div>
        <div>
          <input {...register('email')} placeholder="Email" style={{ width: '100%', padding: '8px' }} />
          {errors.email && <p role="alert" style={{ color: 'red', fontSize: '13px' }}>{errors.email.message}</p>}
        </div>
        <div>
          <input {...register('age')} type="number" placeholder="Возраст" style={{ width: '100%', padding: '8px' }} />
          {errors.age && <p role="alert" style={{ color: 'red', fontSize: '13px' }}>{errors.age.message}</p>}
        </div>
        <div>
          <input {...register('password')} type="password" placeholder="Пароль" style={{ width: '100%', padding: '8px' }} />
          {errors.password && <p role="alert" style={{ color: 'red', fontSize: '13px' }}>{errors.password.message}</p>}
        </div>
        <div>
          <input {...register('confirm_password')} type="password" placeholder="Подтвердите пароль" style={{ width: '100%', padding: '8px' }} />
          {errors.confirm_password && <p role="alert" style={{ color: 'red', fontSize: '13px' }}>{errors.confirm_password.message}</p>}
        </div>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#1F2D3D', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          Зарегистрироваться
        </button>
      </form>
    </main>
  );
}
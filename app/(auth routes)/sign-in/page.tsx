'use client';

import { useRouter } from 'next/navigation';
import css from './SignInPage.module.css';
import { LoginRequest } from '@/types/apiRequestTypes';
import { login } from '@/lib/api';

export default function Login() {
  const router = useRouter();

  async function handleLogin(formData: FormData) {
    const payload = Object.fromEntries(formData) as LoginRequest;
    const response = await login(payload);
    if (response) {
      router.push('/profile');
    }
  }

  return (
    <form action={handleLogin} className={css.form}>
      <h1 className={css.formTitle}>Sign in</h1>

      <div className={css.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className={css.input}
          required
        />
      </div>

      <div className={css.formGroup}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          className={css.input}
          required
        />
      </div>

      <div className={css.actions}>
        <button type="submit" className={css.submitButton}>
          Log in
        </button>
      </div>

      <p className={css.error}>{error}</p>
    </form>
  );
}

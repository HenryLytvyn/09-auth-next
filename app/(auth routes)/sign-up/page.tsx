// 'use-client';

import { RegisterRequest } from '@/types/apiRequestTypes';
import css from './SignUpPage.module.css';
import { register } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  async function handleRegister(formData: FormData) {
    const payload = Object.fromEntries(formData) as RegisterRequest;
    const response = await register(payload);
    if (response) {
      router.push('/profile');
    }
  }

  return (
    <>
      <h1 className={css.formTitle}>Sign up</h1>
      <form action={handleRegister} className={css.form}>
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
            Register
          </button>
        </div>

        <p className={css.error}>Error</p>
      </form>
    </>
  );
}

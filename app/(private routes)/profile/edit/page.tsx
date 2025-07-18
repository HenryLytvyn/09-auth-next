'use client';

import { useAuthStore } from '@/lib/store/authStore';
import css from './EditProfilePage.module.css';
import { User } from '@/types/user';
import { userUpdate } from '@/lib/api/clientApi';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function EditProfile() {
  const setUser = useAuthStore(state => state.setUser);
  const user = useAuthStore(state => state.user);
  const router = useRouter();

  function handleSubmit(formData: FormData) {
    const userName = formData.get('username') as string;
    if (!userName.trim()) {
      return;
    }

    if (user) {
      const newUserData: User = {
        email: user.email,
        username: userName,
      };
      async function updatingUserData(userData: User) {
        const request = await userUpdate(userData);
        setUser(request);
      }
      updatingUserData(newUserData);
    }

    router.push('/profile');
  }

  return (
    <div className={css.mainContent}>
      <div className={css.profileCard}>
        <h1 className={css.formTitle}>Edit Profile</h1>

        {user?.avatar && user.avatar !== '' && (
          <Image
            src={user.avatar}
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        )}

        <form action={handleSubmit} className={css.profileInfo}>
          <div className={css.usernameWrapper}>
            <label htmlFor="username">Username:</label>
            <input
              name="username"
              id="username"
              type="text"
              className={css.input}
            />
          </div>

          <p>{user?.email}</p>

          <div className={css.actions}>
            <button type="submit" className={css.saveButton}>
              Save
            </button>
            <button
              onClick={() => {
                router.push('/');
              }}
              type="button"
              className={css.cancelButton}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

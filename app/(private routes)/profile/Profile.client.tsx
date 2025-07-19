'use client';

import { User } from '@/types/user';
import css from '../profile/ProfilePage.module.css';
import Image from 'next/image';
import { useAuthStore } from '@/lib/store/authStore';

export default function ProfileClient() {
  const user: User | null = useAuthStore(state => state.user);

  return (
    <>
      <div className={css.avatarWrapper}>
        {user && user.avatar && user.avatar !== '' && (
          <Image
            src={user.avatar}
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        )}
      </div>
      <div className={css.profileInfo}>
        <p>Username: {user && user.username}</p>
        <p>Email: {user && user.email}</p>
      </div>
    </>
  );
}

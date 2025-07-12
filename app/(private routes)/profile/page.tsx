import { Metadata } from 'next';
import css from './ProfilePage.module.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "User's profile",
  description:
    'Manage your personal information, settings, and sync options in your NoteFlow profile — the smart way to create and organize notes.',
  openGraph: {
    title: "User's profile",
    description:
      'Manage your personal information, settings, and sync options in your NoteFlow profile — the smart way to create and organize notes.',
    url: 'https://08-zustand-zeta.vercel.app/profile',
    images: [
      {
        url: '/notehub-og-meta',
        width: 1200,
        height: 630,
        alt: 'NoteHub styling card',
      },
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub styling card',
      },
    ],
  },
};

export default function Profile() {
  return (
    <div className={css.profileCard}>
      <div className={css.header}>
        <h1 className={css.formTitle}>Profile Page</h1>
        <Link href={'/'} className={css.editProfileButton}>
          Edit Profile
        </Link>
      </div>
      <div className={css.avatarWrapper}>
        <img
          src="Avatar"
          alt="User Avatar"
          width={120}
          height={120}
          className={css.avatar}
        />
      </div>
      <div className={css.profileInfo}>
        <p>Username: your_username</p>
        <p>Email: your_email@example.com</p>
      </div>
    </div>
  );
}

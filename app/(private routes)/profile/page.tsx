import { Metadata } from 'next';
import css from './ProfilePage.module.css';
import Link from 'next/link';
import ProfileClient from './Profile.client';

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

export default async function Profile() {
  return (
    <div className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <Link href={'/profile/edit'} className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        <ProfileClient />
      </div>
    </div>
  );
}

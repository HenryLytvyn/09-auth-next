import Link from 'next/link';
import css from './Header.module.css';
import TagsMenu from '../TagsMenu/TagsMenu';
import AuthNavigation from '../AuthNavigation/AuthNavigation';

export default async function Header() {
  return (
    <header className={css.header}>
      <Link className={css.headerLink} href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <AuthNavigation />
          <li className={css.navigationItem}>
            <Link className={css.navigationLink} href="/">
              Home
            </Link>
          </li>
          <li>
            <TagsMenu />
          </li>
        </ul>
      </nav>
    </header>
  );
}

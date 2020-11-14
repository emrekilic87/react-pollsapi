import Link from 'next/link'
import css from './Header.module.css'

function Header() {
  return (
    <div className={css.header}>
      <h1 className={css.title}>Polls Project</h1>
      <nav className={css.nav}>
        <Link href="/">
          <a className={css.link}>HOME</a>
        </Link>

        <Link href="/about">
          <a className={css.link}>ABOUT</a>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
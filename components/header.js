import Link from 'next/link'

function Header() {
  return (
    <div className="header">
      <h1>Polls Project</h1>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src="/asalsol.png" width={80} height={80} />
          </a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <a>Profile List</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

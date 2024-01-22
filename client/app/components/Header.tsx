import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <strong>LearnNextJS</strong>
      <nav>
        <Link href={'/'}>Main</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/registration'}>Sing In</Link>
        <Link href={'/login'}>Login</Link>


      </nav>
    
    </header>
  );
};

export default Header;

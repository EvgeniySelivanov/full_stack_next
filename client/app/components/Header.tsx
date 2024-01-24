'use client';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
const Header = () => {
  const session = useSession();
  console.log(session);

  return (
    <header>
      <strong>LearnNextJS</strong>
      <nav>
        <Link href={'/'}>Main</Link>

        <Link href={'/about'}>About</Link>
        {session?.data && <Link href={'/profile'}>Profile</Link>}

        {/* {session?data && <Link href={"/about"} ></Link>} */}

        {session?.data ? (
          <Link href="#" onClick={() => signOut({ callbackUrl: '/' })}>
            Sing Out
          </Link>
        ) : (
          <Link href={'/signin'}>Sing In</Link>
        )}
      <Link href={'/registration'}>Registration</Link>
      </nav>
    </header>
  );
};

export default Header;

'use client';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useAuth } from '../AuthContext';
const Header = () => {
  const session = useSession();
  const { user } = useAuth();
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
          <Link href={'/api/auth/signin'}>Sing In</Link>
        )}
        <p>
          <strong>User</strong> {session.data?.user.email}
        </p>
      </nav>
    </header>
  );
};

export default Header;

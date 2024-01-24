'use client';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import Button from './UI/Button/Button';
const GoogleButton = ({ className, text }) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';
  return (
    <Button
      className={className}
      onClick={() => signIn('google', { callbackUrl })}
    >
      {text}
    </Button>
  );
};
export default GoogleButton;

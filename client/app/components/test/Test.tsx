'use client';
import * as React from 'react';
import { useAuth } from '../../AuthContext';
import { useSession } from 'next-auth/react';
export interface IAppProps {}

const Test = (props: IAppProps) => {
  const session=useSession();
  const { user } = useAuth();
  return (
    <div>
      <p><strong>Status:</strong> {session.status}</p>
      <p><strong>Name:</strong> {session.data?.user.name}</p>
      <p><strong>Email</strong> {session.data?.user.email}</p>
    </div>
  );
};
export default Test;

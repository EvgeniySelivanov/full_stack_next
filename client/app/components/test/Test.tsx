'use client';
import * as React from 'react';
import { useAuth, AuthProvider } from '../../AuthContext';
export interface IAppProps {}

const Test = (props: IAppProps) => {
  const { user } = useAuth();
  return (
    <div>
      <p>Name {user.first_name}</p>
      <p>Last name {user.last_name}</p>
      <p>Email {user.email}</p>
    </div>
  );
};
export default Test;

import type { AuthOptions,User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const response = await fetch(
          'http://localhost:5000/api/users/?email=${credentials.email}',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const {data} = await response?.json();
        console.log('response>>>>>>>',data[0]);
       const fullName=`${data[0].first_name}  ${data[0].last_name}`
        if (data[0].email === credentials.email) {
          const proof={
            name:fullName,
            email:data[0].email,
            image:data[0]?.image
          }
          return proof as User;
        }
        return null
      },
    }),
  ],
};

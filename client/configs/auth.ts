import type { AuthOptions, User } from 'next-auth';
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

        console.log('credentials>>>>>', credentials);
        if (!credentials?.email || !credentials?.password){

          console.log('credentials no data>>>>>', credentials);
          return null;
        } 

        const response = await fetch(
          `http://localhost:5000/api/users/getByEmail`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: credentials?.email,
            }),
          }
        );
        const { data } = await response?.json();
        console.log('response>>>>>>>', data);
        const fullName = `${data.first_name}  ${data.last_name}`;
        if (data.email === credentials.email) {
          const proof = {
            name: fullName,
            email: data.email,
            image: data?.image,
          };
          return proof as User;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
};

import type { AuthOptions, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

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
        if (!credentials?.email || !credentials?.password) {
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
        const fullName:string = await `${data.first_name}  ${data.last_name}`;
        const checkPass:boolean = await bcrypt.compare(
          credentials?.password,
          data?.password
        );
        if (data.email === credentials.email && checkPass) {
          const proof = await {
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

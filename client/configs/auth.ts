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
        console.log('email in signIn>>>>> ', credentials?.email);
        console.log('password in signIn>>>>> ', credentials?.password);

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
        console.log('data in sing in>>>>', data);

        const fullName = await `${data.first_name}  ${data.last_name}`;
        console.log('fullName>>>>>',fullName);
        
        const checkPass = await bcrypt.compare(
          credentials?.password,
          data?.password
        );
          console.log('checkPass',checkPass);
          
        if (data.email === credentials.email && checkPass) {
          const proof = await {
            name: fullName,
            email: data.email,
            image: data?.image,
          };
          console.log('proof>>>>>>', proof);

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

export { default } from 'next-auth/middleware';

//набор приватных роутов

export const config = { matcher: ['/profile'] };

import './style.css';

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
   weight: ['400', '700'],
  subsets: ['latin'],
});

export default function ShowLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <h1>Top info</h1>
        {children}
      </body>
    </html>
  );
}

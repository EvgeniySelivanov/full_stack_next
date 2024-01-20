import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';
const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'NextFull',
  description: 'hard app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <div className='container'>{children}</div>
        
        </body>
    </html>
  );
}

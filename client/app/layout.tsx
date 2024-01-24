import './globals.css';
import { AuthProvider } from './AuthContext';
import {Providers} from './components/Providers';
import { StyledEngineProvider } from '@mui/material/styles';
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
        <Providers>
        <AuthProvider>
          <StyledEngineProvider injectFirst>
            <Header />
            <div className="container">{children}</div>
          </StyledEngineProvider>
        </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}

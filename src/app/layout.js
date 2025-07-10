import './globals.css';
// import { GoogleAnalytics } from '@next/third-parties/google';
import { Providers } from './provider';
import MobileNav from '@/components/MobileNav';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ToggleProvider } from '@/components/Context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Dobrogea 150',
  description:
    'Organizație non guvernamentală care are ca scop protejarea patrimoniului cultural dobrogean, promovarea identității multiculturale și diversitatea etnică specifice zonei, dar și încurajarea protejării spațiilor verzi.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={'body'}>
        {/* <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} /> */}

        <ToggleProvider>
          <ToastContainer />
          <Providers>
            <MobileNav />
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </ToggleProvider>
      </body>
    </html>
  );
}

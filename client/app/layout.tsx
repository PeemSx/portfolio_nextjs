import { Inter } from 'next/font/google'
import './globals.css'
import { NextAuthProvider } from '../providers/NextAuthProvider';
import { getServerSession } from 'next-auth';
// import { authOptions } from './api/auth/[...nextauth]/route';
import { authOptions } from './utils/authOption';
import TopMenu from './components/TopMenu';

import ReduxProvider from '../redux/ReduxProvider';

const inter = Inter({ subsets: ['latin'] });


export default async function RootLayout({ children } ) {

  
  const nextAuthSession =  await getServerSession(authOptions)
  return (
    
    <html lang="en">
     
        <body className={inter.className}>
          <ReduxProvider>
            <NextAuthProvider session={nextAuthSession}>
              <TopMenu/>
              {children}
            </NextAuthProvider>
          </ReduxProvider>


        </body>
    </html>
  )
}

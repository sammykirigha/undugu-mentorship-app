"use client"
import './globals.css'
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import IndexPage from './head';
import NavBar from '@/components/NavBar/page';
import Footer from '@/components/footer/page';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  return (
    <html lang="en">
      {/* <IndexPage /> */}
      <body className={inter.className}>
        <NavBar />
        <main className='h-[85.3vh]'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
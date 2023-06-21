import '../../styles/globals.css'

import NavBar from '@/src/components/NavBar/page';
import Footer from '@/src/components/footer/page';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Undugu Mentorship Initiative',
  description: 'The organization envisages every responsible adult taking responsibility to offer support, guidance and motivation to the younger generation.',
  icons:'/logo-two.jpg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

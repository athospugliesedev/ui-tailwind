import Sidebar from '@/components/Sidebar/Index';
import './globals.css'

import { Inter } from 'next/font/google';
import { HeroPattern } from '@/components/Patterns/Hero';
import Header from '@/components/Header/Index';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UI Tailwind',
  description: 'Exercício de fixação de TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className='bg-zinc-900'>
        <Sidebar />
        <div className="ml-80 relative h-screen">
          <Header />
          <HeroPattern />
<div className="py-24 max-w-4xl px-8 mx-auto">
          {children}

</div>

        </div>
      </body>
    </html>
  )
}

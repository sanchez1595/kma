'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Header } from '@/components/header'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/'

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body className={inter.className}>
        {!isLoginPage && <Header />}
        {children}
      </body>
    </html>
  )
}
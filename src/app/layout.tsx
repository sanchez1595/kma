import './globals.css'
import { Inter } from 'next/font/google'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KoryAdmin',
  description: 'Admin platform for Kory projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
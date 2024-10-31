'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebaseConfig'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      router.push('/login')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">KMA</h1>
          <div className="flex items-center gap-4">
            <span>Bienvenido, {auth.currentUser?.email}</span>
            <Button variant="secondary" onClick={handleSignOut}>Cerrar Sesión</Button>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
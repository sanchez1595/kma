'use client'

import { Bell, HelpCircle, ChevronDown, Globe } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { signOut } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { useRouter } from 'next/navigation'

export function Header() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await signOut(auth)
      // Redirige al usuario a la página de inicio de sesión
      router.push('/')
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
    }
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/__logo.svg"
                alt="Logo de la inmobiliaria"
                width={120}
                height={40}
              />
            </Link>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-1">
                  <Globe className="h-4 w-4" />
                  <span>ES</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Español</DropdownMenuItem>
                <DropdownMenuItem>English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Popover open={isNotificationOpen} onOpenChange={setIsNotificationOpen}>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="relative" aria-label="Notificaciones">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-red-500"></span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex flex-col space-y-2">
                  <h3 className="font-semibold">Notificaciones</h3>
                  <p className="text-sm text-gray-500">No tienes notificaciones nuevas.</p>
                </div>
              </PopoverContent>
            </Popover>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <div className="h-8 w-8 overflow-hidden rounded-full">
                    <Image
                      src="/avatar.jpg"
                      alt="Foto de perfil"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="hidden sm:inline-block">Juan Pérez</span>
                  <ChevronDown className="h-4 w-4 hidden sm:block" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Configuración</DropdownMenuItem>
                <DropdownMenuItem onSelect={handleLogout}>Cerrar sesión</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" aria-label="Ayuda" className="hidden sm:inline-flex">
              <HelpCircle className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
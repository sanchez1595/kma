'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Bell, X, User, Settings, LogOut, Check, RefreshCcw, FileText, TrendingUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { useRouter } from 'next/navigation'

type Notification = {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: React.ReactNode;
  isRead: boolean;
}

const initialNotifications: Notification[] = [
  { 
    id: 1, 
    title: 'Actualización de la plataforma', 
    description: 'Hemos mejorado la interfaz de usuario para una mejor experiencia.', 
    time: 'Hace 2 horas', 
    icon: <RefreshCcw className="h-6 w-6 text-blue-500" />, 
    isRead: false
  },
  { 
    id: 2, 
    title: 'Nuevo informe disponible', 
    description: 'Se ha publicado el informe trimestral de rendimiento de inversiones.', 
    time: 'Ayer', 
    icon: <FileText className="h-6 w-6 text-green-500" />, 
    isRead: false 
  },
  { 
    id: 3, 
    title: 'Nueva oportunidad de inversión', 
    description: 'Descubre el nuevo proyecto "Residencial Horizonte" con retornos estimados del 15%.', 
    time: 'Hace 2 días', 
    icon: <TrendingUp className="h-6 w-6 text-purple-500" />, 
    isRead: false 
  },
]

export function Header() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications)
  const notificationRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const unreadCount = notifications.filter(n => !n.isRead).length

  const toggleNotifications = () => {
    setIsNotificationOpen(prev => !prev)
    if (isProfileOpen) setIsProfileOpen(false)
  }

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen)
    setIsNotificationOpen(false)
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      router.push('/')
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
    }
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })))
  }

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, isRead: true } : n
    ))
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationOpen(false)
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Image
              src="__logo.svg"
              alt="Logo"
              width={120}
              height={40}
              className="h-8 w-auto sm:h-10"
            />
          </div>
          
          <div className="flex items-center md:ml-12">
            <div className="relative">
              <button
                onClick={toggleNotifications}
                className="ml-4 relative inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-label="Ver notificaciones"
              >
                <Bell className="h-6 w-6" />
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
                )}
              </button>

              <AnimatePresence>
                {isNotificationOpen && (
                  <motion.div
                    ref={notificationRef}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 max-h-[80vh] overflow-y-auto"
                    style={{ maxWidth: 'calc(100vw - 2rem)' }}
                  >
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-medium text-gray-900">Notificaciones</h2>
                        <button
                          onClick={toggleNotifications}
                          className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1"
                        >
                          <span className="sr-only">Cerrar notificaciones</span>
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="space-y-4">
                        {notifications.map((notification) => (
                          <div 
                            key={notification.id} 
                            className={`flex items-start py-3 ${
                              notification.isRead ? 'bg-white' : 'bg-blue-50'
                            } rounded-lg p-2 cursor-pointer hover:bg-gray-50`}
                            onClick={() => markAsRead(notification.id)}
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                              {notification.icon}
                            </div>
                            <div className="ml-3 flex-1">
                              <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                              <p className="mt-1 text-sm text-gray-500">{notification.description}</p>
                              <p className="mt-1 text-xs text-gray-400">{notification.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      {unreadCount > 0 && (
                        <button
                          onClick={markAllAsRead}
                          className="mt-4 w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-200"
                        >
                          Marcar todas como leídas
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="ml-4 relative flex-shrink-0">
              <button
                onClick={toggleProfile}
                className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                id="user-menu"
                aria-haspopup="true"
              >
                <span className="sr-only">Abrir menú de usuario</span>
                <Image
                  className="h-8 w-8 rounded-full"
                  src="/avatar.jpg"
                  alt="Avatar del usuario"
                  width={32}
                  height={32}
                />
              </button>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    ref={profileRef}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <User className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                      Mi Perfil de Inversor
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <Settings className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                      Configuración
                    </a>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <LogOut className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                      Cerrar Sesión
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
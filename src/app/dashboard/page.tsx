'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { WeeklyProgress } from './WeeklyProgress'
import { ProjectGallery } from './ProjectGallery'
import { ContractualProgress } from './ContractualProgress'
import { ProgressCurve } from './ProgressCurve'
import { ZoomProgressCurve } from './zoom-progress-curve'
import { auth } from '../../../firebaseConfig'
import { signOut, onAuthStateChanged, User } from 'firebase/auth'

export default function Dashboard() {
  const [selectedProject, setSelectedProject] = useState('project1')
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  const projects = [
    { id: 'project1', name: 'Proyecto 1' },
    { id: 'project2', name: 'Proyecto 2' },
    { id: 'project3', name: 'Proyecto 3' },
  ]

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      } else {
        router.push('/')
      }
    })

    return () => unsubscribe()
  }, [router])

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      router.push('/')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  if (!user) {
    return null // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">KoryAdmin</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Bienvenido, {user.email}</span>
            <Button onClick={handleSignOut} variant="outline">Cerrar Sesión</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Selección de Proyecto</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedProject} onValueChange={setSelectedProject}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecciona un proyecto" />
              </SelectTrigger>
              <SelectContent>
                {projects.map((project) => (
                  <SelectItem key={project.id} value={project.id}>
                    {project.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <WeeklyProgress />
        <ProjectGallery />
        <ContractualProgress />
        <ProgressCurve />
        <ZoomProgressCurve />
      </main>
    </div>
  )
}
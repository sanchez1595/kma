'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/Footer'
import { ProjectView } from '@/components/project-view'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const projects = [
  { id: 1, name: "Residencial Los Álamos" },
  { id: 2, name: "Torre Mirador" },
  { id: 3, name: "Condominio El Bosque" },
]

export default function Dashboard() {
  const [selectedProject, setSelectedProject] = useState<string>("")

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Explora Tus Proyectos Activos
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Selecciona el proyecto que deseas visualizar y accede a toda su información en un solo lugar.
            </p>
            <Select value={selectedProject} onValueChange={setSelectedProject}>
              <SelectTrigger className="w-full max-w-md">
                <SelectValue placeholder="Selecciona un proyecto" />
              </SelectTrigger>
              <SelectContent>
                {projects.map((project) => (
                  <SelectItem key={project.id} value={project.id.toString()}>
                    {project.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {selectedProject && (
            <ProjectView projectId={selectedProject} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
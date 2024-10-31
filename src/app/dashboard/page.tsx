'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { WeeklyProgress } from './WeeklyProgress'
import { ProjectGallery } from './ProjectGallery'
import { ContractualProgress } from './ContractualProgress'
import { ProgressCurve } from './ProgressCurve'
import { ZoomProgressCurve } from './zoom-progress-curve'

export default function Dashboard() {
  const [selectedProject, setSelectedProject] = useState('project1')

  const projects = [
    { id: 'project1', name: 'Proyecto 1' },
    { id: 'project2', name: 'Proyecto 2' },
    { id: 'project3', name: 'Proyecto 3' },
  ]

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      
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
    </div>
  )
}
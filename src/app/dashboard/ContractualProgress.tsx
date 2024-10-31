'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Task {
  id: number
  name: string
  startDate: string
  endDate: string
  realProgress: number
  plannedProgress: number
  durationVariation: number
  color: string
}

const tasks: Task[] = [
  { id: 0, name: "EDIFICIO ICALMA TORRE C CONTRACTUAL V8", startDate: "vie 05-05-23", endDate: "mié 05-11-25", realProgress: 49.77, plannedProgress: 42.23, durationVariation: 32, color: "bg-yellow-400" },
  { id: 1, name: "HITOS", startDate: "vie 15-03-24", endDate: "mié 05-11-25", realProgress: 0, plannedProgress: 0, durationVariation: 0, color: "bg-purple-400" },
  { id: 2, name: "OBRAS PRELIMINARES", startDate: "vie 05-05-23", endDate: "jue 14-09-23", realProgress: 100, plannedProgress: 100, durationVariation: 0, color: "bg-blue-400" },
  { id: 3, name: "PILAS SOCALZADO", startDate: "vie 05-05-23", endDate: "lun 10-07-23", realProgress: 100, plannedProgress: 100, durationVariation: 0, color: "bg-blue-400" },
  { id: 4, name: "MOVIMIENTO DE TIERRA", startDate: "vie 26-05-23", endDate: "mar 08-08-23", realProgress: 100, plannedProgress: 100, durationVariation: 0, color: "bg-blue-400" },
  { id: 5, name: "OBRA GRUESA", startDate: "lun 07-08-23", endDate: "lun 06-01-25", realProgress: 93.87, plannedProgress: 87.53, durationVariation: 32, color: "bg-blue-400" },
  { id: 6, name: "TERMINACIONES DEPARTAMENTOS (P02-P21)", startDate: "mar 16-04-24", endDate: "vie 05-09-25", realProgress: 39.87, plannedProgress: 27.49, durationVariation: 32, color: "bg-blue-400" },
  { id: 7, name: "CUBIERTA", startDate: "mar 07-01-25", endDate: "lun 24-03-25", realProgress: 0, plannedProgress: 0, durationVariation: 0, color: "bg-blue-400" },
  { id: 8, name: "FACHADA", startDate: "mar 07-01-25", endDate: "jue 12-06-25", realProgress: 0, plannedProgress: 0, durationVariation: 0, color: "bg-blue-400" },
  { id: 9, name: "TERMINACIONES SUBTERRÁNEOS", startDate: "mié 31-01-24", endDate: "lun 04-08-25", realProgress: 24.25, plannedProgress: 11.51, durationVariation: 140, color: "bg-blue-400" },
  { id: 10, name: "TERMINACIONES ESPACIOS COMUNES E INTERIORISMO", startDate: "mar 10-09-24", endDate: "mié 03-09-25", realProgress: 13.89, plannedProgress: 4.46, durationVariation: 42, color: "bg-blue-400" },
  { id: 11, name: "TERMINACIONES LOCALES COMERCIALES", startDate: "jue 13-03-25", endDate: "lun 30-06-25", realProgress: 0, plannedProgress: 0, durationVariation: 0, color: "bg-blue-400" },
  { id: 12, name: "OBRAS EXTERIORES", startDate: "lun 18-03-24", endDate: "lun 11-08-25", realProgress: 0, plannedProgress: 4.79, durationVariation: -163, color: "bg-blue-400" },
  { id: 13, name: "INSTALACIONES/SALAS TÉCNICAS", startDate: "mar 16-04-24", endDate: "mar 02-09-25", realProgress: 0, plannedProgress: 14.46, durationVariation: -163, color: "bg-blue-400" },
  { id: 14, name: "ENTREGAS DPTOS", startDate: "mié 04-12-24", endDate: "mié 05-11-25", realProgress: 0, plannedProgress: 0, durationVariation: 0, color: "bg-blue-400" },
]

export function ContractualProgress() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Avance Contractual General</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">EDT</TableHead>
                <TableHead>Nombre de tareas</TableHead>
                <TableHead>Comienzo</TableHead>
                <TableHead>Fin</TableHead>
                <TableHead className="text-right">Avance Real</TableHead>
                <TableHead className="text-right">Avance Programado</TableHead>
                <TableHead className="text-right">Variación de duración</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id} className={task.color}>
                  <TableCell>{task.id}</TableCell>
                  <TableCell>{task.name}</TableCell>
                  <TableCell>{task.startDate}</TableCell>
                  <TableCell>{task.endDate}</TableCell>
                  <TableCell className="text-right">{task.realProgress}%</TableCell>
                  <TableCell className="text-right">{task.plannedProgress}%</TableCell>
                  <TableCell className="text-right">{task.durationVariation} días</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
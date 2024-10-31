'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function WeeklyProgress() {
  // Datos de ejemplo (en una aplicación real, estos datos vendrían de una API o base de datos)
  const currentWeek = {
    realProgress: 75.5,
    plannedProgress: 80.0,
    daysOffset: -2
  }

  const previousWeek = {
    realProgress: 70.2,
    plannedProgress: 75.0,
    daysOffset: -1
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Resumen de Progreso Semanal</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Período</TableHead>
              <TableHead>Avance Real</TableHead>
              <TableHead>Avance Programado</TableHead>
              <TableHead>Días de Desfase</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Semana actual</TableCell>
              <TableCell>{currentWeek.realProgress.toFixed(2)}%</TableCell>
              <TableCell>{currentWeek.plannedProgress.toFixed(2)}%</TableCell>
              <TableCell>{currentWeek.daysOffset}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Semana anterior</TableCell>
              <TableCell>{previousWeek.realProgress.toFixed(2)}%</TableCell>
              <TableCell>{previousWeek.plannedProgress.toFixed(2)}%</TableCell>
              <TableCell>{previousWeek.daysOffset}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
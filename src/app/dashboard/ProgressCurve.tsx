'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export function ProgressCurve() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'CURVA DE AVANCE GENERAL',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 120,
        ticks: {
          callback: function(tickValue: string | number) {
            return tickValue + '%'
          }
        }
      }
    }
  }

  // Generar fechas para los últimos 24 meses
  const generateDates = (count: number) => {
    const dates = []
    let currentDate = new Date('2023-05-05')
    for (let i = 0; i < count; i++) {
      dates.push(currentDate.toISOString().split('T')[0])
      currentDate.setMonth(currentDate.getMonth() + 1)
    }
    return dates
  }

  const labels = generateDates(24)

  // Generar datos simulados
  const generateProgressData = (initialValue: number, increment: number, randomFactor: number) => {
    return Array(24).fill(0).map((_, index) => {
      const baseValue = initialValue + (increment * index)
      const randomVariation = (Math.random() - 0.5) * randomFactor
      return Math.min(100, Math.max(0, baseValue + randomVariation))
    })
  }

  const programmedProgress = generateProgressData(0, 4, 2)
  const realProgress = generateProgressData(0, 4.2, 3)

  // Calcular la proyección de las últimas 4 semanas
  const projectionData = realProgress.map((value, index) => {
    if (index < realProgress.length - 4) {
      return null
    }
    const previousWeek = realProgress[index - 1]
    if (previousWeek !== undefined) {
      return value + (value - previousWeek)
    }
    return value
  })

  const data = {
    labels,
    datasets: [
      {
        label: 'AVANCE PROGRAMADO CONTRACTUAL',
        data: programmedProgress,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'AVANCE REAL CONTRACTUAL',
        data: realProgress,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'PROYECCIÓN ÚLTIMAS 4 SEMANAS',
        data: projectionData,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderDash: [5, 5],
      },
    ],
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Curva de Avance General</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ height: '400px' }}>
          <Line options={options} data={data} />
        </div>
      </CardContent>
    </Card>
  )
}
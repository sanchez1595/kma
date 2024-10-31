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

export function ZoomProgressCurve() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'ZOOM CURVA GENERAL',
      },
    },
    scales: {
      y: {
        min: 20,
        max: 60,
        ticks: {
          callback: function(value) {
            return value + ',00%'
          }
        }
      }
    }
  }

  // Datos de ejemplo que coinciden con la imagen
  const weeks = ['69', '70', '71', '72', '73', '74', '75', '76']
  const programmedProgress = [34.5, 35.2, 37.1, 37.2, 38.5, 40.2, 41.5, 42.8]
  const realProgress = [40.2, 41.5, 42.8, 43.5, 44.2, 45.5, 47.2, 49.5]

  const data = {
    labels: weeks,
    datasets: [
      {
        label: 'Av. Programado',
        data: programmedProgress,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.3,
      },
      {
        label: 'Av. Real',
        data: realProgress,
        borderColor: 'rgb(255, 159, 64)',
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
        tension: 0.3,
      }
    ],
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Zoom Curva General</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ height: '400px' }}>
          <Line options={options} data={data} />
        </div>
      </CardContent>
    </Card>
  )
}
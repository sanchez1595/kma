'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Ene', Meta: 4274.84, Real: 5288.80 },
  { month: 'Feb', Meta: 12824.48, Real: 6390.00 },
  { month: 'Mar', Meta: 8549.64, Real: 17082.00 },
  { month: 'Abr', Meta: 8549.64, Real: 0 },
  { month: 'May', Meta: 8549.64, Real: 0 },
  { month: 'Jun', Meta: 8549.64, Real: 0 },
  { month: 'Jul', Meta: 8549.64, Real: 0 },
  { month: 'Ago', Meta: 12824.54, Real: 0 },
  { month: 'Sep', Meta: 12824.48, Real: 0 },
  { month: 'Oct', Meta: 8549.64, Real: 0 },
  { month: 'Nov', Meta: 12824.54, Real: 0 },
  { month: 'Dic', Meta: 12824.48, Real: 0 }
]

const evolutionDataUF = [
  { month: 'Enero', presupuesto: 4274.84, real: 5288.80, cumplimiento: 123.7 },
  { month: 'Febrero', presupuesto: 12824.48, real: 6390.00, cumplimiento: 49.8 },
  { month: 'Marzo', presupuesto: 8549.64, real: 17082.00, cumplimiento: 199.8 },
  { month: 'Abril', presupuesto: 8549.64, real: 0, cumplimiento: 0 },
  { month: 'Mayo', presupuesto: 8549.64, real: 0, cumplimiento: 0 },
  { month: 'Junio', presupuesto: 8549.64, real: 0, cumplimiento: 0 },
  { month: 'Julio', presupuesto: 8549.64, real: 0, cumplimiento: 0 },
  { month: 'Agosto', presupuesto: 12824.54, real: 0, cumplimiento: 0 },
  { month: 'Septiembre', presupuesto: 12824.48, real: 0, cumplimiento: 0 },
  { month: 'Octubre', presupuesto: 8549.64, real: 0, cumplimiento: 0 },
  { month: 'Noviembre', presupuesto: 12824.54, real: 0, cumplimiento: 0 },
  { month: 'Diciembre', presupuesto: 12824.48, real: 0, cumplimiento: 0 }
]

const evolutionDataUnits = [
  { month: 'Enero', presupuesto: 1, real: 1, cumplimiento: 100.0 },
  { month: 'Febrero', presupuesto: 3, real: 1, cumplimiento: 33.3 },
  { month: 'Marzo', presupuesto: 2, real: 3, cumplimiento: 150.0 },
  { month: 'Abril', presupuesto: 2, real: 0, cumplimiento: 0 },
  { month: 'Mayo', presupuesto: 2, real: 0, cumplimiento: 0 },
  { month: 'Junio', presupuesto: 2, real: 0, cumplimiento: 0 },
  { month: 'Julio', presupuesto: 2, real: 0, cumplimiento: 0 },
  { month: 'Agosto', presupuesto: 3, real: 0, cumplimiento: 0 },
  { month: 'Septiembre', presupuesto: 3, real: 0, cumplimiento: 0 },
  { month: 'Octubre', presupuesto: 2, real: 0, cumplimiento: 0 },
  { month: 'Noviembre', presupuesto: 3, real: 0, cumplimiento: 0 },
  { month: 'Diciembre', presupuesto: 3, real: 0, cumplimiento: 0 }
]

export function ProjectSummary() {
  return (
    <div className="space-y-6">
      {/* Gráfico Principal */}
      <Card className="p-4">
        <div className="bg-rose-100/50 p-3 rounded-t-lg">
          <h2 className="text-lg font-semibold text-rose-900">Avance mensual Meta vs Real</h2>
        </div>
        <div className="pt-4 h-[300px] sm:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Meta" fill="#D1D5DB" />
              <Bar dataKey="Real" fill="#FCA5A5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Métricas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">119.695 UF</p>
              <p className="text-sm text-gray-500 mt-1">PPTO Anual</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">28.761 UF</p>
              <p className="text-sm text-gray-500 mt-1">Acumulado</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">24,0%</p>
              <p className="text-sm text-gray-500 mt-1">Cumplimiento PPTO Anual</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">30,6%</p>
              <p className="text-sm text-gray-500 mt-1">Cumplimiento PPTO Hasta Hoy</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">2,3</p>
              <p className="text-sm text-gray-500 mt-1">Velocidad PPTO</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">0,6</p>
              <p className="text-sm text-gray-500 mt-1">Velocidad Actual</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tablas Evolutivas */}
      <div className="space-y-6">
        <div className="bg-rose-100/50 p-3 rounded-lg">
          <h2 className="text-lg font-semibold text-rose-900">Evolutivo</h2>
        </div>
        
        {/* Tabla UF */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-gray-50">
              <tr>
                <th className="px-4 py-3 border">Mes</th>
                <th className="px-4 py-3 border">Presupuesto UF</th>
                <th className="px-4 py-3 border">Real UF</th>
                <th className="px-4 py-3 border">Cumplimiento mensual</th>
              </tr>
            </thead>
            <tbody>
              {evolutionDataUF.map((row, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-4 py-2 border font-medium">{row.month}</td>
                  <td className="px-4 py-2 border text-right">{row.presupuesto.toLocaleString('es-CL', { minimumFractionDigits: 2 })}</td>
                  <td className="px-4 py-2 border text-right">{row.real.toLocaleString('es-CL', { minimumFractionDigits: 2 })}</td>
                  <td className="px-4 py-2 border text-right">{row.cumplimiento.toFixed(1)}%</td>
                </tr>
              ))}
              <tr className="bg-gray-50 font-semibold">
                <td className="px-4 py-2 border">Total</td>
                <td className="px-4 py-2 border text-right">
                  {evolutionDataUF.reduce((sum, row) => sum + row.presupuesto, 0).toLocaleString('es-CL', { minimumFractionDigits: 2 })}
                </td>
                <td className="px-4 py-2 border text-right">
                  {evolutionDataUF.reduce((sum, row) => sum + row.real, 0).toLocaleString('es-CL', { minimumFractionDigits: 2 })}
                </td>
                <td className="px-4 py-2 border text-right">
                  {(evolutionDataUF.reduce((sum, row) => sum + row.real, 0) / 
                    evolutionDataUF.reduce((sum, row) => sum + row.presupuesto, 0) * 100).toFixed(1)}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tabla Unidades */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-gray-50">
              <tr>
                <th className="px-4 py-3 border">Mes</th>
                <th className="px-4 py-3 border">Presupuesto unidad</th>
                <th className="px-4 py-3 border">Real unidad</th>
                <th className="px-4 py-3 border">Cumplimiento mensual</th>
              </tr>
            </thead>
            <tbody>
              {evolutionDataUnits.map((row, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-4 py-2 border font-medium">{row.month}</td>
                  <td className="px-4 py-2 border text-right">{row.presupuesto}</td>
                  <td className="px-4 py-2 border text-right">{row.real}</td>
                  <td className="px-4 py-2 border text-right">{row.cumplimiento.toFixed(1)}%</td>
                </tr>
              ))}
              <tr className="bg-gray-50 font-semibold">
                <td className="px-4 py-2 border">Total</td>
                <td className="px-4 py-2 border text-right">
                  {evolutionDataUnits.reduce((sum, row) => sum + row.presupuesto, 0)}
                </td>
                <td className="px-4 py-2 border text-right">
                  {evolutionDataUnits.reduce((sum, row) => sum + row.real, 0)}
                </td>
                <td className="px-4 py-2 border text-right">
                  {(evolutionDataUnits.reduce((sum, row) => sum + row.real, 0) / 
                    evolutionDataUnits.reduce((sum, row) => sum + row.presupuesto, 0) * 100).toFixed(1)}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
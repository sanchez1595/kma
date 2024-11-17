'use client'

import React from 'react'
import { Separator } from "@/components/ui/separator"
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

const evolutionData = [
  { month: 'Enero', presupuestoUF: 4274.84, realUF: 5288.80, cumplimientoUF: 123.7, presupuestoUnidad: 1, realUnidad: 1, cumplimientoUnidad: 100.0 },
  { month: 'Febrero', presupuestoUF: 12824.48, realUF: 6390.00, cumplimientoUF: 49.8, presupuestoUnidad: 3, realUnidad: 1, cumplimientoUnidad: 33.3 },
  { month: 'Marzo', presupuestoUF: 8549.64, realUF: 17082.00, cumplimientoUF: 199.8, presupuestoUnidad: 2, realUnidad: 3, cumplimientoUnidad: 150.0 },
  { month: 'Abril', presupuestoUF: 8549.64, realUF: 0, cumplimientoUF: 0, presupuestoUnidad: 2, realUnidad: 0, cumplimientoUnidad: 0 },
  { month: 'Mayo', presupuestoUF: 8549.64, realUF: 0, cumplimientoUF: 0, presupuestoUnidad: 2, realUnidad: 0, cumplimientoUnidad: 0 },
  { month: 'Junio', presupuestoUF: 8549.64, realUF: 0, cumplimientoUF: 0, presupuestoUnidad: 2, realUnidad: 0, cumplimientoUnidad: 0 },
  { month: 'Julio', presupuestoUF: 8549.64, realUF: 0, cumplimientoUF: 0, presupuestoUnidad: 2, realUnidad: 0, cumplimientoUnidad: 0 },
  { month: 'Agosto', presupuestoUF: 12824.54, realUF: 0, cumplimientoUF: 0, presupuestoUnidad: 3, realUnidad: 0, cumplimientoUnidad: 0 },
  { month: 'Septiembre', presupuestoUF: 12824.48, realUF: 0, cumplimientoUF: 0, presupuestoUnidad: 3, realUnidad: 0, cumplimientoUnidad: 0 },
  { month: 'Octubre', presupuestoUF: 8549.64, realUF: 0, cumplimientoUF: 0, presupuestoUnidad: 2, realUnidad: 0, cumplimientoUnidad: 0 },
  { month: 'Noviembre', presupuestoUF: 12824.54, realUF: 0, cumplimientoUF: 0, presupuestoUnidad: 3, realUnidad: 0, cumplimientoUnidad: 0 },
  { month: 'Diciembre', presupuestoUF: 12824.48, realUF: 0, cumplimientoUF: 0, presupuestoUnidad: 3, realUnidad: 0, cumplimientoUnidad: 0 }
]

export function ProjectSummary() {
  return (
    <div className="space-y-8">
      {/* Gráfico Principal */}
      <div className="bg-white p-4 rounded-lg">
        <div className="bg-blue-100/50 p-3 rounded-t-lg">
          <h2 className="text-lg font-semibold text-blue-900">Avance mensual Meta vs Real</h2>
        </div>
        <div className="pt-4 h-[300px] sm:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Meta" fill="#93C5FD" />
              <Bar dataKey="Real" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <Separator />

      {/* Métricas Segmentadas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sección Ventas */}
        <div className="space-y-4">
          <div className="bg-blue-100/50 p-3 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-900">Ventas</h2>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">119.695 UF</p>
              <p className="text-sm text-gray-500 mt-1">PPTO Anual</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">28.761 UF</p>
              <p className="text-sm text-gray-500 mt-1">Acumulado</p>
            </div>
          </div>
        </div>

        {/* Sección % Cumplimiento */}
        <div className="space-y-4">
          <div className="bg-blue-100/50 p-3 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-900">% Cumplimiento</h2>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">24,0%</p>
              <p className="text-sm text-gray-500 mt-1">Cumplimiento PPTO Anual</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">30,6%</p>
              <p className="text-sm text-gray-500 mt-1">Cumplimiento PPTO Hasta Hoy</p>
            </div>
          </div>
        </div>

        {/* Sección Velocidad Unidad */}
        <div className="space-y-4">
          <div className="bg-blue-100/50 p-3 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-900">Velocidad Unidad</h2>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">2,3</p>
              <p className="text-sm text-gray-500 mt-1">Velocidad PPTO</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">0,6</p>
              <p className="text-sm text-gray-500 mt-1">Velocidad Actual</p>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Tabla Evolutiva Combinada */}
      <div className="space-y-8">
        <div className="bg-blue-100/50 p-3 rounded-lg">
          <h2 className="text-lg font-semibold text-blue-900">Evolutivo</h2>
        </div>
        
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mes</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Presupuesto UF</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Real UF</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cumplimiento UF</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Presupuesto Unidad</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Real Unidad</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cumplimiento Unidad</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {evolutionData.map((row, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.month}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.presupuestoUF.toLocaleString('es-CL', { minimumFractionDigits: 2 })}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.realUF.toLocaleString('es-CL', { minimumFractionDigits: 2 })}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.cumplimientoUF.toFixed(1)}%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.presupuestoUnidad}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.realUnidad}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.cumplimientoUnidad.toFixed(1)}%</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Total</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {evolutionData.reduce((sum, row) => sum + row.presupuestoUF, 0).toLocaleString('es-CL', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {evolutionData.reduce((sum, row) => sum + row.realUF, 0).toLocaleString('es-CL', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {(evolutionData.reduce((sum, row) => sum + row.realUF, 0) / 
                        evolutionData.reduce((sum, row) => sum + row.presupuestoUF, 0) * 100).toFixed(1)}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {evolutionData.reduce((sum, row) => sum + row.presupuestoUnidad, 0)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {evolutionData.reduce((sum, row) => sum + row.realUnidad, 0)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {(evolutionData.reduce((sum, row) => sum + row.realUnidad, 0) / 
                        evolutionData.reduce((sum, row) => sum + row.presupuestoUnidad, 0) * 100).toFixed(1)}%
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
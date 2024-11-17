'use client'

import React, { useState, useMemo } from 'react'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Filter } from 'lucide-react'
import { BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DataItem {
  date: string;
  year: string;
  units: number;
  accumulated: number;
  etapa?: string;
  subagrupacion?: string;
  tipoVenta?: string;
  unidadMedida?: string;
  bonoPie?: string;
  tipoProducto?: string;
}

interface Filters {
  etapa?: string;
  subagrupacion?: string;
  tipoVenta?: string;
  unidadMedida?: string;
  bonoPie?: string;
  tipoProducto?: string;
}

// Datos exactos del gráfico
const allData: DataItem[] = [
  // 2018
  { date: '12-24', year: '2018', units: 80, accumulated: 10 },
  { date: '01-24', year: '2018', units: 28, accumulated: 12 },
  { date: '02-24', year: '2018', units: 5, accumulated: 13 },
  { date: '03-24', year: '2018', units: 8, accumulated: 14 },
  { date: '04-24', year: '2018', units: 16, accumulated: 15 },
  { date: '05-24', year: '2018', units: 4, accumulated: 16 },
  { date: '06-24', year: '2018', units: 22, accumulated: 17 },
  { date: '07-24', year: '2018', units: 30, accumulated: 18 },
  { date: '08-24', year: '2018', units: 15, accumulated: 19 },
  { date: '09-24', year: '2018', units: 18, accumulated: 20 },
  { date: '10-24', year: '2018', units: 12, accumulated: 21 },
  { date: '11-24', year: '2018', units: 15, accumulated: 22 },
  { date: '12-24', year: '2018', units: 20, accumulated: 23 },
  // 2019
  { date: '01-19', year: '2019', units: 48, accumulated: 25 },
  { date: '02-19', year: '2019', units: 15, accumulated: 27 },
  { date: '03-19', year: '2019', units: 18, accumulated: 29 },
  { date: '04-19', year: '2019', units: 12, accumulated: 31 },
  { date: '05-19', year: '2019', units: 15, accumulated: 33 },
  { date: '06-19', year: '2019', units: 8, accumulated: 35 },
  // 2020
  { date: '01-20', year: '2020', units: 28, accumulated: 37 },
  { date: '02-20', year: '2020', units: 12, accumulated: 38 },
  { date: '03-20', year: '2020', units: 10, accumulated: 39 },
  { date: '04-20', year: '2020', units: 12, accumulated: 40 },
  { date: '05-20', year: '2020', units: 10, accumulated: 41 },
  { date: '06-20', year: '2020', units: 12, accumulated: 42 },
  { date: '07-20', year: '2020', units: 15, accumulated: 43 },
  { date: '08-20', year: '2020', units: 18, accumulated: 44 },
  { date: '09-20', year: '2020', units: 22, accumulated: 45 },
  { date: '10-20', year: '2020', units: 25, accumulated: 46 },
  { date: '11-20', year: '2020', units: 15, accumulated: 47 },
  { date: '12-20', year: '2020', units: 10, accumulated: 48 },
  // 2021-2023
  { date: '06-21', year: '2021', units: 8, accumulated: 52 },
  { date: '12-21', year: '2021', units: 5, accumulated: 56 },
  { date: '06-22', year: '2022', units: 12, accumulated: 60 },
  { date: '12-22', year: '2022', units: 8, accumulated: 63 },
  { date: '06-23', year: '2023', units: 15, accumulated: 67 },
  { date: '12-23', year: '2023', units: 10, accumulated: 70 }
]

interface FilterPanelProps {
  onFilterChange: (filters: Partial<Filters>) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ onFilterChange }) => {
  const handleFilterChange = (key: keyof Filters, value: string) => {
    onFilterChange({ [key]: value });
  }

  return (
    <div className="space-y-4 p-4 min-w-[240px]">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Etapa</label>
        <Select onValueChange={(value) => handleFilterChange('etapa', value)}>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="(All)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">(All)</SelectItem>
            <SelectItem value="etapa1">Etapa 1</SelectItem>
            <SelectItem value="etapa2">Etapa 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Subagrupación</label>
        <Select onValueChange={(value) => handleFilterChange('subagrupacion', value)}>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="(All)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">(All)</SelectItem>
            <SelectItem value="sub1">Subagrupación 1</SelectItem>
            <SelectItem value="sub2">Subagrupación 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Tipo de Venta</label>
        <Select onValueChange={(value) => handleFilterChange('tipoVenta', value)}>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="Venta Vigente" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="vigente">Venta Vigente</SelectItem>
            <SelectItem value="total">Venta Total</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Unidad de Medida</label>
        <Select onValueChange={(value) => handleFilterChange('unidadMedida', value)}>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="Unidades" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="unidades">Unidades</SelectItem>
            <SelectItem value="reservas">Reservas</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Bono Pie</label>
        <Select onValueChange={(value) => handleFilterChange('bonoPie', value)}>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="Venta Total" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="total">Venta Total</SelectItem>
            <SelectItem value="parcial">Parcial</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Tipo producto</label>
        <Select onValueChange={(value) => handleFilterChange('tipoProducto', value)}>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="Todos los Negocios" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos los Negocios</SelectItem>
            <SelectItem value="apartamentos">Apartamentos</SelectItem>
            <SelectItem value="casas">Casas</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export function VentasView(): JSX.Element {
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [filters, setFilters] = useState<Filters>({})

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  const filteredData = useMemo(() => {
    return allData.filter(item => 
      (selectedYear === "all" || item.year === selectedYear) &&
      (!filters.etapa || filters.etapa === "all" || item.etapa === filters.etapa) &&
      (!filters.subagrupacion || filters.subagrupacion === "all" || item.subagrupacion === filters.subagrupacion) &&
      (!filters.tipoVenta || item.tipoVenta === filters.tipoVenta) &&
      (!filters.unidadMedida || item.unidadMedida === filters.unidadMedida) &&
      (!filters.bonoPie || item.bonoPie === filters.bonoPie) &&
      (!filters.tipoProducto || filters.tipoProducto === "todos" || item.tipoProducto === filters.tipoProducto)
    )
  }, [selectedYear, filters])

  return (
    <div className="p-4 sm:p-6">
      <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
          <h2 className="text-xl font-semibold">Evolución Venta Vigente de Reservas en Unidades</h2>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <FilterPanel onFilterChange={handleFilterChange} />
              </PopoverContent>
            </Popover>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Seleccionar año" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los años</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
                <SelectItem value="2019">2019</SelectItem>
                <SelectItem value="2018">2018</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Chart Container with Horizontal Scroll for Mobile */}
        <div className="relative overflow-x-auto pb-6">
          <div className="h-[300px] sm:h-[400px] md:h-[500px] min-w-[600px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={filteredData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 70
                }}
              >
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  vertical={true} 
                  horizontal={true}
                  stroke="#f0f0f0"
                />
                <XAxis 
                  dataKey="date" 
                  angle={-45}
                  textAnchor="end"
                  height={70}
                  tickFormatter={(value) => value}
                  stroke="#e2e8f0"
                  tick={{ fill: '#666', fontSize: 10 }}
                />
                <YAxis 
                  yAxisId="left"
                  domain={[0, 'dataMax + 10']}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#666' }}
                  stroke="#e2e8f0"
                />
                <YAxis 
                  yAxisId="right" 
                  orientation="right"
                  domain={[0, 'dataMax + 10']}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#666' }}
                  stroke="#e2e8f0"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #f0f0f0',
                    borderRadius: '6px',
                    padding: '8px 12px'
                  }}
                  formatter={(value: number, name: string) => [
                    value,
                    name === 'units' ? 'Unidades' : 'Acumulado'
                  ]}
                />
                <Bar 
                  yAxisId="left"
                  dataKey="units" 
                  fill="#86efac"
                  radius={[2, 2, 0, 0]}
                  name="Unidades"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="accumulated"
                  stroke="#f97316"
                  strokeWidth={2}
                  dot={false}
                  name="Acumulado"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* Scroll Indicator for Mobile */}
          <div className="sm:hidden absolute bottom-0 left-0 right-0 flex justify-center">
            <span className="text-sm text-gray-500">
              Desliza para ver más →
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
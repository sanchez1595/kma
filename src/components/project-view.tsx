import { useState, useEffect } from 'react'
import { CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProjectSummary } from './project-summary'
import { VentasView } from './ventas-view'

const projectData = {
  name: "Residencial Los Álamos",
  status: "En desarrollo",
  advisor: {
    name: "María González",
    phone: "+1 234 567 890",
    email: "maria.gonzalez@inmobiliaria.com"
  }
}

export function ProjectView({ projectId }: { projectId: string }) {
  const [activeTab, setActiveTab] = useState("resumen")

  const tabs = [
    { id: "resumen", label: "Resumen" },
    { id: "ventas", label: "Ventas" },
    { id: "indicadores", label: "Indicadores" },
    { id: "stock", label: "Stock" },
    { id: "financiera", label: "Financiera" },
    { id: "legal", label: "Legal" },
  ]

  useEffect(() => {
    setActiveTab("resumen")
  }, [])

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-4 sm:p-6 border-b">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
          <h2 className="text-xl sm:text-2xl font-bold">{projectData.name}</h2>
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 whitespace-nowrap">
              <CheckCircle className="w-3 h-3 mr-1" />
              {projectData.status}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-6">
        <div className="px-4 sm:px-6">
          <div className="sm:hidden">
            <Select value={activeTab} onValueChange={(value) => setActiveTab(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona una sección" />
              </SelectTrigger>
              <SelectContent>
                {tabs.map((tab) => (
                  <SelectItem key={tab.id} value={tab.id}>
                    {tab.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="hidden sm:block">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          {activeTab === "resumen" && <ProjectSummary />}
          {activeTab === "ventas" && <VentasView/>}
          {activeTab === "indicadores" && (
            <Card>
              <CardHeader>
                <CardTitle>Indicadores</CardTitle>
                <CardDescription>Indicadores clave de rendimiento del proyecto</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base">Aquí se mostrarían los principales indicadores del proyecto.</p>
              </CardContent>
            </Card>
          )}
          {activeTab === "stock" && (
            <Card>
              <CardHeader>
                <CardTitle>Stock</CardTitle>
                <CardDescription>Información sobre el inventario disponible</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base">Aquí se mostraría información sobre el stock de unidades disponibles.</p>
              </CardContent>
            </Card>
          )}
          {activeTab === "financiera" && (
            <Card>
              <CardHeader>
                <CardTitle>Financiera</CardTitle>
                <CardDescription>Información financiera del proyecto</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base">Aquí se mostrarían detalles financieros del proyecto.</p>
              </CardContent>
            </Card>
          )}
          {activeTab === "legal" && (
            <Card>
              <CardHeader>
                <CardTitle>Legal</CardTitle>
                <CardDescription>Información legal y documentación del proyecto</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base">Aquí se mostraría información legal y documentos relevantes del proyecto.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <div className="p-4 sm:p-6 border-t bg-gray-50">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h3 className="text-sm font-medium text-gray-900">Asesor Asignado</h3>
            <p className="mt-1 text-sm text-gray-600">{projectData.advisor.name}</p>
            <p className="mt-1 text-sm text-gray-600">{projectData.advisor.phone}</p>
            <p className="mt-1 text-sm text-gray-600">{projectData.advisor.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
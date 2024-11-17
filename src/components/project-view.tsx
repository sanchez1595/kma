import { useState } from 'react'
import { Share2, Phone, CheckCircle, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ProjectSummary } from './project-summary'

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const tabs = [
    { id: "resumen", label: "Resumen" },
    { id: "ventas", label: "Ventas" },
    { id: "indicadores", label: "Indicadores" },
    { id: "stock", label: "Stock" },
    { id: "financiera", label: "Financiera" },
    { id: "legal", label: "Legal" },
  ]

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-4 sm:p-6 border-b">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl sm:text-2xl font-bold">{projectData.name}</h2>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <CheckCircle className="w-4 h-4 mr-1" />
              {projectData.status}
            </span>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              <Share2 className="w-4 h-4 mr-2" />
              Compartir
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              <Phone className="w-4 h-4 mr-2" />
              Contactar Asesor
            </Button>
            <Button variant="outline" size="sm" className="sm:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="sm:hidden space-y-2 mt-4">
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Share2 className="w-4 h-4 mr-2" />
              Compartir
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Phone className="w-4 h-4 mr-2" />
              Contactar Asesor
            </Button>
          </div>
        )}
      </div>

      <div className="mt-4 sm:mt-6">
        <div className="border-b overflow-x-auto">
          <nav className="-mb-px flex px-4 sm:px-6" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap py-4 px-1 sm:px-4 border-b-2 font-medium text-sm ${
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
        <div className="p-4 sm:p-6">
          {activeTab === "resumen" && <ProjectSummary />}
          {activeTab === "ventas" && (
            <Card>
              <CardHeader>
                <CardTitle>Ventas</CardTitle>
                <CardDescription>Información detallada sobre las ventas del proyecto</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Aquí se mostrarían gráficos y tablas con información sobre las ventas del proyecto.</p>
              </CardContent>
            </Card>
          )}
          {activeTab === "indicadores" && (
            <Card>
              <CardHeader>
                <CardTitle>Indicadores</CardTitle>
                <CardDescription>Indicadores clave de rendimiento del proyecto</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Aquí se mostrarían los principales indicadores del proyecto.</p>
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
                <p>Aquí se mostraría información sobre el stock de unidades disponibles.</p>
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
                <p>Aquí se mostrarían detalles financieros del proyecto.</p>
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
                <p>Aquí se mostraría información legal y documentos relevantes del proyecto.</p>
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
          <div>
            <Button variant="link" className="text-sm p-0">Documentación Legal</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
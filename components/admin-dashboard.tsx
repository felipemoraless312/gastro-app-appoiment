export function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Panel de Administración
        </h1>
        <p className="text-gray-600">
          Gestiona citas, pacientes y configuraciones del consultorio
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-50 rounded-lg p-6">
          <div className="flex items-center">
            <div className="text-2xl mr-4">📅</div>
            <div>
              <div className="text-2xl font-bold text-blue-600">24</div>
              <div className="text-sm text-gray-600">Citas Hoy</div>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-6">
          <div className="flex items-center">
            <div className="text-2xl mr-4">👥</div>
            <div>
              <div className="text-2xl font-bold text-green-600">1,247</div>
              <div className="text-sm text-gray-600">Pacientes Activos</div>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 rounded-lg p-6">
          <div className="flex items-center">
            <div className="text-2xl mr-4">⏰</div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">8</div>
              <div className="text-sm text-gray-600">Lista de Espera</div>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-6">
          <div className="flex items-center">
            <div className="text-2xl mr-4">💰</div>
            <div>
              <div className="text-2xl font-bold text-purple-600">$12,450</div>
              <div className="text-sm text-gray-600">Ingresos del Mes</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Today's Appointments */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Citas de Hoy</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                Nueva Cita
              </button>
            </div>
            
            <div className="space-y-4">
              {[
                { time: "09:00", patient: "María González", type: "Consulta", status: "confirmed" },
                { time: "09:30", patient: "Roberto Silva", type: "Endoscopia", status: "in-progress" },
                { time: "10:00", patient: "Ana Rodríguez", type: "Seguimiento", status: "pending" },
                { time: "10:30", patient: "Carlos López", type: "Primera Vez", status: "confirmed" },
                { time: "11:00", patient: "Laura Martín", type: "Resultados", status: "confirmed" }
              ].map((appointment, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="font-mono text-sm text-gray-500">{appointment.time}</div>
                    <div>
                      <div className="font-medium text-gray-900">{appointment.patient}</div>
                      <div className="text-sm text-gray-500">{appointment.type}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                      appointment.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {appointment.status === 'confirmed' ? 'Confirmada' :
                       appointment.status === 'in-progress' ? 'En Curso' : 'Pendiente'}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600">⋮</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Patients */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Pacientes Recientes</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Paciente</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Última Visita</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Diagnóstico</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "María González", lastVisit: "2024-10-01", diagnosis: "ERGE", status: "Activo" },
                    { name: "Roberto Silva", lastVisit: "2024-09-28", diagnosis: "Pólipos Colónicos", status: "Seguimiento" },
                    { name: "Ana Rodríguez", lastVisit: "2024-09-25", diagnosis: "Gastritis", status: "Tratamiento" }
                  ].map((patient, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-900">{patient.name}</td>
                      <td className="py-3 px-4 text-gray-600">{patient.lastVisit}</td>
                      <td className="py-3 px-4 text-gray-600">{patient.diagnosis}</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                          {patient.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-700">
                Nueva Cita
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm hover:bg-gray-50">
                Buscar Paciente
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm hover:bg-gray-50">
                Generar Reporte
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm hover:bg-gray-50">
                Configuración
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notificaciones</h3>
            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 rounded-lg">
                <div className="text-sm text-yellow-800 font-medium">Recordatorio</div>
                <div className="text-xs text-yellow-600">Cita de seguimiento con María González</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-sm text-blue-800 font-medium">Resultado Listo</div>
                <div className="text-xs text-blue-600">Biopsia de Roberto Silva disponible</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-sm text-green-800 font-medium">Cita Confirmada</div>
                <div className="text-xs text-green-600">Ana Rodríguez confirmó cita del viernes</div>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Estado del Sistema</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Servidor</span>
                <span className="text-green-600 text-sm">●</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Base de Datos</span>
                <span className="text-green-600 text-sm">●</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Respaldos</span>
                <span className="text-green-600 text-sm">●</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Última Actualización</span>
                <span className="text-xs text-gray-500">Hace 2 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

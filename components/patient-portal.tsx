export function PatientPortal() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Portal del Paciente
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Accede a tu información médica, resultados de estudios, historial de citas 
          y gestiona tu atención médica de forma segura y conveniente.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Login Section */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Iniciar Sesión</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="patientId" className="block text-sm font-medium text-gray-700 mb-2">
                  Número de Paciente
                </label>
                <input
                  type="text"
                  id="patientId"
                  name="patientId"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="P-2024-001234"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tu contraseña"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Ingresar al Portal
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-center space-y-3">
                <a href="#" className="block text-sm text-blue-600 hover:text-blue-800">
                  ¿Olvidaste tu contraseña?
                </a>
                <a href="#" className="block text-sm text-blue-600 hover:text-blue-800">
                  ¿Primera vez? Regístrate aquí
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Overview */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Historial Médico</h3>
              <p className="text-gray-600 mb-4">
                Accede a tu historial completo de consultas, diagnósticos y tratamientos.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Consultas anteriores</li>
                <li>• Diagnósticos</li>
                <li>• Medicamentos prescritos</li>
                <li>• Notas del médico</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <div className="text-3xl mb-4">🧪</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Resultados de Estudios</h3>
              <p className="text-gray-600 mb-4">
                Consulta los resultados de tus exámenes de laboratorio y estudios.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Análisis de sangre</li>
                <li>• Endoscopias</li>
                <li>• Biopsias</li>
                <li>• Imágenes médicas</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <div className="text-3xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Citas y Recordatorios</h3>
              <p className="text-gray-600 mb-4">
                Gestiona tus citas próximas y recibe recordatorios automáticos.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Próximas citas</li>
                <li>• Historial de citas</li>
                <li>• Reprogramar citas</li>
                <li>• Recordatorios SMS/Email</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-xl p-6">
              <div className="text-3xl mb-4">💊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Recetas y Medicamentos</h3>
              <p className="text-gray-600 mb-4">
                Visualiza tus recetas activas y recibe recordatorios de medicamentos.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Recetas vigentes</li>
                <li>• Dosificación</li>
                <li>• Recordatorios</li>
                <li>• Solicitar renovaciones</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl p-6">
              <div className="text-3xl mb-4">🔔</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Notificaciones</h3>
              <p className="text-gray-600 mb-4">
                Mantente informado sobre tu atención médica con notificaciones personalizadas.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Resultados disponibles</li>
                <li>• Recordatorios de citas</li>
                <li>• Mensajes del doctor</li>
                <li>• Actualizaciones importantes</li>
              </ul>
            </div>

            <div className="bg-teal-50 rounded-xl p-6">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comunicación Directa</h3>
              <p className="text-gray-600 mb-4">
                Comunícate directamente con tu equipo médico de forma segura.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mensajería segura</li>
                <li>• Consultas menores</li>
                <li>• Solicitar citas</li>
                <li>• Reportar síntomas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Security Information */}
      <div className="mt-16 bg-gray-50 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Tu Información está Segura
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Utilizamos las más altas medidas de seguridad para proteger tu información 
            médica personal, cumpliendo con todas las normativas de privacidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold text-gray-900 mb-2">Encriptación SSL</h3>
            <p className="text-sm text-gray-600">Todos los datos están encriptados</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-semibold text-gray-900 mb-2">HIPAA Compliant</h3>
            <p className="text-sm text-gray-600">Cumplimos normativas de privacidad</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🔐</div>
            <h3 className="font-semibold text-gray-900 mb-2">Acceso Controlado</h3>
            <p className="text-sm text-gray-600">Solo tú y tu médico tienen acceso</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">💾</div>
            <h3 className="font-semibold text-gray-900 mb-2">Respaldo Seguro</h3>
            <p className="text-sm text-gray-600">Información respaldada 24/7</p>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          ¿Necesitas Ayuda?
        </h2>
        <p className="text-gray-600 mb-6">
          Nuestro equipo de soporte está disponible para ayudarte con el portal
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contacto"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contactar Soporte
          </a>
          <a
            href="#"
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Guía de Usuario
          </a>
        </div>
      </div>
    </div>
  )
}

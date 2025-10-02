export function TelemedicinePortal() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Telemedicina
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Consultas médicas desde la comodidad de tu hogar. Atención especializada 
          en gastroenterología a través de videollamada segura.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Virtual Consultation Access */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Acceso a Consulta Virtual</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">¿Ya tienes una cita programada?</h3>
              <p className="text-gray-600 mb-4">
                Ingresa el código de tu cita para acceder a la videoconsulta.
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Código de cita (ej: VM-2024-001)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Ingresar a Consulta
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">¿Primera vez usando telemedicina?</h3>
              <p className="text-gray-600 mb-4">
                Programa tu primera consulta virtual con nuestro especialista.
              </p>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Agendar Consulta Virtual
              </button>
            </div>
          </div>
        </div>

        {/* Information and Benefits */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Beneficios de la Telemedicina</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🏠</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Desde Casa</h3>
                  <p className="text-gray-600">Consulta sin salir de la comodidad de tu hogar</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">⏰</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ahorra Tiempo</h3>
                  <p className="text-gray-600">Sin traslados ni tiempo de espera en sala</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🔒</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Seguro y Privado</h3>
                  <p className="text-gray-600">Plataforma encriptada y confidencial</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">💰</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Costo Accesible</h3>
                  <p className="text-gray-600">Tarifas preferenciales para consultas virtuales</p>
                </div>
              </div>
            </div>
          </div>

          {/* System Requirements */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Requisitos del Sistema</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Conexión a internet estable (mínimo 1 Mbps)</li>
              <li>• Cámara web y micrófono</li>
              <li>• Navegador actualizado (Chrome, Firefox, Safari)</li>
              <li>• Ambiente privado y silencioso</li>
              <li>• Buena iluminación</li>
            </ul>
          </div>

          {/* Contact Support */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Soporte Técnico</h3>
            <p className="text-gray-600 mb-4">
              ¿Problemas técnicos con la plataforma? Nuestro equipo te ayuda.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+15551234567"
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Llamar Soporte
              </a>
              <a
                href="/contacto"
                className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg text-center text-sm font-semibold hover:bg-blue-50 transition-colors"
              >
                Chat en Línea
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* How it Works */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          ¿Cómo Funciona?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Agenda tu Cita</h3>
            <p className="text-gray-600">Selecciona fecha y hora para tu consulta virtual</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Recibe el Enlace</h3>
            <p className="text-gray-600">Te enviaremos el código de acceso por email y SMS</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Conéctate</h3>
            <p className="text-gray-600">Ingresa a la videollamada 5 minutos antes</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">4</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Recibe Atención</h3>
            <p className="text-gray-600">Consulta con el Dr. García desde casa</p>
          </div>
        </div>
      </div>
    </div>
  )
}

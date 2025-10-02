export function LocationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Ubicación y Contacto
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Visítanos en nuestras modernas instalaciones, estratégicamente ubicadas 
          para tu comodidad y fácil acceso.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Map Section */}
        <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📍</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Mapa Interactivo</h3>
            <p className="text-gray-600">Aquí se integrará el mapa de ubicación</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="text-2xl">📍</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Dirección</h3>
                <p className="text-gray-600">
                  Av. Principal 123, Piso 5<br />
                  Centro Médico Excellence<br />
                  Ciudad, País 12345
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl">📞</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Teléfonos</h3>
                <p className="text-gray-600">
                  Consultas: +1 (555) 123-4567<br />
                  Emergencias: +1 (555) 987-6543<br />
                  WhatsApp: +1 (555) 456-7890
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl">⏰</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Horarios de Atención</h3>
                <p className="text-gray-600">
                  Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                  Sábados: 9:00 AM - 2:00 PM<br />
                  Domingos: Solo emergencias
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl">✉️</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Correo Electrónico</h3>
                <p className="text-gray-600">
                  citas@gastroexcelencia.com<br />
                  info@gastroexcelencia.com
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/citas"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Agendar Cita
              </a>
              <a
                href="tel:+15551234567"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Nuestras Instalaciones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultorios Modernos</h3>
            <p className="text-gray-600">Espacios cómodos y completamente equipados</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Estacionamiento</h3>
            <p className="text-gray-600">Amplio estacionamiento gratuito para pacientes</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">♿</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Accesibilidad</h3>
            <p className="text-gray-600">Instalaciones completamente accesibles</p>
          </div>
        </div>
      </div>
    </div>
  )
}

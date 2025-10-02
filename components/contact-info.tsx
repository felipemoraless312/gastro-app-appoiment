export function ContactInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Información de Contacto
          </h2>
          <p className="text-xl text-gray-600">
            Estamos aquí para ayudarte con tu salud digestiva
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ubicación</h3>
            <p className="text-gray-600">
              Av. Principal 123<br />
              Centro Médico San Rafael<br />
              Consultorio 205
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Teléfono</h3>
            <p className="text-gray-600">
              +1 (555) 123-4567<br />
              Lun - Vie: 8:00 AM - 6:00 PM<br />
              Sáb: 9:00 AM - 2:00 PM
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✉️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">
              info@dramariagarcia.com<br />
              Respuesta en 24 horas<br />
              Consultas generales
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

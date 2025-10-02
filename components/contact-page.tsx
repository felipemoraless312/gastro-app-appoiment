export function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Contáctanos
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Estamos aquí para ayudarte. Ponte en contacto con nosotros para 
          consultas, citas o cualquier pregunta sobre nuestros servicios.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Apellido
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tu apellido"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Asunto
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Selecciona un asunto</option>
                <option value="appointment">Agendar Cita</option>
                <option value="consultation">Consulta Médica</option>
                <option value="results">Resultados de Estudios</option>
                <option value="billing">Facturación</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe tu consulta o necesidad..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Teléfono Principal</h3>
                  <p className="text-gray-600 mb-2">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Lunes a Viernes, 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">💬</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-gray-600 mb-2">+1 (555) 456-7890</p>
                  <p className="text-sm text-gray-500">Respuesta rápida 24/7</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🚨</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Emergencias</h3>
                  <p className="text-gray-600 mb-2">+1 (555) 987-6543</p>
                  <p className="text-sm text-gray-500">Disponible 24 horas</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">✉️</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Correo Electrónico</h3>
                  <p className="text-gray-600 mb-1">citas@gastroexcelencia.com</p>
                  <p className="text-gray-600 mb-2">info@gastroexcelencia.com</p>
                  <p className="text-sm text-gray-500">Respuesta en 24 horas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
            <div className="space-y-3">
              <a
                href="/citas"
                className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Agendar Cita Online
              </a>
              <a
                href="/telemedicina"
                className="block w-full border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                Consulta Virtual
              </a>
              <a
                href="/ubicacion"
                className="block w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
              >
                Ver Ubicación
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AppointmentBooking() {
  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Agendar Cita
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Programa tu consulta con nuestro especialista en gastroenterología. 
          Elige la fecha y hora que mejor se adapte a tu horario.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Appointment Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Información de la Cita</h2>
            
            <form className="space-y-6">
              {/* Patient Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha de Nacimiento
                </label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Appointment Details */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Detalles de la Cita</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="appointmentType" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Consulta *
                    </label>
                    <select
                      id="appointmentType"
                      name="appointmentType"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Selecciona el tipo</option>
                      <option value="consultation">Consulta General</option>
                      <option value="followup">Cita de Seguimiento</option>
                      <option value="endoscopy">Endoscopia</option>
                      <option value="results">Revisión de Resultados</option>
                      <option value="emergency">Urgencia</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Fecha Preferida *
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Horario Preferido *
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                    {timeSlots.map((time) => (
                      <label key={time} className="flex items-center">
                        <input
                          type="radio"
                          name="preferredTime"
                          value={time}
                          className="sr-only"
                        />
                        <div className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center text-sm cursor-pointer hover:bg-blue-50 hover:border-blue-300 peer-checked:bg-blue-600 peer-checked:text-white">
                          {time}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-2">
                  Síntomas o Motivo de Consulta
                </label>
                <textarea
                  id="symptoms"
                  name="symptoms"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe brevemente tus síntomas o el motivo de la consulta..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="insurance" className="block text-sm font-medium text-gray-700 mb-2">
                  Seguro Médico
                </label>
                <input
                  type="text"
                  id="insurance"
                  name="insurance"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nombre de tu seguro médico"
                />
              </div>

              {/* Terms and Submit */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    required
                    className="mt-1 mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    Acepto los términos y condiciones, y autorizo el tratamiento de mis datos personales 
                    para fines médicos y de comunicación relacionados con mi atención médica.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                Agendar Cita
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar Information */}
        <div className="space-y-6">
          {/* Contact Info */}
          <div className="bg-blue-50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">¿Necesitas Ayuda?</h3>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                Si tienes alguna duda o necesitas agendar una cita urgente, contáctanos directamente:
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Teléfono:</span> +1 (555) 123-4567
                </p>
                <p className="text-sm">
                  <span className="font-medium">WhatsApp:</span> +1 (555) 456-7890
                </p>
                <p className="text-sm">
                  <span className="font-medium">Email:</span> citas@gastroexcelencia.com
                </p>
              </div>
            </div>
          </div>

          {/* Preparation Instructions */}
          <div className="bg-yellow-50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Preparación para la Cita</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Trae tu documento de identidad</li>
              <li>• Lleva tu tarjeta de seguro médico</li>
              <li>• Lista de medicamentos actuales</li>
              <li>• Estudios médicos previos</li>
              <li>• Llega 15 minutos antes</li>
            </ul>
          </div>

          {/* Alternative Options */}
          <div className="bg-green-50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Otras Opciones</h3>
            <div className="space-y-3">
              <a
                href="/telemedicina"
                className="block w-full bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors text-center"
              >
                Consulta Virtual
              </a>
              <p className="text-xs text-gray-600 text-center">
                Disponible para consultas de seguimiento y primeras valoraciones
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

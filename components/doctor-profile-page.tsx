export function DoctorProfilePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Dr. Carlos García
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Especialista en Gastroenterología con más de 15 años de experiencia 
          en el diagnóstico y tratamiento de enfermedades digestivas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Doctor Photo and Basic Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <div className="text-6xl">👨‍⚕️</div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Dr. Carlos García</h2>
            <p className="text-blue-600 font-semibold mb-4">Gastroenterólogo</p>
            
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <div className="text-xl">🎓</div>
                <span className="text-gray-600">15+ años de experiencia</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-xl">🏥</div>
                <span className="text-gray-600">Centro Médico Excellence</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-xl">📍</div>
                <span className="text-gray-600">Ciudad, País</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-xl">🌟</div>
                <span className="text-gray-600">4.9/5 (120+ reseñas)</span>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href="/citas"
                className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Agendar Cita
              </a>
              <a
                href="/telemedicina"
                className="block w-full border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Consulta Virtual
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="lg:col-span-2 space-y-8">
          {/* About */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Acerca del Dr. García</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              El Dr. Carlos García es un gastroenterólogo altamente calificado con más de 15 años 
              de experiencia en el diagnóstico y tratamiento de enfermedades del sistema digestivo. 
              Se especializa en procedimientos endoscópicos avanzados y manejo integral de 
              patologías gastrointestinales complejas.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Graduado con honores de la Universidad Nacional, completó su especialización en 
              Gastroenterología en el Hospital Universitario San Ignacio y realizó una subespecialización 
              en Hepatología en la Clínica Mayo. Su enfoque se centra en brindar atención personalizada 
              y utilizar las tecnologías más avanzadas para el beneficio de sus pacientes.
            </p>
          </div>

          {/* Education & Training */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Educación y Formación</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <div className="text-blue-600">🎓</div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Doctor en Medicina</h4>
                  <p className="text-gray-600">Universidad Nacional de Colombia (2005)</p>
                  <p className="text-sm text-gray-500">Magna Cum Laude</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <div className="text-green-600">🏥</div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Especialización en Gastroenterología</h4>
                  <p className="text-gray-600">Hospital Universitario San Ignacio (2008-2011)</p>
                  <p className="text-sm text-gray-500">Programa de alta complejidad</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <div className="text-purple-600">🌟</div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fellowship en Hepatología</h4>
                  <p className="text-gray-600">Mayo Clinic, Rochester, MN (2011-2012)</p>
                  <p className="text-sm text-gray-500">Subespecialización en enfermedades hepáticas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specialties */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Especialidades</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Endoscopia Digestiva</h4>
                <p className="text-sm text-gray-600">Gastroscopia, colonoscopia, polipectomía</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Hepatología</h4>
                <p className="text-sm text-gray-600">Enfermedades del hígado y vías biliares</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Enfermedad Inflamatoria Intestinal</h4>
                <p className="text-sm text-gray-600">Crohn, colitis ulcerosa, manejo biológico</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Trastornos Funcionales</h4>
                <p className="text-sm text-gray-600">Síndrome intestino irritable, dispepsia</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Certificaciones y Membresías</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Certificaciones</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Colegio Médico Nacional</li>
                  <li>• Asociación Colombiana de Gastroenterología</li>
                  <li>• American Gastroenterological Association</li>
                  <li>• Sociedad Europea de Endoscopia</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Membresías Profesionales</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sociedad Colombiana de Hepatología</li>
                  <li>• World Gastroenterology Organisation</li>
                  <li>• International Association of Physicians</li>
                  <li>• Colegio Americano de Gastroenterología</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Patient Reviews */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Lo que dicen nuestros pacientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
              <span className="ml-2 text-sm text-gray-600">5.0</span>
            </div>
            <p className="text-gray-600 mb-4">
              "Excelente atención y profesionalismo. El Dr. García me explicó todo 
              de manera muy clara y el tratamiento fue muy efectivo."
            </p>
            <p className="text-sm text-gray-500 font-medium">- María González</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
              <span className="ml-2 text-sm text-gray-600">5.0</span>
            </div>
            <p className="text-gray-600 mb-4">
              "Muy profesional y cuidadoso. La endoscopia fue mucho más cómoda 
              de lo que esperaba. Altamente recomendado."
            </p>
            <p className="text-sm text-gray-500 font-medium">- Roberto Silva</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
              <span className="ml-2 text-sm text-gray-600">5.0</span>
            </div>
            <p className="text-gray-600 mb-4">
              "Gracias al Dr. García logré controlar mi enfermedad. Su seguimiento 
              es excepcional y siempre está disponible para dudas."
            </p>
            <p className="text-sm text-gray-500 font-medium">- Ana Rodríguez</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ServicesPage() {
  const services = [
    {
      title: "Endoscopia Digestiva",
      description: "Procedimientos diagnósticos y terapéuticos mínimamente invasivos para evaluar el tracto digestivo.",
      features: ["Gastroscopia", "Colonoscopia", "Polipectomía", "Biopsia endoscópica"],
      icon: "🔍"
    },
    {
      title: "Gastroenterología General",
      description: "Diagnóstico y tratamiento integral de enfermedades del sistema digestivo.",
      features: ["Reflujo gastroesofágico", "Úlceras pépticas", "Síndrome intestino irritable", "Enfermedad inflamatoria intestinal"],
      icon: "🏥"
    },
    {
      title: "Hepatología",
      description: "Especialización en enfermedades del hígado y vías biliares.",
      features: ["Hepatitis viral", "Cirrosis hepática", "Esteatosis hepática", "Cálculos biliares"],
      icon: "🫀"
    },
    {
      title: "Nutrición Gastroenterológica",
      description: "Asesoría nutricional especializada para problemas digestivos.",
      features: ["Dietas terapéuticas", "Manejo nutricional", "Suplementación", "Educación alimentaria"],
      icon: "🥗"
    },
    {
      title: "Medicina Preventiva",
      description: "Programas de prevención y detección temprana de enfermedades digestivas.",
      features: ["Screening de cáncer colorrectal", "Evaluación de riesgo", "Seguimiento preventivo", "Educación en salud"],
      icon: "🛡️"
    },
    {
      title: "Urgencias Gastroenterológicas",
      description: "Atención especializada para emergencias del sistema digestivo.",
      features: ["Hemorragia digestiva", "Dolor abdominal agudo", "Obstrucción intestinal", "Pancreatitis aguda"],
      icon: "🚨"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Servicios Especializados
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ofrecemos una amplia gama de servicios gastroenterológicos con tecnología de vanguardia 
          y un enfoque personalizado para cada paciente.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Consultation CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          ¿Necesitas una consulta especializada?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Agenda tu cita con nuestro especialista en gastroenterología
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/citas"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Agendar Cita Presencial
          </a>
          <a
            href="/telemedicina"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Consulta Virtual
          </a>
        </div>
      </div>

      {/* Equipment & Technology */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Tecnología de Vanguardia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6">
            <div className="text-3xl mb-3">🔬</div>
            <h3 className="font-semibold text-gray-900 mb-2">Endoscopios HD</h3>
            <p className="text-sm text-gray-600">Alta definición para diagnósticos precisos</p>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-3">🏥</div>
            <h3 className="font-semibold text-gray-900 mb-2">Quirófano Moderno</h3>
            <p className="text-sm text-gray-600">Instalaciones completamente equipadas</p>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold text-gray-900 mb-2">Análisis Digital</h3>
            <p className="text-sm text-gray-600">Resultados rápidos y precisos</p>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-3">💊</div>
            <h3 className="font-semibold text-gray-900 mb-2">Farmacia Especializada</h3>
            <p className="text-sm text-gray-600">Medicamentos gastroenterológicos</p>
          </div>
        </div>
      </div>
    </div>
  )
}

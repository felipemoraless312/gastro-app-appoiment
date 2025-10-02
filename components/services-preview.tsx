export function ServicesPreview() {
  const services = [
    {
      title: "Endoscopia Digestiva",
      description: "Diagnóstico y tratamiento mediante técnicas endoscópicas avanzadas",
      icon: "🔬"
    },
    {
      title: "Gastritis y Úlceras",
      description: "Tratamiento especializado para gastritis crónica y úlceras pépticas",
      icon: "🩺"
    },
    {
      title: "Enfermedad Inflamatoria Intestinal",
      description: "Manejo integral de Crohn y colitis ulcerosa",
      icon: "💊"
    },
    {
      title: "Hepatología",
      description: "Diagnóstico y tratamiento de enfermedades hepáticas",
      icon: "🫀"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Servicios Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos atención integral en gastroenterología con tecnología de vanguardia
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

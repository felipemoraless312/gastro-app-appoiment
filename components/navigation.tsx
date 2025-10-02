import Link from "next/link"

export function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold text-blue-600">
                Dr. María García - Gastroenterología
              </h1>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/servicios" className="text-gray-700 hover:text-blue-600">
              Servicios
            </Link>
            <Link href="/citas" className="text-gray-700 hover:text-blue-600">
              Citas
            </Link>
            <Link href="/telemedicina" className="text-gray-700 hover:text-blue-600">
              Telemedicina
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-blue-600">
              Contacto
            </Link>
            <Link href="/portal-paciente" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Portal Paciente
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

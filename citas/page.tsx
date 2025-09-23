import { Navigation } from "@/components/navigation"
import { AppointmentBooking } from "@/components/appointment-booking"

export default function CitasPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Agendar Cita</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Programa tu consulta con la Dra. García. Selecciona el tipo de cita, fecha y hora que mejor se adapte a
              tus necesidades.
            </p>
          </div>
          <AppointmentBooking />
        </div>
      </main>
    </div>
  )
}

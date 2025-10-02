import { Navigation } from "@/components/navigation"
import { AppointmentBooking } from "@/components/appointment-booking"

export default function CitasPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentBooking />
        </div>
      </main>
    </div>
  )
}

import { Navigation } from "@/components/navigation"
import { PatientPortal } from "@/components/patient-portal"

export default function PortalPacientePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-8">
        <PatientPortal />
      </main>
    </div>
  )
}

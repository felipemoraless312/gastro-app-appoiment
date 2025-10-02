import { Navigation } from "@/components/navigation"
import { TelemedicinePortal } from "@/components/telemedicine-portal"

export default function TelemedicineePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-8">
        <TelemedicinePortal />
      </main>
    </div>
  )
}

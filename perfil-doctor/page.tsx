import { Navigation } from "@/components/navigation"
import { DoctorProfilePage } from "@/components/doctor-profile-page"

export default function PerfilDoctorPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-12">
        <DoctorProfilePage />
      </main>
    </div>
  )
}

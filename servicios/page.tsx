import { Navigation } from "@/components/navigation"
import { ServicesPage } from "@/components/services-page"

export default function ServiciosPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-12">
        <ServicesPage />
      </main>
    </div>
  )
}

import { Navigation } from "@/components/navigation"
import { LocationPage } from "@/components/location-page"

export default function UbicacionPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-12">
        <LocationPage />
      </main>
    </div>
  )
}

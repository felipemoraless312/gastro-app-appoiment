import { Navigation } from "@/components/navigation"
import { AdminDashboard } from "@/components/admin-dashboard"

export default function AdminPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-8">
        <AdminDashboard />
      </main>
    </div>
  )
}

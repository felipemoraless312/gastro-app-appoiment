import { Navigation } from "@/components/navigation"
import { ContactPage } from "@/components/contact-page"

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-12">
        <ContactPage />
      </main>
    </div>
  )
}

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { ContactInfo } from "@/components/contact-info"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesPreview />
        <ContactInfo />
      </main>
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Dr. María García - Gastroenterología. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

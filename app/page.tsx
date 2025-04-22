import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Overview } from "@/components/overview"
import { Dashboard } from "@/components/dashboard"
import { Research } from "@/components/research"
import { SecurityFeatures } from "@/components/security-features"
import { ProjectLinks } from "@/components/project-links"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ThreeDBackground } from "@/components/3d-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-cyber-dark">
      <ThreeDBackground />
      <Navbar />

      {/* Hero section with centered heading */}
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto text-center z-10 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-cyan">
            Cloud Security Implementation: IAM Hardening in AWS & Azure
          </h1>
          <Hero />
        </div>
      </div>

      <Overview />
      <Dashboard />
      <Research />
      <SecurityFeatures />
      <ProjectLinks />
      <Contact />
      <Footer />
    </main>
  )
}

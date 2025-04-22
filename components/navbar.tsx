"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield, FileText } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-cyber-blue" />
          <span className="font-bold text-lg">Satender Kumar</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#overview" className="text-sm font-medium hover:text-cyber-blue transition-colors">
            Overview
          </Link>
          <Link href="#dashboard" className="text-sm font-medium hover:text-cyber-blue transition-colors">
            Dashboard
          </Link>
          <Link href="#research" className="text-sm font-medium hover:text-cyber-blue transition-colors">
            Research
          </Link>
          <Link href="#security" className="text-sm font-medium hover:text-cyber-blue transition-colors">
            Security
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-cyber-blue transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-cyber-blue transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button variant="outline" size="sm" className="hidden md:flex gap-2">
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden">
          <div className="container flex flex-col h-full p-6">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <Shield className="w-6 h-6 text-cyber-blue" />
                <span className="font-bold text-lg">Satender Kumar</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            <nav className="flex flex-col gap-6 text-center">
              <Link
                href="#overview"
                className="text-lg font-medium py-2 hover:text-cyber-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Overview
              </Link>
              <Link
                href="#dashboard"
                className="text-lg font-medium py-2 hover:text-cyber-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="#research"
                className="text-lg font-medium py-2 hover:text-cyber-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Research
              </Link>
              <Link
                href="#security"
                className="text-lg font-medium py-2 hover:text-cyber-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Security
              </Link>
              <Link
                href="#projects"
                className="text-lg font-medium py-2 hover:text-cyber-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-lg font-medium py-2 hover:text-cyber-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>

            <div className="mt-auto flex justify-center">
              <Button className="w-full max-w-xs gap-2">
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

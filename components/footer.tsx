import Link from "next/link"
import { Shield, Linkedin, Twitter, Calendar, Link2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-cyber-blue" />
              <span className="font-bold text-lg">Satender Kumar</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Information Security Analyst specializing in cloud security, SIEM, and threat detection.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#overview" className="text-muted-foreground hover:text-cyber-blue transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#dashboard" className="text-muted-foreground hover:text-cyber-blue transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#research" className="text-muted-foreground hover:text-cyber-blue transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#security" className="text-muted-foreground hover:text-cyber-blue transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-cyber-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-medium mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/satender-singh2430/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-cyber-blue transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/SatendeK2430"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-cyber-blue transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  <span>Twitter/X</span>
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/satenderkumar-analyst"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-cyber-blue transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Calendly</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linktr.ee/satendersingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-cyber-blue transition-colors"
                >
                  <Link2 className="w-4 h-4" />
                  <span>Linktree</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-cyber-blue transition-colors">
                  Request Resume
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-cyber-blue transition-colors">
                  Credentials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-cyber-blue transition-colors">
                  Certifications
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Satender Kumar. All rights reserved. Secured with SSL encryption.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-muted-foreground hover:text-cyber-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-cyber-blue transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-cyber-blue transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

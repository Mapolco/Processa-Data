import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <span className="text-sm font-bold text-accent-foreground">P</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-primary-foreground">
                PROCESSA DATA
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md mb-4">
              Cloud Processing Operations. Infrastruttura operativa enterprise per studi professionali italiani che cercano soluzioni di workflow scalabili e sicure.
            </p>
            <p className="text-primary-foreground/50 text-xs">
              Infrastruttura Sicura per Workflow
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Servizi", href: "#services" },
                { name: "Come Funziona", href: "#how-it-works" },
                { name: "Perché Noi", href: "#why-processa" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground mb-4">Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:info@processadata.cloud"
                className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@processadata.cloud
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-primary-foreground/50">
              © {new Date().getFullYear()} Processa Data. Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors">
                Termini di Servizio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Building2, User, MessageSquare } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Info */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-muted-foreground mb-4 border border-border">
              Contattaci
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
              Inizia la Tua Trasformazione Operativa
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Contatta il nostro team per discutere come Processa Data può migliorare la tua infrastruttura operativa.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl border border-border">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10 text-accent shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href="mailto:info@processadata.cloud" className="text-foreground font-medium hover:text-accent transition-colors">
                    info@processadata.cloud
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl border border-border">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10 text-accent shrink-0">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Dominio</div>
                  <span className="text-foreground font-medium">processadata.cloud</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Scelto da</p>
              <div className="flex flex-wrap gap-3">
                {["Consulenti del Lavoro", "Studi Paghe", "Studi di Contabilità", "Centri Elaborazione Paghe"].map((badge) => (
                  <span key={badge} className="text-xs px-3 py-1.5 bg-secondary rounded-full text-muted-foreground border border-border">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border shadow-lg">
            {submitted ? (
              <div className="text-center py-12">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mx-auto mb-4">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Grazie!</h3>
                <p className="text-muted-foreground">
                  Abbiamo ricevuto il tuo messaggio e ti contatteremo a breve.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Invia un altro messaggio
                </Button>
              </div>
            ) : (
              <form 
                action="https://formspree.io/f/mzdwknbw" 
                method="POST" 
                className="space-y-5"
                onSubmit={() => setSubmitted(true)}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nome
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        name="nome"
                        placeholder="Il tuo nome"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="firmName" className="text-sm font-medium text-foreground">
                      Nome Studio
                    </Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="firmName"
                        name="nome_studio"
                        placeholder="Nome dello studio"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@azienda.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Telefono
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        name="telefono"
                        type="tel"
                        placeholder="+39 000 000 0000"
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Messaggio
                  </Label>
                  <Textarea
                    id="message"
                    name="messaggio"
                    placeholder="Raccontaci le tue esigenze operative..."
                    rows={4}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                >
                  Richiedi una Demo
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Inviando questo modulo, accetti la nostra privacy policy e i termini di servizio.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

import { 
  Banknote, 
  FileStack, 
  Workflow
} from "lucide-react"

const services = [
  {
    icon: Banknote,
    title: "Elaborazione Cedolini",
    description: "Calcolo automatizzato delle buste paga, controlli di conformità e gestione sicura dei dati per studi professionali italiani."
  },
  {
    icon: FileStack,
    title: "Gestione Backoffice Amministrativo",
    description: "Operazioni amministrative strutturate che gestiscono documenti, inserimento dati e attività di backoffice su larga scala."
  },
  {
    icon: Workflow,
    title: "Gestione Workflow",
    description: "Sistemi di workflow orchestrati che semplificano i processi operativi, l'assegnazione dei compiti e il monitoraggio dei progressi."
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground mb-4 border border-border">
            I Nostri Servizi
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Soluzioni di Elaborazione Professionale
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Infrastruttura operativa completa progettata per studi professionali italiani che cercano scalabilità, sicurezza e standardizzazione.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

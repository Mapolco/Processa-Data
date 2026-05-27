import { 
  Shield, 
  Server, 
  Globe, 
  FileCheck, 
  TrendingUp,
  Lock
} from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Workflow Sicuri",
    description: "Crittografia end-to-end, controlli di accesso e audit trail proteggono tutti i dati operativi durante l'intero ciclo di elaborazione."
  },
  {
    icon: Server,
    title: "Elaborazione Centralizzata",
    description: "Infrastruttura di elaborazione unificata che consolida le operazioni, standardizza i workflow e garantisce coerenza."
  },
  {
    icon: Globe,
    title: "Accesso Operativo Remoto",
    description: "Accesso cloud sicuro che garantisce continuità operativa ovunque con permessi basati sui ruoli e monitoraggio."
  },
  {
    icon: FileCheck,
    title: "Sistemi di Consegna Strutturati",
    description: "Consegna output organizzata con controllo versioni, sistemi di notifica e formattazione specifica per cliente."
  },
  {
    icon: TrendingUp,
    title: "Operazioni Cloud Scalabili",
    description: "Infrastruttura elastica che cresce con le tue esigenze, gestendo picchi di volume senza degradazione delle performance."
  },
  {
    icon: Lock,
    title: "Conformità e Sicurezza",
    description: "Infrastruttura progettata per soddisfare i requisiti normativi con certificazioni di sicurezza complete."
  },
]

export function CloudInfrastructure() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground mb-4 border border-border">
            Infrastruttura
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Infrastruttura Cloud
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Infrastruttura cloud di livello enterprise che fornisce le basi per un&apos;elaborazione operativa sicura, scalabile e affidabile.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-xl p-6 border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-accent/30"
            >
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-300"></div>
              
              <div className="relative">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cloud Visual */}
        <div className="mt-12 lg:mt-16">
          <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-2">99.9%</h3>
                <p className="text-muted-foreground text-sm">Uptime SLA</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">SOC 2</h3>
                <p className="text-muted-foreground text-sm">Pronto per la Conformità</p>
              </div>
              <div className="text-center lg:text-right">
                <h3 className="text-2xl font-bold text-foreground mb-2">256-bit</h3>
                <p className="text-muted-foreground text-sm">Crittografia AES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

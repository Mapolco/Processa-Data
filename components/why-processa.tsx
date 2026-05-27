import { 
  TrendingUp, 
  Clock, 
  Settings, 
  Cloud, 
  Zap, 
  Layers, 
  Users, 
  Shield 
} from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Scalabilità Operativa",
    description: "Scala la capacità di elaborazione senza investimenti infrastrutturali o costi di assunzione."
  },
  {
    icon: Clock,
    title: "Carico Interno Ridotto",
    description: "Libera il tuo team da attività operative ripetitive per concentrarsi sulle relazioni con i clienti."
  },
  {
    icon: Settings,
    title: "Standardizzazione Workflow",
    description: "Processi documentati e coerenti che garantiscono qualità e riducono gli errori."
  },
  {
    icon: Cloud,
    title: "Infrastruttura Cloud",
    description: "Sistemi cloud enterprise che garantiscono affidabilità, accessibilità e continuità operativa."
  },
  {
    icon: Zap,
    title: "Efficienza di Elaborazione",
    description: "Workflow ottimizzati e automazione che accelerano l'elaborazione mantenendo l'accuratezza."
  },
  {
    icon: Users,
    title: "Forza Lavoro Distribuita",
    description: "Accesso a personale operativo qualificato senza limitazioni geografiche o complessità HR."
  },
  {
    icon: Layers,
    title: "Operazioni Strutturate",
    description: "Approccio sistematico e organizzato alla gestione operativa con protocolli chiari."
  },
  {
    icon: Shield,
    title: "Ambienti Operativi Sicuri",
    description: "Infrastruttura protetta con controlli di accesso, crittografia e certificazioni di conformità."
  },
]

export function WhyProcesaData() {
  return (
    <section id="why-processa" className="py-16 lg:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground mb-4 border border-border">
            Vantaggi
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Perché Processa Data
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Infrastruttura operativa di livello enterprise progettata specificamente per studi professionali italiani.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-5 border border-border hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10 text-accent mb-4">
                <benefit.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

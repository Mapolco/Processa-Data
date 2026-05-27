import { 
  CloudUpload, 
  Cog, 
  CheckSquare, 
  Send,
  ArrowRight
} from "lucide-react"

const steps = [
  {
    icon: CloudUpload,
    number: "01",
    title: "Raccolta Dati",
    description: "Acquisizione sicura dei dati operativi attraverso canali standardizzati e protocolli di trasferimento file criptati."
  },
  {
    icon: Cog,
    number: "02",
    title: "Operazioni di Elaborazione",
    description: "Workflow strutturati eseguono trasformazioni dati, calcoli e attività operative secondo le specifiche del cliente."
  },
  {
    icon: CheckSquare,
    number: "03",
    title: "Validazione",
    description: "Protocolli di validazione multi-livello garantiscono accuratezza, conformità e qualità su tutti i dati elaborati."
  },
  {
    icon: Send,
    number: "04",
    title: "Consegna Sicura",
    description: "Output elaborati consegnati tramite canali cloud sicuri con audit trail e sistemi di notifica al cliente."
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-muted-foreground mb-4 border border-border">
            Pipeline Operativa
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Come Funziona
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Una pipeline operativa in quattro fasi che garantisce elaborazione coerente, accurata e sicura per ogni workflow.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-border">
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/50 to-transparent" style={{ width: '75%' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-card rounded-xl p-6 border border-border h-full flex flex-col">
                  {/* Number Badge */}
                  <div className="relative z-10 flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-sm mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10 text-accent mb-4">
                    <step.icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (mobile/tablet) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4 lg:hidden">
                    <ArrowRight className="h-5 w-5 text-accent rotate-90 md:rotate-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

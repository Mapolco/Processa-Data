import { 
  Users, 
  Handshake, 
  Shield, 
  ArrowRight,
  Cog,
  Workflow,
  TrendingUp,
  Layers
} from "lucide-react"

const firmResponsibilities = [
  { icon: Users, text: "Mantieni la relazione con il cliente" },
  { icon: Handshake, text: "Mantieni la supervisione" },
  { icon: Shield, text: "Mantieni la responsabilità professionale" },
]

const processaResponsibilities = [
  { icon: Cog, text: "Gestisce l'elaborazione operativa" },
  { icon: Workflow, text: "Gestisce l'esecuzione del workflow" },
  { icon: TrendingUp, text: "Supporta la capacità produttiva" },
  { icon: Layers, text: "Struttura le operazioni di elaborazione" },
]

export function ProfessionalFirmModel() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-muted-foreground mb-4 border border-border">
            Modello di Partnership
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Modello per Studi Professionali
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Una chiara divisione delle responsabilità che preserva la tua posizione professionale espandendo la tua capacità operativa.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Professional Firms Side */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary text-primary-foreground">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Studi Professionali</h3>
                <p className="text-sm text-muted-foreground">Le tue responsabilità</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {firmResponsibilities.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg border border-border"
                >
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-secondary/30 rounded-lg border border-dashed border-border">
              <p className="text-sm text-muted-foreground text-center">
                Tu mantieni il pieno controllo sulle attività rivolte al cliente
              </p>
            </div>
          </div>

          {/* Arrow for mobile */}
          <div className="flex justify-center lg:hidden">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground">
              <ArrowRight className="h-4 w-4 rotate-90" />
            </div>
          </div>

          {/* Processa Data Side */}
          <div className="bg-primary rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary-foreground/10 text-primary-foreground">
                <Cog className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-foreground">Processa Data</h3>
                <p className="text-sm text-primary-foreground/70">Le nostre responsabilità</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {processaResponsibilities.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10"
                >
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-accent-foreground shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-primary-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary-foreground/5 rounded-lg border border-dashed border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/80 text-center">
                Gestiamo tutta l&apos;esecuzione operativa, permettendoti di concentrarti sulla crescita
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

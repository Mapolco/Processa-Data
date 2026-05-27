import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowUpRight,
  Activity,
  Database,
  FileText,
  Users
} from "lucide-react"

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Dashboard Container */}
      <div className="bg-card rounded-xl border border-border shadow-2xl overflow-hidden">
        {/* Dashboard Header */}
        <div className="bg-primary px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <span className="text-primary-foreground/80 text-xs font-medium">Centro Controllo Operazioni</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-primary-foreground/60 text-xs">Live</span>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 bg-secondary/30">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            {/* KPI Cards */}
            <div className="bg-card rounded-lg p-3 border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">Coda Elaborazione</span>
                <Database className="h-3.5 w-3.5 text-accent" />
              </div>
              <div className="text-xl font-bold text-foreground">2,847</div>
              <div className="flex items-center gap-1 mt-1">
                <ArrowUpRight className="h-3 w-3 text-green-500" />
                <span className="text-xs text-green-500">+12.5%</span>
              </div>
            </div>

            <div className="bg-card rounded-lg p-3 border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">Workflow Attivi</span>
                <Activity className="h-3.5 w-3.5 text-accent" />
              </div>
              <div className="text-xl font-bold text-foreground">486</div>
              <div className="flex items-center gap-1 mt-1">
                <ArrowUpRight className="h-3 w-3 text-green-500" />
                <span className="text-xs text-green-500">+8.2%</span>
              </div>
            </div>

            <div className="bg-card rounded-lg p-3 border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">Documenti</span>
                <FileText className="h-3.5 w-3.5 text-accent" />
              </div>
              <div className="text-xl font-bold text-foreground">12,943</div>
              <div className="flex items-center gap-1 mt-1">
                <ArrowUpRight className="h-3 w-3 text-green-500" />
                <span className="text-xs text-green-500">+23.1%</span>
              </div>
            </div>

            <div className="bg-card rounded-lg p-3 border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">Studi Clienti</span>
                <Users className="h-3.5 w-3.5 text-accent" />
              </div>
              <div className="text-xl font-bold text-foreground">142</div>
              <div className="flex items-center gap-1 mt-1">
                <ArrowUpRight className="h-3 w-3 text-green-500" />
                <span className="text-xs text-green-500">+5.7%</span>
              </div>
            </div>
          </div>

          {/* Workflow Status */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="bg-card rounded-lg p-3 border border-border">
              <h4 className="text-xs font-medium text-foreground mb-3">Stato Workflow</h4>
              <div className="space-y-2">
                {[
                  { name: "Elaborazione Cedolini", status: "completed", count: 847 },
                  { name: "Validazione Documenti", status: "processing", count: 234 },
                  { name: "Coda Inserimento Dati", status: "processing", count: 156 },
                  { name: "Controllo Conformità", status: "pending", count: 89 },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-1.5 border-b border-border/50 last:border-0">
                    <div className="flex items-center gap-2">
                      {item.status === "completed" && <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />}
                      {item.status === "processing" && <Clock className="h-3.5 w-3.5 text-accent animate-pulse" />}
                      {item.status === "pending" && <AlertTriangle className="h-3.5 w-3.5 text-yellow-500" />}
                      <span className="text-xs text-muted-foreground">{item.name}</span>
                    </div>
                    <span className="text-xs font-medium text-foreground">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg p-3 border border-border">
              <h4 className="text-xs font-medium text-foreground mb-3">Metriche Elaborazione</h4>
              <div className="space-y-3">
                {[
                  { name: "Tasso Completamento", value: 98.7, color: "bg-green-500" },
                  { name: "Velocità Elaborazione", value: 94.2, color: "bg-accent" },
                  { name: "Accuratezza Dati", value: 99.9, color: "bg-green-500" },
                  { name: "Conformità SLA", value: 97.3, color: "bg-accent" },
                ].map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{item.name}</span>
                      <span className="text-xs font-medium text-foreground">{item.value}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${item.color} rounded-full transition-all duration-500`}
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground mb-6">
            <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
            Outsourcing paghe. Senza compromessi.
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Elaborazione Cedolini Paga per Aziende Italiane. 
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty leading-relaxed">
            Processa Data gestisce l&apos;elaborazione paghe per studi di consulenza del lavoro e aziende italiane. Stessa qualità, costi ridotti fino al 40%, tutto automatizzato.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#contact">
                Richiedi una Demo
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">
                Prenota una Chiamata
              </Link>
            </Button>
          </div>
        </div>

        {/* Dashboard Visual */}
        <DashboardMockup />
      </div>
    </section>
  )
}

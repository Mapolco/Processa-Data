import { 
  Activity, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  FileText,
  ArrowUpRight,
  BarChart3,
  Zap,
  Shield
} from "lucide-react"

const kpis = [
  { label: "Tasso Elaborazione", value: "98.7%", trend: "+2.3%", icon: Zap },
  { label: "Consegna Puntuale", value: "99.2%", trend: "+1.8%", icon: Clock },
  { label: "Tasso Errore", value: "0.03%", trend: "-0.5%", icon: Shield },
  { label: "Code Attive", value: "12", trend: "+3", icon: BarChart3 },
]

const workflows = [
  { name: "Batch Cedolini #2847", status: "completed", priority: "alta", time: "2m fa" },
  { name: "Elaborazione Documenti", status: "processing", priority: "media", time: "In corso" },
  { name: "Coda Validazione Dati", status: "processing", priority: "alta", time: "In corso" },
  { name: "Controllo Conformità #1923", status: "pending", priority: "bassa", time: "In coda" },
  { name: "Generazione Report", status: "completed", priority: "media", time: "5m fa" },
  { name: "Operazioni Archivio", status: "pending", priority: "bassa", time: "Programmato" },
]

const anomalies = [
  { type: "warning", message: "Volume elevato rilevato nella Coda #4", time: "3m fa" },
  { type: "info", message: "Nuovo template workflow applicato", time: "12m fa" },
  { type: "success", message: "Batch #2847 completato con successo", time: "15m fa" },
]

export function OperationsControlCenter() {
  return (
    <section id="operations" className="py-16 lg:py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground/80 mb-4 border border-primary-foreground/20">
            <Activity className="h-3.5 w-3.5" />
            Dashboard Live
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary-foreground mb-4 text-balance">
            Centro Controllo Operazioni
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed">
            Visibilità in tempo reale sulle tue operazioni di elaborazione con dashboard complete, monitoraggio workflow e analisi delle performance.
          </p>
        </div>

        {/* Dashboard */}
        <div className="bg-background/5 rounded-2xl border border-primary-foreground/10 overflow-hidden backdrop-blur-sm">
          {/* Dashboard Header */}
          <div className="px-6 py-4 border-b border-primary-foreground/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-primary-foreground/80 text-sm font-medium">Stato Sistema: Operativo</span>
            </div>
            <span className="text-primary-foreground/50 text-xs font-mono">Ultimo aggiornamento: Adesso</span>
          </div>

          <div className="p-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {kpis.map((kpi, index) => (
                <div 
                  key={index}
                  className="bg-primary-foreground/5 rounded-xl p-4 border border-primary-foreground/10"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-primary-foreground/60">{kpi.label}</span>
                    <kpi.icon className="h-4 w-4 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-primary-foreground mb-1">{kpi.value}</div>
                  <div className="flex items-center gap-1">
                    <ArrowUpRight className="h-3 w-3 text-green-400" />
                    <span className="text-xs text-green-400">{kpi.trend}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Workflow Queue */}
              <div className="lg:col-span-2 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 overflow-hidden">
                <div className="px-4 py-3 border-b border-primary-foreground/10">
                  <h3 className="text-sm font-semibold text-primary-foreground">Coda Workflow</h3>
                </div>
                <div className="divide-y divide-primary-foreground/5">
                  {workflows.map((workflow, index) => (
                    <div key={index} className="px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {workflow.status === "completed" && (
                          <CheckCircle2 className="h-4 w-4 text-green-400" />
                        )}
                        {workflow.status === "processing" && (
                          <Clock className="h-4 w-4 text-accent animate-pulse" />
                        )}
                        {workflow.status === "pending" && (
                          <Clock className="h-4 w-4 text-primary-foreground/40" />
                        )}
                        <div>
                          <div className="text-sm text-primary-foreground">{workflow.name}</div>
                          <div className="text-xs text-primary-foreground/50">{workflow.time}</div>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        workflow.priority === "alta" 
                          ? "bg-accent/20 text-accent" 
                          : workflow.priority === "media"
                          ? "bg-primary-foreground/10 text-primary-foreground/60"
                          : "bg-primary-foreground/5 text-primary-foreground/40"
                      }`}>
                        {workflow.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Anomaly Tracking & Delivery Status */}
              <div className="space-y-6">
                {/* Anomaly Tracking */}
                <div className="bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 overflow-hidden">
                  <div className="px-4 py-3 border-b border-primary-foreground/10">
                    <h3 className="text-sm font-semibold text-primary-foreground">Log Attività</h3>
                  </div>
                  <div className="p-4 space-y-3">
                    {anomalies.map((anomaly, index) => (
                      <div key={index} className="flex items-start gap-3">
                        {anomaly.type === "warning" && (
                          <AlertTriangle className="h-4 w-4 text-yellow-400 shrink-0 mt-0.5" />
                        )}
                        {anomaly.type === "info" && (
                          <FileText className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        )}
                        {anomaly.type === "success" && (
                          <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <div className="text-xs text-primary-foreground">{anomaly.message}</div>
                          <div className="text-xs text-primary-foreground/40">{anomaly.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivery Status */}
                <div className="bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 overflow-hidden">
                  <div className="px-4 py-3 border-b border-primary-foreground/10">
                    <h3 className="text-sm font-semibold text-primary-foreground">Stato Consegne</h3>
                  </div>
                  <div className="p-4 space-y-3">
                    {[
                      { label: "In Attesa di Consegna", value: 23 },
                      { label: "In Transito", value: 8 },
                      { label: "Consegnati Oggi", value: 156 },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-xs text-primary-foreground/60">{item.label}</span>
                        <span className="text-sm font-semibold text-primary-foreground">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

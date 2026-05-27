import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { WhyProcesaData } from "@/components/why-processa"
import { ProfessionalFirmModel } from "@/components/professional-firm-model"
import { OperationsControlCenter } from "@/components/operations-control"
import { CloudInfrastructure } from "@/components/cloud-infrastructure"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyProcesaData />
      <ProfessionalFirmModel />
      <OperationsControlCenter />
      <CloudInfrastructure />
      <Contact />
      <Footer />
    </main>
  )
}

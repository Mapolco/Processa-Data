import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Processa Data | Elaborazione Cedolini per Aziende Italiane',
  description: 'Processa Data gestisce l\'elaborazione paghe per studi di consulenza del lavoro e aziende italiane. Stessa qualità, costi ridotti fino al 40%, tutto automatizzato.',
  generator: 'v0.app',
  keywords: ['elaborazione cedolini', 'gestione paghe', 'backoffice amministrativo', 'workflow management', 'cloud operations', 'studi professionali', 'consulenti del lavoro'],
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

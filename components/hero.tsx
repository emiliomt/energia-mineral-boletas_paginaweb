import { ArrowUpRight } from 'lucide-react'
import { PROJECT_URL } from '@/lib/site'
import { TicketScan } from '@/components/ticket-scan'

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
      <div className="flex flex-col gap-6">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Logística de carbón · Norte de México</p>
        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Tu inventario, simplificado
        </h1>
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          Boletas Energia Mineral es un flujo de trabajo automatizado que lee las boletas de transporte de una empresa minera de carbón y las convierte en un inventario preciso y siempre actualizado.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={PROJECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ver la aplicación
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a href="#how" className="text-sm font-medium text-foreground underline-offset-4 hover:underline">
            Cómo funciona
          </a>
        </div>
      </div>
      <TicketScan />
    </section>
  )
}

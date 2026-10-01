import { ArrowUpRight } from 'lucide-react'
import { PROJECT_URL } from '@/lib/site'

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span aria-hidden="true" className="flex size-7 items-center justify-center rounded-md bg-primary">
            <span className="size-2.5 rounded-sm bg-accent ring-2 ring-primary-foreground" />
          </span>
          Boletas Energia Mineral
        </a>
        <nav aria-label="Navegación principal" className="flex items-center gap-6 text-sm">
          <a href="#how" className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline">
            Cómo funciona
          </a>
          <a href="#why" className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline">
            Por qué importa
          </a>
          <a
            href={PROJECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            Abrir aplicación
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}

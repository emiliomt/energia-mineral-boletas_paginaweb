import { ScanLine, ShieldCheck, Boxes } from 'lucide-react'

const steps = [
  {
    icon: ScanLine,
    title: 'Escanea la boleta',
    body: 'La boleta de transporte de cada camión se captura y sus datos clave — folio, placas, material y peso — se extraen automáticamente.',
  },
  {
    icon: ShieldCheck,
    title: 'Valida el registro',
    body: 'El flujo de trabajo revisa duplicados e inconsistencias antes de guardar cualquier dato, para que la misma carga nunca se cuente dos veces.',
  },
  {
    icon: Boxes,
    title: 'Actualiza el inventario',
    body: 'Las boletas verificadas pasan directamente al inventario, brindando al equipo una vista en tiempo real de cuánto carbón se ha movido y hacia dónde.',
  },
]

export function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title" className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 md:py-20">
        <div className="flex max-w-2xl flex-col gap-3">
          <h2 id="how-title" className="text-balance text-3xl font-semibold tracking-tight">
            Cómo funciona
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Antes, una boleta en papel pasaba por varias manos antes de llegar a una hoja de cálculo. Ahora solo toma tres pasos.
          </p>
        </div>
        <ol className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">Paso {i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

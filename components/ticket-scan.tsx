const fields = [
  { label: 'Folio', value: 'EM-04821' },
  { label: 'Placas', value: 'CHH-27-K93' },
  { label: 'Material', value: 'Carbón térmico' },
  { label: 'Peso neto', value: '28,450 kg' },
  { label: 'Origen', value: 'Mina Norte 3' },
  { label: 'Destino', value: 'Patio Sabinas' },
]

export function TicketScan() {
  return (
    <figure className="relative mx-auto w-full max-w-sm" aria-label="Illustration of a transportation ticket being scanned">
      <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="flex items-center justify-between border-b border-dashed border-border px-5 py-3">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Boleta de transporte</span>
          <span className="rounded-full bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground">
            Escaneada
          </span>
        </div>

        <dl className="grid grid-cols-2 gap-x-4 gap-y-4 px-5 py-5">
          {fields.map((field) => (
            <div key={field.label} className="flex flex-col gap-1">
              <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{field.label}</dt>
              <dd className="font-mono text-sm font-medium">{field.value}</dd>
            </div>
          ))}
        </dl>

        <div className="flex items-center justify-between border-t border-dashed border-border bg-muted px-5 py-3">
          <span className="text-xs text-muted-foreground">Inventario actualizado</span>
          <span className="font-mono text-xs font-medium text-accent">+28.45 t</span>
        </div>

        <div
          aria-hidden="true"
          className="scan-line pointer-events-none absolute inset-x-0 h-0.5 bg-primary shadow-[0_0_12px_2px] shadow-primary/40"
        />
      </div>
      <figcaption className="sr-only">
        A sample ticket showing folio, plates, material, net weight, origin and destination fields extracted automatically.
      </figcaption>
    </figure>
  )
}

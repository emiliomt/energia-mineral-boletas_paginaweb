const reasons = [
  {
    title: 'Menos redundancias',
    body: 'Los datos se capturan una sola vez desde el origen, en lugar de volver a escribirse en registros, hojas de cálculo e informes.',
  },
  {
    title: 'Mayor seguridad',
    body: 'El acceso requiere iniciar sesión y cada boleta deja un registro rastreable, lo que facilita detectar boletas perdidas, alteradas o duplicadas.',
  },
  {
    title: 'Mejor control del inventario',
    body: 'El inventario refleja lo que realmente salió de la mina, casi en tiempo real, para que las decisiones se basen en cifras actuales.',
  },
]

export function WhyItMatters() {
  return (
    <section id="why" aria-labelledby="why-title" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-3">
          <h2 id="why-title" className="text-balance text-3xl font-semibold tracking-tight">
            Por qué importa
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            En la logística minera, una sola carga mal contabilizada afecta la facturación, la planificación y la confianza.
          </p>
        </div>
        <ul className="flex flex-col divide-y divide-border">
          {reasons.map((reason) => (
            <li key={reason.title} className="flex flex-col gap-2 py-6 first:pt-0 sm:flex-row sm:gap-8">
              <h3 className="shrink-0 font-semibold text-primary sm:w-56">{reason.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{reason.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const reasons = [
  {
    title: 'Fewer redundancies',
    body: 'Data is captured once at the source instead of being retyped across logs, spreadsheets and reports.',
  },
  {
    title: 'Stronger security',
    body: 'Access requires a login, and every ticket leaves a traceable record — making lost, altered or duplicated tickets easy to spot.',
  },
  {
    title: 'Better inventory tracking',
    body: 'Inventory reflects what actually left the mine, in near real time, so decisions are based on current numbers.',
  },
]

export function WhyItMatters() {
  return (
    <section id="why" aria-labelledby="why-title" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-3">
          <h2 id="why-title" className="text-balance text-3xl font-semibold tracking-tight">
            Why it matters
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            In mining logistics, a single miscounted load affects billing, planning and trust.
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

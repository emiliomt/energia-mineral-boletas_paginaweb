import { ScanLine, ShieldCheck, Boxes } from 'lucide-react'

const steps = [
  {
    icon: ScanLine,
    title: 'Scan the ticket',
    body: 'Each truck’s transportation ticket (boleta) is captured and its key data — folio, plates, material and weight — is extracted automatically.',
  },
  {
    icon: ShieldCheck,
    title: 'Validate the record',
    body: 'The workflow checks for duplicates and inconsistencies before anything is saved, so the same load is never counted twice.',
  },
  {
    icon: Boxes,
    title: 'Update inventory',
    body: 'Verified tickets flow straight into the inventory, giving the team a live view of how much coal has moved and where.',
  },
]

export function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title" className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 md:py-20">
        <div className="flex max-w-2xl flex-col gap-3">
          <h2 id="how-title" className="text-balance text-3xl font-semibold tracking-tight">
            How it works
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            A paper ticket used to travel through several hands before reaching a spreadsheet. Now it takes three steps.
          </p>
        </div>
        <ol className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">Step {i + 1}</span>
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

import { ArrowUpRight } from 'lucide-react'
import { PROJECT_HOST, PROJECT_URL } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight">See it in action</h2>
          <p className="max-w-xl text-pretty leading-relaxed opacity-85">
            The app is live and protected behind a login. Authorized users can sign in to scan tickets and review inventory.
          </p>
          <a
            href={PROJECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary-foreground px-5 py-3 text-sm font-medium text-primary transition-opacity hover:opacity-90"
          >
            {PROJECT_HOST}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="flex flex-col justify-between gap-2 border-t border-primary-foreground/20 pt-6 text-sm opacity-85 sm:flex-row">
          <p>
            Made by <span className="font-semibold">Emilio Montemayor</span>
          </p>
          <p>Boletas Energia Mineral</p>
        </div>
      </div>
    </footer>
  )
}

import { ArrowRight } from 'lucide-react'
import { crmUrl } from '../utils/crm'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f0a1a] pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-brand-500/20 blur-[120px]" />
        <div className="absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-brand-400/15 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-400 motion-reduce:animate-none" />
            Enterprise productivity for modern teams
          </div>

          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Manage Your{' '}
            <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
              Pipeline, Contacts &amp; Leads
            </span>
            <br />
            All in One Place
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl">
            Logic Q1 brings together pipeline management, contact tracking, lead 
            scoring, and team collaboration — so your sales team can focus on closing.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={crmUrl('/login')}
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-brand-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/30 transition-all duration-200 hover:bg-brand-600 hover:shadow-brand-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            >
              Sign In
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">Enterprise CRM for modern teams</p>
        </div>
      </div>
    </section>
  )
}

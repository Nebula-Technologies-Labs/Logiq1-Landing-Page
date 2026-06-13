import { ArrowRight } from 'lucide-react'
import { crmUrl } from '../utils/crm'

export default function CTASection() {
  return (
    <section id="pricing" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0f0a1a] via-[#1a0a2e] to-brand-900 px-6 py-16 sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-brand-500/20 blur-[100px]" />
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-brand-400/15 blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Ready to transform your sales process?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Logic Q1 brings together pipeline management, contacts, leads, tasks,
              and analytics in a single, intuitive interface.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={crmUrl('/login')}
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Sign In
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

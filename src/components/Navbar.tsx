import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/logo.png'
import { crmUrl } from '../utils/crm'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#0f0a1a]/90 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:left-6 sm:right-6 lg:left-8 lg:right-8">
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 cursor-pointer">
          <img src={logo} alt="Logic Q1" className="h-8 w-auto" />
          <span className="font-heading text-xl font-bold tracking-tight text-white">Logic Q1</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="cursor-pointer text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={crmUrl('/login')}
            className="cursor-pointer rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          >
            Sign In
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="cursor-pointer text-white md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="mt-4 border-t border-white/10 pt-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <hr className="border-white/10" />
            <a
              href={crmUrl('/login')}
              className="cursor-pointer rounded-lg bg-brand-500 px-3 py-2 text-center text-sm font-medium text-white transition-all duration-200 hover:bg-brand-600"
            >
              Sign In
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

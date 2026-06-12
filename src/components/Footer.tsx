import logo from '../assets/logo.png'
import { crmUrl } from '../utils/crm'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0f0a1a] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div>
            <a href="/" className="flex items-center gap-2 cursor-pointer">
              <img src={logo} alt="Logic Q1" className="h-8 w-auto" />
              <span className="font-heading text-xl font-bold text-white">Logic Q1</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              The CRM that helps you manage leads, contacts, and pipeline to grow your
              business faster.
            </p>
          </div>

          <a
            href={crmUrl('/login')}
            className="cursor-pointer rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-brand-600"
          >
            Sign In
          </a>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Logic Q1. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="cursor-pointer text-sm text-gray-500 transition-colors duration-200 hover:text-white"
              >
                Terms
              </a>
              <a
                href="#"
                className="cursor-pointer text-sm text-gray-500 transition-colors duration-200 hover:text-white"
              >
                Privacy
              </a>
              <a
                href="#"
                className="cursor-pointer text-sm text-gray-500 transition-colors duration-200 hover:text-white"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

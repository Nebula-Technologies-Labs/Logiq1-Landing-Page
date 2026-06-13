import {
  LayoutDashboard,
  Route,
  Contact,
  Target,
  Building2,
  ClipboardCheck,
  Mail,
  Activity,
} from 'lucide-react'
import { crmUrl } from '../utils/crm'

const features = [
  {
    icon: LayoutDashboard,
    title: 'Dashboard & Analytics',
    description:
      'Real-time stats cards, bar charts grouped by contact status and label, date range filters (7/30/90 days), and a full pipeline overview.',
    color: 'from-brand-400 to-brand-600',
    link: '/login',
  },
  {
    icon: Route,
    title: 'Pipeline Management',
    description:
      'Kanban board with stages: Discovery → Proposal Sent → Negotiation → Closing → Won. Track deal value, win probability, and move deals forward.',
    color: 'from-blue-500 to-blue-700',
    link: '/login',
  },
  {
    icon: Contact,
    title: 'Contact Management',
    description:
      'Rich profiles with multiple phones and emails per contact. Assign labels (Client, Partner, VIP) and statuses (Active, Pending, New, Inactive, Closed).',
    color: 'from-emerald-500 to-emerald-700',
    link: '/login',
  },
  {
    icon: Target,
    title: 'Lead Tracking',
    description:
      'Filter leads by source (Website, Referral) and status. Seamlessly integrated with your contact database for a unified view.',
    color: 'from-purple-500 to-purple-700',
    link: '/login',
  },
  {
    icon: Building2,
    title: 'Organization Management',
    description:
      'Company profiles with industry classification (Technology, Finance, Healthcare, Manufacturing, and more), website, address, and linked contacts.',
    color: 'from-orange-500 to-orange-700',
    link: '/login',
  },
  {
    icon: ClipboardCheck,
    title: 'Task Management',
    description:
      'Organize tasks by priority (High, Medium, Low) and due dates. Mark complete, track progress, and see all tasks from the dashboard.',
    color: 'from-cyan-500 to-cyan-700',
    link: '/login',
  },
  {
    icon: Mail,
    title: 'Communication Hub',
    description:
      'Full email inbox with send, reply, attachments, search, and read/unread tracking. Compose messages and attach documents with preview.',
    color: 'from-pink-500 to-pink-700',
    link: '/login',
  },
  {
    icon: Activity,
    title: 'Activity Timeline',
    description:
      'Complete audit trail across all modules — deals, emails, tasks, and leads. Filter by type and see who did what, and when.',
    color: 'from-indigo-500 to-indigo-700',
    link: '/login',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything your sales team needs in{' '}
            <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
              one platform
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Logic Q1 brings together pipeline management, contacts, leads, tasks, 
            communication, and analytics in a single, intuitive interface.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <a
                key={feature.title}
                href={crmUrl(feature.link)}
                className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5"
              >
                <div
                  className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${feature.color} p-3 text-white shadow-lg`}
                >
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="font-heading mb-2 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">{feature.description}</p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

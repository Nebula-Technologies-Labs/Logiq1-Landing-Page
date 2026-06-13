const base = new URL(import.meta.env.VITE_API_BASE_URL || 'http://localhost:3210')
base.port = '3211'
const CRM_BASE = base.origin

export function crmUrl(path: string): string {
  return `${CRM_BASE}${path.startsWith('/') ? path : `/${path}`}`
}

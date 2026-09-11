import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '../styles.css'

export const metadata = {
  title: { default: 'Dominando el Sistema Suizo Holandés', template: '%s · Sistema Suizo Holandés' },
  description: 'Manual técnico sobre las Reglas del Sistema Suizo Holandés FIDE C.04.3, versión 2026.'
}

export const dynamic = 'force-dynamic'

export default async function RootLayout({ children }) {
  const navbar = <Navbar logo={<span className="book-logo">♞ <b>Dominando el Sistema Suizo Holandés</b></span>} />
  const footer = <Footer>Dominando el Sistema Suizo Holandés · FIDE C.04.3 · Versión 2026</Footer>
  return <html lang="es" dir="ltr" suppressHydrationWarning><Head><meta name="theme-color" content="#f8f6f1" /></Head><body><Layout navbar={navbar} pageMap={await getPageMap()} docsRepositoryBase="https://github.com" footer={footer}>{children}</Layout></body></html>
}

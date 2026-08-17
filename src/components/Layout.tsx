import { Link, useLocation } from 'react-router-dom'

const clientLinks = [
  { to: '/', label: 'Início' },
  { to: '/eventos', label: 'Eventos' },
]

const photographerLinks = [
  { to: '/fotografo', label: 'Painel' },
  { to: '/fotografo/upload', label: 'Upload' },
  { to: '/fotografo/vendas', label: 'Vendas' },
]

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const isPhotographer = pathname.startsWith('/fotografo')
  const links = isPhotographer ? photographerLinks : clientLinks

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="flex items-center gap-2 font-bold text-brand-700">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm text-white">FE</span>
            FotoEvento
          </Link>

          <nav className="hidden items-center gap-1 sm:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  pathname === link.to
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {!isPhotographer && (
              <Link
                to="/carrinho"
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Carrinho
              </Link>
            )}
            <Link
              to={isPhotographer ? '/' : '/fotografo'}
              className="rounded-lg bg-brand-600 px-3 py-2 text-sm font-medium text-white hover:bg-brand-700"
            >
              {isPhotographer ? 'Ver site' : 'Sou fotógrafo'}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-slate-500">
          Protótipo navegável · FotoEvento · {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}

export function WatermarkPhoto({
  selected,
  onToggle,
  caption,
  price,
}: {
  selected?: boolean
  onToggle?: () => void
  caption: string
  price: number
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`group relative aspect-[3/4] overflow-hidden rounded-xl border-2 transition ${
        selected ? 'border-brand-500 ring-2 ring-brand-200' : 'border-transparent hover:border-slate-300'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500" />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.4) 20px, rgba(255,255,255,0.4) 22px)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="rotate-[-25deg] text-lg font-bold uppercase tracking-widest text-white/50">
          FotoEvento
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left">
        <p className="text-xs text-white/90">{caption}</p>
        <p className="text-sm font-semibold text-white">R$ {price.toFixed(2)}</p>
      </div>
      {selected && (
        <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-xs text-white">
          ✓
        </div>
      )}
    </button>
  )
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">
      {children}
    </span>
  )
}

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}>
      {children}
    </div>
  )
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' }) {
  const styles = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700',
    secondary: 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50',
    ghost: 'text-brand-600 hover:bg-brand-50',
  }
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition disabled:opacity-50 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

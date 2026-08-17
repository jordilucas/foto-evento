import { Link, useLocation } from 'react-router-dom'

const clientLinks = [
  { to: '/', label: 'Início' },
  { to: '/eventos', label: 'Eventos' },
  { to: '/busca', label: 'Buscar selfie' },
]

const photographerLinks = [
  { to: '/fotografo', label: 'Visão geral' },
  { to: '/fotografo/eventos', label: 'Eventos' },
  { to: '/fotografo/clientes', label: 'Clientes' },
  { to: '/fotografo/vendas', label: 'Saques' },
]

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const isPhotographer = pathname.startsWith('/fotografo')
  const links = isPhotographer ? photographerLinks : clientLinks

  return (
    <div className="flex min-h-screen flex-col">
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
              <>
                <Link
                  to="/minhas-fotos"
                  className="hidden rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 sm:inline"
                >
                  Minhas fotos
                </Link>
                <Link
                  to="/carrinho"
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Carrinho
                </Link>
              </>
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

      {isPhotographer && <PhotographerTabs />}

      <main className="flex-1">{children}</main>

      <footer className="border-t border-slate-200 bg-slate-900 py-10 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-lg font-semibold">Não tire print 😉</p>
          <p className="mt-1 text-slate-400">Valorize os fotógrafos. Compre suas fotos em alta qualidade.</p>
          <p className="mt-4 text-xs text-slate-500">
            Protótipo · FotoEvento · Fotos de exemplo: Unsplash · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}

function PhotographerTabs() {
  const { pathname } = useLocation()
  const tabs = [
    { to: '/fotografo', label: 'Resumo' },
    { to: '/fotografo/eventos', label: 'Eventos e álbuns' },
    { to: '/fotografo/upload', label: 'Upload' },
    { to: '/fotografo/clientes', label: 'Clientes' },
    { to: '/fotografo/vendas', label: 'Saques' },
    { to: '/fotografo/configuracoes', label: 'Configurações' },
  ]

  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2">
        {tabs.map((tab) => (
          <Link
            key={tab.to}
            to={tab.to}
            className={`shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition ${
              pathname === tab.to
                ? 'bg-white text-brand-700 shadow-sm'
                : 'text-slate-600 hover:bg-white/60'
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export function CoverImage({
  src,
  alt,
  className = '',
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      loading="lazy"
    />
  )
}

export function WatermarkPhoto({
  selected,
  onToggle,
  caption,
  price,
  imageUrl,
}: {
  selected?: boolean
  onToggle?: () => void
  caption: string
  price: number
  imageUrl: string
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`group relative aspect-[3/4] overflow-hidden rounded-xl border-2 transition ${
        selected ? 'border-brand-500 ring-2 ring-brand-200' : 'border-transparent hover:border-slate-300'
      }`}
    >
      <img src={imageUrl} alt={caption} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, transparent, transparent 18px, rgba(255,255,255,0.35) 18px, rgba(255,255,255,0.35) 20px)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10">
        <span className="rotate-[-25deg] text-base font-bold uppercase tracking-widest text-white/60 drop-shadow">
          FotoEvento
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-left">
        <p className="text-xs text-white/90">{caption}</p>
        <p className="text-sm font-semibold text-white">R$ {price.toFixed(2)}</p>
      </div>
      {selected && (
        <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-xs text-white shadow">
          ✓
        </div>
      )}
    </button>
  )
}

export function Badge({
  children,
  tone = 'default',
}: {
  children: React.ReactNode
  tone?: 'default' | 'warning' | 'success'
}) {
  const tones = {
    default: 'bg-brand-50 text-brand-700',
    warning: 'bg-amber-50 text-amber-800',
    success: 'bg-emerald-50 text-emerald-700',
  }
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}>
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

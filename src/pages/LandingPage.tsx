import { Link } from 'react-router-dom'
import { Badge, Button, CoverImage } from '../components/Layout'
import { stockImages } from '../data/stockImages'

const categories = [
  { name: 'Corrida', image: stockImages.hero.corrida, to: '/eventos/corrida-caninde-2026' },
  { name: 'Formatura', image: stockImages.hero.formatura, to: '/eventos/formatura-unifor' },
  { name: 'Esporte', image: stockImages.hero.esporte, to: '/eventos/corrida-caninde-2026/albuns/chegada' },
  { name: 'Festa', image: stockImages.hero.festa, to: '/eventos/formatura-unifor/albuns/baile' },
]

export function LandingPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:items-center md:py-16">
          <div>
            <Badge>Protótipo · inspiração Fotto, Banlek, FotoZoom</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Encontre suas fotos com uma selfie
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Corridas, formaturas, esportes e festas no Nordeste. Busque por rosto ou número,
              escolha as fotos e receba em alta qualidade após o pagamento.
            </p>

            <Link
              to="/busca"
              className="mt-8 flex items-center gap-4 rounded-2xl border-2 border-brand-200 bg-white p-4 shadow-sm transition hover:border-brand-400 hover:shadow-md"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">SELFIE</span>
              <div className="text-left">
                <p className="font-semibold text-slate-900">Buscar com selfie</p>
                <p className="text-sm text-slate-500">Encontre suas fotos em segundos</p>
              </div>
              <span className="ml-auto text-brand-600">→</span>
            </Link>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/eventos">
                <Button>Ver eventos</Button>
              </Link>
              <Link to="/minhas-fotos">
                <Button variant="secondary">Minhas fotos</Button>
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <CoverImage
              src={stockImages.hero.corrida}
              alt="Corredores em evento esportivo"
              className="h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <p className="absolute bottom-4 left-4 text-sm font-medium text-white">
              Foto: Unsplash · exemplo
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-900">Categorias</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.to}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <CoverImage src={cat.image} alt={cat.name} className="h-full w-full transition group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/30" />
              <p className="absolute bottom-3 left-3 text-lg font-bold text-white">{cat.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-bold text-slate-900">Como funciona</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { step: '1', title: 'Encontre', desc: 'Selfie, número de peito ou navegue pelos álbuns do evento.' },
            { step: '2', title: 'Compre', desc: 'Pix ou cartão. Desconto ao levar 3+ fotos. Taxa de serviço transparente.' },
            { step: '3', title: 'Baixe em HD', desc: 'Download imediato sem marca d\'água. Acesso em Minhas fotos.' },
          ].map((item) => (
            <div key={item.step} className="rounded-2xl border border-slate-200 bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                {item.step}
              </span>
              <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-brand-600 py-14 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-bold">É fotógrafo de eventos?</h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-100">
            10% por venda, repasse configurável, álbuns privados e saque Pix em 24h.
          </p>
          <Link to="/fotografo" className="mt-6 inline-block">
            <Button className="bg-white text-brand-700 hover:bg-brand-50">Acessar painel</Button>
          </Link>
        </div>
      </section>
    </>
  )
}

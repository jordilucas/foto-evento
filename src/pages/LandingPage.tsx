import { Link } from 'react-router-dom'
import { Badge, Button } from '../components/Layout'

export function LandingPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50 to-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
          <div>
            <Badge>Protótipo navegável</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Encontre e compre suas fotos de eventos
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Corridas, formaturas, esportes e festas. Busque por selfie ou navegue pelos álbuns.
              Marca d&apos;água automática protege cada imagem até a compra.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/eventos">
                <Button>Ver eventos</Button>
              </Link>
              <Link to="/busca">
                <Button variant="secondary">Buscar com selfie</Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {['Corrida', 'Formatura', 'Esporte', 'Festa'].map((cat, i) => (
              <div
                key={cat}
                className={`aspect-square rounded-2xl bg-gradient-to-br ${
                  ['from-orange-400 to-red-500', 'from-violet-400 to-purple-600', 'from-sky-400 to-blue-600', 'from-pink-400 to-rose-500'][i]
                } p-4 text-white shadow-sm`}
              >
                <p className="text-sm font-medium opacity-80">Categoria</p>
                <p className="text-xl font-bold">{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900">Como funciona</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { step: '1', title: 'Fotógrafo publica', desc: 'Upload em lote, álbuns por dia ou momento do evento.' },
            { step: '2', title: 'Cliente encontra', desc: 'Link, QR Code ou busca por selfie/número de peito.' },
            { step: '3', title: 'Compra e baixa', desc: 'Pix, cartão ou débito. Download HD após pagamento.' },
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

      <section className="border-t border-slate-200 bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-bold">É fotógrafo de eventos?</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Publique álbuns ilimitados, receba pagamentos online e saque via Pix em até 24h.
          </p>
          <Link to="/fotografo" className="mt-6 inline-block">
            <Button className="bg-white text-brand-700 hover:bg-slate-100">Acessar painel</Button>
          </Link>
        </div>
      </section>
    </>
  )
}

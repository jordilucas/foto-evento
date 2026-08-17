import { Link } from 'react-router-dom'
import { Button, Card, CoverImage } from '../components/Layout'
import { stockImages } from '../data/stockImages'

export function SuccessPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-600">
        ✓
      </div>
      <h1 className="mt-6 text-3xl font-bold text-slate-900">Compra confirmada!</h1>
      <p className="mt-3 text-slate-600">
        Suas fotos em alta qualidade, sem marca d&apos;água, estão disponíveis agora —
        como na Fotto: comprou, baixou.
      </p>
      <Card className="mt-8 text-left">
        <p className="text-sm font-medium text-slate-900">Próximos passos</p>
        <ul className="mt-2 list-inside list-disc text-sm text-slate-600">
          <li>Download imediato na galeria</li>
          <li>E-mail com links válidos por 48h</li>
          <li>Acesso permanente em Minhas fotos</li>
          <li>Entrega WhatsApp (V2 — inspiração Fotto)</li>
        </ul>
      </Card>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/minhas-fotos">
          <Button>Ir para Minhas fotos</Button>
        </Link>
        <Link to="/eventos">
          <Button variant="secondary">Ver outros eventos</Button>
        </Link>
      </div>
    </div>
  )
}

export function SearchPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Buscar por selfie</h1>
      <p className="mt-2 text-slate-600">
        97% dos eventos na Fotto usam reconhecimento facial. Envie uma selfie e
        encontramos suas fotos automaticamente.
      </p>

      <Card className="mt-8">
        <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-brand-200 bg-brand-50">
          <CoverImage
            src={stockImages.hero.esporte}
            alt="Exemplo busca facial"
            className="absolute inset-0 h-full w-full opacity-30"
          />
          <div className="relative text-center">
            <p className="font-medium text-brand-800">Arraste uma selfie</p>
            <p className="text-sm text-brand-600">ou clique para selecionar</p>
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Protótipo: na versão final, AWS Rekognition ou InsightFace.
        </p>
        <Link to="/eventos/corrida-caninde-2026/albuns/chegada" className="mt-4 block">
          <Button className="w-full" variant="secondary">Simular — 12 fotos encontradas</Button>
        </Link>
      </Card>

      <Card className="mt-4">
        <p className="text-sm font-medium text-slate-900">Ou busque por número de peito</p>
        <div className="mt-2 flex gap-2">
          <input placeholder="Ex.: 0421" className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm" />
          <Button variant="secondary">Buscar</Button>
        </div>
      </Card>
    </div>
  )
}

export function MyPhotosPage() {
  const examples = stockImages.corrida.slice(0, 3)

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Minhas fotos</h1>
      <p className="mt-2 text-slate-600">
        Área do cliente — acesse e baixe novamente o que já comprou (Fotto/Banlek).
      </p>

      <Card className="mt-8">
        <p className="text-sm text-slate-500">Pedido #12847 · Corrida de Canindé 2026</p>
        <p className="font-semibold text-slate-900">3 fotos · compradas em 17/08/2026</p>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {examples.map((src, i) => (
            <div key={src} className="overflow-hidden rounded-xl">
              <CoverImage src={src} alt={`Foto comprada ${i + 1}`} className="aspect-[3/4] w-full" />
            </div>
          ))}
        </div>
        <Button className="mt-4 w-full" variant="secondary">Baixar pacote ZIP (HD, sem watermark)</Button>
      </Card>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { Button, Card } from '../components/Layout'

export function SuccessPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-600">
        ✓
      </div>
      <h1 className="mt-6 text-3xl font-bold text-slate-900">Compra confirmada!</h1>
      <p className="mt-3 text-slate-600">
        Enviamos o link de download em alta resolução para o seu e-mail.
        As fotos originais não possuem marca d&apos;água.
      </p>
      <Card className="mt-8 text-left">
        <p className="text-sm font-medium text-slate-900">Próximos passos (simulado)</p>
        <ul className="mt-2 list-inside list-disc text-sm text-slate-600">
          <li>E-mail com links válidos por 48h</li>
          <li>Download individual ou pacote ZIP</li>
          <li>Suporte pelo fotógrafo em caso de problema</li>
        </ul>
      </Card>
      <Link to="/eventos" className="mt-8 inline-block">
        <Button variant="secondary">Ver outros eventos</Button>
      </Link>
    </div>
  )
}

export function SearchPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Buscar por selfie</h1>
      <p className="mt-2 text-slate-600">
        Envie uma foto do seu rosto e encontramos suas imagens nos álbuns do evento.
      </p>

      <Card className="mt-8">
        <div className="flex aspect-video items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 text-slate-500">
          Arraste uma selfie ou clique para selecionar
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Protótipo: a busca facial seria feita com AWS Rekognition ou InsightFace na versão final.
        </p>
        <Link to="/eventos/corrida-caninde-2026/albuns/chegada" className="mt-4 block">
          <Button className="w-full" variant="secondary">Simular resultado (12 fotos encontradas)</Button>
        </Link>
      </Card>
    </div>
  )
}

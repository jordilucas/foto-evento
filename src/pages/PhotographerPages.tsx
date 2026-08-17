import { Link } from 'react-router-dom'
import { Badge, Button, Card } from '../components/Layout'
import { events } from '../data/mock'

export function PhotographerDashboard() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge>Painel do fotógrafo</Badge>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Olá, Studio Lucas</h1>
          <p className="text-slate-600">Resumo das suas vendas e eventos</p>
        </div>
        <Link to="/fotografo/upload">
          <Button>Novo upload</Button>
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          { label: 'Saldo disponível', value: 'R$ 2.450,00' },
          { label: 'Vendas este mês', value: '187 fotos' },
          { label: 'Eventos ativos', value: String(events.length) },
        ].map((stat) => (
          <Card key={stat.label}>
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">{stat.value}</p>
          </Card>
        ))}
      </div>

      <h2 className="mt-10 text-xl font-semibold text-slate-900">Meus eventos</h2>
      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50">
            <tr>
              <th className="px-4 py-3 font-medium">Evento</th>
              <th className="px-4 py-3 font-medium">Álbuns</th>
              <th className="px-4 py-3 font-medium">Vendas</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {events.map((e) => (
              <tr key={e.id} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-3 font-medium">{e.name}</td>
                <td className="px-4 py-3">{e.albums.length}</td>
                <td className="px-4 py-3">R$ {(e.albums.length * 420).toLocaleString('pt-BR')}</td>
                <td className="px-4 py-3"><Badge>Publicado</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Card className="mt-8">
        <h3 className="font-semibold text-slate-900">Marca d&apos;água</h3>
        <p className="mt-1 text-sm text-slate-600">
          Aplicada automaticamente em todas as pré-visualizações. Logo + padrão diagonal + ID do evento.
        </p>
        <div className="mt-4 flex gap-2">
          <Button variant="secondary">Personalizar logo</Button>
          <Button variant="ghost">Pré-visualizar</Button>
        </div>
      </Card>
    </div>
  )
}

export function PhotographerUpload() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link to="/fotografo" className="text-sm text-brand-600 hover:underline">← Painel</Link>
      <h1 className="mt-4 text-3xl font-bold text-slate-900">Upload de fotos</h1>

      <Card className="mt-8">
        <label className="block text-sm font-medium text-slate-700">Evento / álbum</label>
        <select className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm">
          <option>Corrida de Canindé 2026 → Chegada</option>
          <option>Formatura UNIFOR 2026 → Colação</option>
        </select>

        <div className="mt-6 flex aspect-video items-center justify-center rounded-xl border-2 border-dashed border-brand-300 bg-brand-50 text-brand-700">
          Arraste pastas ou selecione arquivos JPG/RAW
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Processando watermark…</span>
            <span className="font-medium">68%</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-[68%] rounded-full bg-brand-600" />
          </div>
        </div>

        <Button className="mt-6 w-full">Publicar 55 fotos</Button>
      </Card>
    </div>
  )
}

export function PhotographerSales() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link to="/fotografo" className="text-sm text-brand-600 hover:underline">← Painel</Link>
      <h1 className="mt-4 text-3xl font-bold text-slate-900">Vendas e saques</h1>

      <Card className="mt-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Disponível para saque</p>
            <p className="text-3xl font-bold text-slate-900">R$ 2.450,00</p>
          </div>
          <Button>Sacar via Pix</Button>
        </div>
      </Card>

      <h2 className="mt-8 font-semibold text-slate-900">Últimas vendas</h2>
      <ul className="mt-4 space-y-2">
        {[
          { client: 'Maria S.', photos: 3, value: 45, date: '17/08 14:32' },
          { client: 'João P.', photos: 1, value: 15, date: '17/08 12:10' },
          { client: 'Ana L.', photos: 5, value: 75, date: '16/08 19:45' },
        ].map((sale) => (
          <li key={sale.date} className="flex justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm">
            <span>{sale.client} · {sale.photos} foto(s)</span>
            <span className="font-medium">R$ {sale.value.toFixed(2)} · {sale.date}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

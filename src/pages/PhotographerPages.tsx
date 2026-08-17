import { Link } from 'react-router-dom'
import { Badge, Button, Card, CoverImage } from '../components/Layout'
import { events } from '../data/mock'

export function PhotographerDashboard() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge>Painel do fotógrafo</Badge>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Olá, Studio Lucas</h1>
          <p className="text-slate-600">Resumo da operação — estilo Banlek</p>
        </div>
        <Link to="/fotografo/upload">
          <Button>Novo upload</Button>
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Saldo disponível', value: 'R$ 2.450,00' },
          { label: 'Vendas este mês', value: '187 fotos' },
          { label: 'Carrinhos ativos', value: '12' },
          { label: 'Eventos ativos', value: String(events.length) },
        ].map((stat) => (
          <Card key={stat.label}>
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">{stat.value}</p>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <h3 className="font-semibold text-slate-900">Últimas vendas</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { client: 'Maria S.', value: 45, date: '17/08 14:32' },
              { client: 'João P.', value: 15, date: '17/08 12:10' },
              { client: 'Ana L.', value: 60, date: '16/08 19:45' },
            ].map((sale) => (
              <li key={sale.date} className="flex justify-between border-b border-slate-100 pb-2 last:border-0">
                <span>{sale.client}</span>
                <span className="font-medium">R$ {sale.value.toFixed(2)} · {sale.date}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className="font-semibold text-slate-900">Recursos ativos</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>✓ Marca d&apos;água personalizada</li>
            <li>✓ Repasse de taxa configurável (10%)</li>
            <li>✓ Desconto progressivo (3+/5+ fotos)</li>
            <li>✓ Álbum privado com senha</li>
            <li>✓ Saque Pix em 24h</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}

export function PhotographerEvents() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Eventos e álbuns</h1>
      <p className="mt-2 text-slate-600">Organize por dia, momento ou tipo de cobertura.</p>

      <div className="mt-8 space-y-8">
        {events.map((event) => (
          <Card key={event.id} className="overflow-hidden p-0">
            <div className="flex flex-col md:flex-row">
              <CoverImage src={event.coverImage} alt={event.name} className="h-40 w-full md:h-auto md:w-48" />
              <div className="flex-1 p-5">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <Badge>{event.category}</Badge>
                    <h2 className="mt-2 text-xl font-semibold">{event.name}</h2>
                    <p className="text-sm text-slate-500">{event.date} · {event.location}</p>
                  </div>
                  <Badge tone="success">Publicado</Badge>
                </div>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {event.albums.map((album) => (
                    <div key={album.id} className="flex items-center gap-3 rounded-xl border border-slate-100 p-2">
                      <CoverImage src={album.coverImage} alt={album.name} className="h-12 w-12 rounded-lg" />
                      <div>
                        <p className="text-sm font-medium">{album.name}</p>
                        <p className="text-xs text-slate-500">
                          {album.photoCount} fotos
                          {album.visibility === 'private' && ' · Privado'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export function PhotographerClients() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Clientes</h1>
      <p className="mt-2 text-slate-600">Histórico de compras e acesso às fotos (estilo Banlek).</p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50">
            <tr>
              <th className="px-4 py-3 font-medium">Cliente</th>
              <th className="px-4 py-3 font-medium">Evento</th>
              <th className="px-4 py-3 font-medium">Fotos</th>
              <th className="px-4 py-3 font-medium">Total</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Maria Silva', event: 'Corrida Canindé', photos: 3, total: 40.5, status: 'Entregue' },
              { name: 'João Pedro', event: 'Corrida Canindé', photos: 1, total: 16.5, status: 'Entregue' },
              { name: 'Ana Lima', event: 'Formatura UNIFOR', photos: 5, total: 66, status: 'Carrinho abandonado' },
            ].map((row) => (
              <tr key={row.name} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-3 font-medium">{row.name}</td>
                <td className="px-4 py-3">{row.event}</td>
                <td className="px-4 py-3">{row.photos}</td>
                <td className="px-4 py-3">R$ {row.total.toFixed(2)}</td>
                <td className="px-4 py-3">
                  <Badge tone={row.status === 'Entregue' ? 'success' : 'warning'}>{row.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function PhotographerUpload() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Upload de fotos</h1>
      <p className="mt-2 text-slate-600">Inspirado no Banlek Uploader e plugin Lightroom da Fotto.</p>

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
            <span className="text-slate-600">Aplicando marca d&apos;água…</span>
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
      <h1 className="text-3xl font-bold text-slate-900">Saques</h1>
      <p className="mt-2 text-slate-600">Vendas liberadas em até 24h · saque via Pix.</p>

      <Card className="mt-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">Disponível para saque</p>
            <p className="text-3xl font-bold text-slate-900">R$ 2.450,00</p>
          </div>
          <Button>Sacar via Pix</Button>
        </div>
      </Card>

      <Card className="mt-6">
        <h3 className="font-semibold text-slate-900">Composição da taxa (10% all-in)</h3>
        <p className="mt-2 text-sm text-slate-600">
          Plataforma + gateway incluídos, como na Fotto. Opção de repassar 100% ao cliente.
        </p>
      </Card>
    </div>
  )
}

export function PhotographerSettings() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Configurações</h1>

      <Card className="mt-8 space-y-4">
        <div>
          <h3 className="font-semibold text-slate-900">Repasse de taxa</h3>
          <p className="text-sm text-slate-600">Cliente paga +10% ou fotógrafo absorve (Banlek).</p>
          <select className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm">
            <option>Repassar taxa ao cliente</option>
            <option>Absorver taxa (recebo 100% do preço)</option>
          </select>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">Preço mínimo por foto</h3>
          <input type="number" defaultValue={8} className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
          <p className="mt-1 text-xs text-slate-500">Evita corrida para R$ 5 (feedback de fotógrafos Banlek).</p>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">Álbum privado — Baile</h3>
          <p className="text-sm text-slate-600">Senha atual: <code className="rounded bg-slate-100 px-1">formatura26</code></p>
          <select defaultValue="private" className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm">
            <option value="public">Público</option>
            <option value="unlisted">Não listado</option>
            <option value="private">Privado (senha)</option>
          </select>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">Marca d&apos;água</h3>
          <p className="text-sm text-slate-600">Logo + padrão diagonal + ID do evento.</p>
          <div className="mt-2 flex gap-2">
            <Button variant="secondary">Upload logo</Button>
            <Button variant="ghost">Pré-visualizar</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

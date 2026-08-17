import { Link, useParams } from 'react-router-dom'
import { Badge } from '../components/Layout'
import { findEvent } from '../data/mock'

export function EventDetailPage() {
  const { eventId } = useParams()
  const event = findEvent(eventId ?? '')

  if (!event) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <p className="text-slate-600">Evento não encontrado.</p>
        <Link to="/eventos" className="mt-4 inline-block text-brand-600">← Voltar</Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Link to="/eventos" className="text-sm text-brand-600 hover:underline">← Eventos</Link>
      <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge>{event.category}</Badge>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">{event.name}</h1>
          <p className="mt-1 text-slate-600">{event.date} · {event.location}</p>
          <p className="text-sm text-slate-500">Fotógrafo: {event.photographer}</p>
        </div>
        <Link
          to="/busca"
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Buscar minhas fotos (selfie)
        </Link>
      </div>

      <h2 className="mt-10 text-xl font-semibold text-slate-900">Álbuns</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {event.albums.map((album) => (
          <Link
            key={album.id}
            to={`/eventos/${event.id}/albuns/${album.id}`}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-brand-300"
          >
            <div className={`h-32 bg-gradient-to-br ${album.coverGradient}`} />
            <div className="p-4">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">{album.name}</h3>
              <p className="text-sm text-slate-500">{album.photoCount} fotos · R$ 15,00 cada</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

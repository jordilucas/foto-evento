import { Link, useParams } from 'react-router-dom'
import { Badge, CoverImage } from '../components/Layout'
import { findEvent } from '../data/mock'

const visibilityLabel = {
  public: null,
  unlisted: 'Não listado',
  private: 'Privado',
} as const

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

      <div className="mt-4 overflow-hidden rounded-2xl">
        <CoverImage src={event.coverImage} alt={event.name} className="h-56 w-full md:h-72" />
      </div>

      <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge>{event.category}</Badge>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">{event.name}</h1>
          <p className="mt-1 text-slate-600">{event.date} · {event.location}</p>
          <p className="text-sm text-slate-500">Fotógrafo: {event.photographer}</p>
        </div>
        <Link
          to="/busca"
          className="rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-100"
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
            <div className="relative h-36 overflow-hidden">
              <CoverImage src={album.coverImage} alt={album.name} className="h-full w-full group-hover:scale-105 transition" />
              {visibilityLabel[album.visibility] && (
                <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white">
                  {visibilityLabel[album.visibility]}
                </span>
              )}
            </div>
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

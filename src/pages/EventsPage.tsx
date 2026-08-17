import { Link } from 'react-router-dom'
import { Badge, CoverImage } from '../components/Layout'
import { events } from '../data/mock'

export function EventsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Eventos disponíveis</h1>
          <p className="mt-2 text-slate-600">Escolha um evento para ver os álbuns e fotos.</p>
        </div>
        <Link
          to="/busca"
          className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Buscar com selfie
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {events.map((event) => (
          <Link
            key={event.id}
            to={`/eventos/${event.id}`}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-brand-300 hover:shadow-md"
          >
            <div className="relative h-48 overflow-hidden">
              <CoverImage
                src={event.coverImage}
                alt={event.name}
                className="h-full w-full transition group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2">
                <Badge>{event.category}</Badge>
                <span className="text-xs text-slate-500">{event.date}</span>
              </div>
              <h2 className="mt-2 text-xl font-semibold text-slate-900 group-hover:text-brand-700">
                {event.name}
              </h2>
              <p className="mt-1 text-sm text-slate-600">{event.location} · {event.photographer}</p>
              <p className="mt-3 text-sm font-medium text-brand-600">
                {event.albums.length} álbuns →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

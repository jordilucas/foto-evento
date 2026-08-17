import { Link, useParams } from 'react-router-dom'
import { Badge, Button, WatermarkPhoto } from '../components/Layout'
import { useCart } from '../context/CartContext'
import { findAlbum, findEvent, getPhotosForAlbum } from '../data/mock'

export function GalleryPage() {
  const { eventId, albumId } = useParams()
  const event = findEvent(eventId ?? '')
  const album = findAlbum(eventId ?? '', albumId ?? '')
  const photos = getPhotosForAlbum(albumId ?? '')
  const { selectedIds, togglePhoto, count } = useCart()

  if (!event || !album) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <p className="text-slate-600">Álbum não encontrado.</p>
        <Link to="/eventos" className="mt-4 inline-block text-brand-600">← Voltar</Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Link to={`/eventos/${event.id}`} className="text-sm text-brand-600 hover:underline">← {event.name}</Link>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Badge>Pré-visualização com marca d&apos;água</Badge>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">{album.name}</h1>
          <p className="text-slate-600">{photos.length} fotos · Toque para selecionar</p>
        </div>
        {count > 0 && (
          <Link to="/carrinho">
            <Button>Ir ao carrinho ({count})</Button>
          </Link>
        )}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {photos.map((photo) => (
          <WatermarkPhoto
            key={photo.id}
            caption={photo.caption}
            price={photo.price}
            selected={selectedIds.has(photo.id)}
            onToggle={() => togglePhoto(photo.id)}
          />
        ))}
      </div>

      {count > 0 && (
        <div className="fixed bottom-0 inset-x-0 border-t border-slate-200 bg-white p-4 shadow-lg md:hidden">
          <Link to="/carrinho" className="block">
            <Button className="w-full">Comprar {count} foto{count > 1 ? 's' : ''}</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Badge, Button, Card, WatermarkPhoto } from '../components/Layout'
import { useCart } from '../context/CartContext'
import { findAlbum, findEvent, getPhotosForAlbum, isAlbumUnlocked, unlockAlbum } from '../data/mock'
import { formatBRL, PHOTO_UNIT_PRICE, volumeDiscountRate } from '../utils/pricing'

export function GalleryPage() {
  const { eventId, albumId } = useParams()
  const event = findEvent(eventId ?? '')
  const album = findAlbum(eventId ?? '', albumId ?? '')
  const photos = getPhotosForAlbum(albumId ?? '')
  const { selectedIds, togglePhoto, selectMany, count } = useCart()
  const [unlocked, setUnlocked] = useState(() => isAlbumUnlocked(eventId ?? '', albumId ?? ''))
  const [code, setCode] = useState('')
  const [codeError, setCodeError] = useState('')

  if (!event || !album) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <p className="text-slate-600">Álbum não encontrado.</p>
        <Link to="/eventos" className="mt-4 inline-block text-brand-600">← Voltar</Link>
      </div>
    )
  }

  if (album.visibility === 'private' && !unlocked) {
    return (
      <div className="mx-auto max-w-md px-4 py-16">
        <Badge tone="warning">Álbum privado</Badge>
        <h1 className="mt-4 text-2xl font-bold text-slate-900">{album.name}</h1>
        <p className="mt-2 text-slate-600">
          Este álbum exige senha. Peça o código ao fotógrafo ou organizador do evento.
        </p>
        <Card className="mt-6">
          <label className="block text-sm font-medium text-slate-700">Código de acesso</label>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Ex.: formatura26"
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
          {codeError && <p className="mt-2 text-sm text-red-600">{codeError}</p>}
          <Button
            className="mt-4 w-full"
            onClick={() => {
              const ok = unlockAlbum(event.id, album.id, code)
              if (ok) {
                setUnlocked(true)
                setCodeError('')
              } else {
                setCodeError('Código incorreto. Dica protótipo: formatura26')
              }
            }}
          >
            Entrar no álbum
          </Button>
        </Card>
        <Link to={`/eventos/${event.id}`} className="mt-4 inline-block text-sm text-brand-600">← Voltar ao evento</Link>
      </div>
    )
  }

  const selectedInAlbum = photos.filter((p) => selectedIds.has(p.id)).length
  const discount = volumeDiscountRate(selectedInAlbum)

  function selectAllInAlbum() {
    selectMany(photos.map((p) => p.id))
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 pb-24 md:pb-10">
      <Link to={`/eventos/${event.id}`} className="text-sm text-brand-600 hover:underline">← {event.name}</Link>

      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge>Pré-visualização com marca d&apos;água</Badge>
            {album.visibility === 'private' && <Badge tone="warning">Privado</Badge>}
          </div>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">{album.name}</h1>
          <p className="text-slate-600">
            {photos.length} fotos · R$ {PHOTO_UNIT_PRICE.toFixed(2)} cada
            {discount > 0 && ` · ${discount * 100}% de desconto aplicado`}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link to="/busca">
            <Button variant="secondary">Buscar minhas fotos</Button>
          </Link>
          <Button variant="secondary" onClick={selectAllInAlbum}>
            Selecionar álbum inteiro
          </Button>
          {count > 0 && (
            <Link to="/carrinho">
              <Button>Carrinho ({count})</Button>
            </Link>
          )}
        </div>
      </div>

      <Card className="mt-6 flex flex-wrap items-center justify-between gap-4 bg-brand-50/50">
        <div>
          <p className="font-semibold text-slate-900">Pacotes e descontos</p>
          <p className="text-sm text-slate-600">3 fotos −10% · 5 fotos −20% · Pacote &quot;Todas minhas fotos&quot; em breve</p>
        </div>
        <div className="text-right text-sm text-slate-600">
          <p>Ex.: 5 fotos = {formatBRL(5 * PHOTO_UNIT_PRICE * 0.8)}</p>
        </div>
      </Card>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {photos.map((photo) => (
          <WatermarkPhoto
            key={photo.id}
            caption={photo.caption}
            price={photo.price}
            imageUrl={photo.imageUrl}
            selected={selectedIds.has(photo.id)}
            onToggle={() => togglePhoto(photo.id)}
          />
        ))}
      </div>

      {count > 0 && (
        <div className="fixed inset-x-0 bottom-0 border-t border-slate-200 bg-white p-4 shadow-lg md:hidden">
          <Link to="/carrinho" className="block">
            <Button className="w-full">Comprar {count} foto{count > 1 ? 's' : ''}</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

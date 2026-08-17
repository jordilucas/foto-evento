import { Link } from 'react-router-dom'
import { Button, Card } from '../components/Layout'
import { useCart } from '../context/CartContext'
import { getPhotosForAlbum } from '../data/mock'

const allPhotos = [
  ...getPhotosForAlbum('largada'),
  ...getPhotosForAlbum('km5'),
  ...getPhotosForAlbum('chegada'),
  ...getPhotosForAlbum('colacao'),
  ...getPhotosForAlbum('baile'),
]

export function CartPage() {
  const { selectedIds, togglePhoto } = useCart()
  const items = allPhotos.filter((p) => selectedIds.has(p.id))
  const subtotal = items.reduce((sum, p) => sum + p.price, 0)

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Carrinho</h1>

      {items.length === 0 ? (
        <Card className="mt-8 text-center">
          <p className="text-slate-600">Nenhuma foto selecionada.</p>
          <Link to="/eventos" className="mt-4 inline-block">
            <Button variant="secondary">Explorar eventos</Button>
          </Link>
        </Card>
      ) : (
        <>
          <ul className="mt-6 space-y-3">
            {items.map((item) => (
              <li key={item.id} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4">
                <div>
                  <p className="font-medium text-slate-900">{item.caption}</p>
                  <p className="text-sm text-slate-500">Foto #{item.id}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold">R$ {item.price.toFixed(2)}</span>
                  <button type="button" onClick={() => togglePhoto(item.id)} className="text-sm text-red-600 hover:underline">
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <Card className="mt-6">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="mt-4 block">
              <Button className="w-full">Finalizar compra</Button>
            </Link>
          </Card>
        </>
      )}
    </div>
  )
}

import { Link } from 'react-router-dom'
import { Button, Card, CoverImage } from '../components/Layout'
import { useCart } from '../context/CartContext'
import { getAllPhotos } from '../data/mock'
import { calcOrder, formatBRL } from '../utils/pricing'

export function CartPage() {
  const { selectedIds, togglePhoto } = useCart()
  const items = getAllPhotos().filter((p) => selectedIds.has(p.id))
  const order = calcOrder(items.length)

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
              <li key={item.id} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-3">
                <CoverImage src={item.imageUrl} alt={item.caption} className="h-16 w-12 rounded-lg" />
                <div className="flex-1">
                  <p className="font-medium text-slate-900">{item.caption}</p>
                  <p className="text-sm text-slate-500">{item.id}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold">{formatBRL(item.price)}</span>
                  <button type="button" onClick={() => togglePhoto(item.id)} className="text-sm text-red-600 hover:underline">
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <Card className="mt-6 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Subtotal ({items.length} foto{items.length > 1 ? 's' : ''})</span>
              <span>{formatBRL(order.subtotal)}</span>
            </div>
            {order.discount > 0 && (
              <div className="flex justify-between text-emerald-700">
                <span>Desconto por volume ({order.discountRate * 100}%)</span>
                <span>− {formatBRL(order.discount)}</span>
              </div>
            )}
            <div className="flex justify-between border-t border-slate-100 pt-2">
              <span className="font-semibold text-slate-900">Total</span>
              <span className="text-lg font-bold text-slate-900">{formatBRL(order.afterDiscount)}</span>
            </div>
            <p className="text-xs text-slate-500">Taxa de serviço (10%) calculada no checkout</p>
            <Link to="/checkout" className="mt-2 block">
              <Button className="w-full">Finalizar compra</Button>
            </Link>
          </Card>
        </>
      )}
    </div>
  )
}

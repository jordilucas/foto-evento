import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Card } from '../components/Layout'
import { useCart } from '../context/CartContext'
import { calcOrder, formatBRL } from '../utils/pricing'

export function CheckoutPage() {
  const navigate = useNavigate()
  const { count, clearCart } = useCart()
  const [method, setMethod] = useState<'pix' | 'card'>('pix')
  const [loading, setLoading] = useState(false)
  const [passFeeToClient, setPassFeeToClient] = useState(true)

  if (count === 0) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <p className="text-slate-600">Carrinho vazio.</p>
        <Link to="/eventos" className="mt-4 inline-block text-brand-600">Ver eventos</Link>
      </div>
    )
  }

  const order = calcOrder(count)
  const total = passFeeToClient ? order.total : order.afterDiscount

  function handlePay() {
    setLoading(true)
    setTimeout(() => {
      clearCart()
      navigate('/sucesso')
    }, 1500)
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>
      <p className="mt-2 text-slate-600">{count} foto{count > 1 ? 's' : ''}</p>

      <Card className="mt-6 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-600">Fotos</span>
          <span>{formatBRL(order.subtotal)}</span>
        </div>
        {order.discount > 0 && (
          <div className="flex justify-between text-emerald-700">
            <span>Desconto ({order.discountRate * 100}%)</span>
            <span>− {formatBRL(order.discount)}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="text-slate-600">Taxa de serviço (10%)</span>
          <span>{passFeeToClient ? formatBRL(order.serviceFee) : 'Absorvida pelo fotógrafo'}</span>
        </div>
        <div className="flex justify-between border-t border-slate-100 pt-2 text-base font-bold">
          <span>Total a pagar</span>
          <span>{formatBRL(total)}</span>
        </div>
        <p className="text-xs text-slate-500">
          Modelo Banlek/Fotto: o fotógrafo pode repassar a taxa ao cliente ou absorvê-la.
        </p>
        <label className="mt-2 flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={passFeeToClient}
            onChange={(e) => setPassFeeToClient(e.target.checked)}
            className="rounded border-slate-300"
          />
          Repassar taxa de serviço ao cliente (simulação)
        </label>
      </Card>

      <Card className="mt-6">
        <h2 className="font-semibold text-slate-900">Forma de pagamento</h2>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {(['pix', 'card'] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMethod(m)}
              className={`rounded-xl border-2 p-4 text-left transition ${
                method === m ? 'border-brand-500 bg-brand-50' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <p className="font-semibold">{m === 'pix' ? 'Pix' : 'Cartão'}</p>
              <p className="text-xs text-slate-500">{m === 'pix' ? 'Confirmação imediata' : 'Crédito ou débito'}</p>
            </button>
          ))}
        </div>

        {method === 'card' && (
          <div className="mt-4 space-y-3">
            <input placeholder="Número do cartão" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="Validade" className="rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              <input placeholder="CVV" className="rounded-lg border border-slate-200 px-3 py-2 text-sm" />
            </div>
          </div>
        )}

        {method === 'pix' && (
          <div className="mt-4 flex aspect-square max-w-[200px] items-center justify-center rounded-xl bg-slate-100 text-sm text-slate-500">
            QR Code Pix (simulado)
          </div>
        )}

        <input
          placeholder="E-mail para receber o download"
          className="mt-4 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          defaultValue="cliente@email.com"
        />

        <Button className="mt-6 w-full" disabled={loading} onClick={handlePay}>
          {loading ? 'Processando…' : `Pagar ${formatBRL(total)}`}
        </Button>
      </Card>

      <p className="mt-4 text-center text-xs text-slate-500">Protótipo — nenhum pagamento real é processado.</p>
    </div>
  )
}

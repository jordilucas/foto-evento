import { createContext, useContext, useMemo, useState } from 'react'

type CartContextValue = {
  selectedIds: Set<string>
  togglePhoto: (id: string) => void
  clearCart: () => void
  count: number
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())

  const value = useMemo<CartContextValue>(() => ({
    selectedIds,
    togglePhoto: (id) => {
      setSelectedIds((prev) => {
        const next = new Set(prev)
        if (next.has(id)) next.delete(id)
        else next.add(id)
        return next
      })
    },
    clearCart: () => setSelectedIds(new Set()),
    count: selectedIds.size,
  }), [selectedIds])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

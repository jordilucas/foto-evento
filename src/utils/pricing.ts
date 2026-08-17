export const PHOTO_UNIT_PRICE = 15
export const SERVICE_FEE_RATE = 0.1

export function volumeDiscountRate(count: number): number {
  if (count >= 5) return 0.2
  if (count >= 3) return 0.1
  return 0
}

export function calcOrder(count: number, unitPrice = PHOTO_UNIT_PRICE) {
  const subtotal = count * unitPrice
  const discountRate = volumeDiscountRate(count)
  const discount = subtotal * discountRate
  const afterDiscount = subtotal - discount
  const serviceFee = afterDiscount * SERVICE_FEE_RATE
  const total = afterDiscount + serviceFee

  return { subtotal, discountRate, discount, afterDiscount, serviceFee, total, count }
}

export function formatBRL(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

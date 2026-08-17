import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CartProvider } from './context/CartContext'
import { CartPage } from './pages/CartPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { EventDetailPage } from './pages/EventDetailPage'
import { EventsPage } from './pages/EventsPage'
import { GalleryPage } from './pages/GalleryPage'
import { LandingPage } from './pages/LandingPage'
import { PhotographerDashboard, PhotographerSales, PhotographerUpload } from './pages/PhotographerPages'
import { SearchPage, SuccessPage } from './pages/SuccessPage'

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/eventos" element={<EventsPage />} />
            <Route path="/eventos/:eventId" element={<EventDetailPage />} />
            <Route path="/eventos/:eventId/albuns/:albumId" element={<GalleryPage />} />
            <Route path="/busca" element={<SearchPage />} />
            <Route path="/carrinho" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/sucesso" element={<SuccessPage />} />
            <Route path="/fotografo" element={<PhotographerDashboard />} />
            <Route path="/fotografo/upload" element={<PhotographerUpload />} />
            <Route path="/fotografo/vendas" element={<PhotographerSales />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  )
}

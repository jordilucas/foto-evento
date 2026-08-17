import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CartProvider } from './context/CartContext'
import { CartPage } from './pages/CartPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { EventDetailPage } from './pages/EventDetailPage'
import { EventsPage } from './pages/EventsPage'
import { GalleryPage } from './pages/GalleryPage'
import { LandingPage } from './pages/LandingPage'
import {
  PhotographerClients,
  PhotographerDashboard,
  PhotographerEvents,
  PhotographerSales,
  PhotographerSettings,
  PhotographerUpload,
} from './pages/PhotographerPages'
import { MyPhotosPage, SearchPage, SuccessPage } from './pages/SuccessPage'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/eventos" element={<EventsPage />} />
            <Route path="/eventos/:eventId" element={<EventDetailPage />} />
            <Route path="/eventos/:eventId/albuns/:albumId" element={<GalleryPage />} />
            <Route path="/busca" element={<SearchPage />} />
            <Route path="/minhas-fotos" element={<MyPhotosPage />} />
            <Route path="/carrinho" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/sucesso" element={<SuccessPage />} />
            <Route path="/fotografo" element={<PhotographerDashboard />} />
            <Route path="/fotografo/eventos" element={<PhotographerEvents />} />
            <Route path="/fotografo/clientes" element={<PhotographerClients />} />
            <Route path="/fotografo/upload" element={<PhotographerUpload />} />
            <Route path="/fotografo/vendas" element={<PhotographerSales />} />
            <Route path="/fotografo/configuracoes" element={<PhotographerSettings />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  )
}

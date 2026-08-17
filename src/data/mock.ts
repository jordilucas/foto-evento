export type Photo = {
  id: string
  albumId: string
  caption: string
  price: number
}

export type Album = {
  id: string
  eventId: string
  name: string
  photoCount: number
  coverGradient: string
}

export type Event = {
  id: string
  name: string
  date: string
  location: string
  photographer: string
  category: string
  albums: Album[]
}

export const events: Event[] = [
  {
    id: 'corrida-caninde-2026',
    name: 'Corrida de Canindé 2026',
    date: '15/08/2026',
    location: 'Canindé, CE',
    photographer: 'Studio Lucas',
    category: 'Corrida',
    albums: [
      { id: 'largada', eventId: 'corrida-caninde-2026', name: 'Largada', photoCount: 48, coverGradient: 'from-orange-400 to-red-500' },
      { id: 'km5', eventId: 'corrida-caninde-2026', name: 'Km 5', photoCount: 62, coverGradient: 'from-sky-400 to-blue-600' },
      { id: 'chegada', eventId: 'corrida-caninde-2026', name: 'Chegada', photoCount: 55, coverGradient: 'from-emerald-400 to-teal-600' },
    ],
  },
  {
    id: 'formatura-unifor',
    name: 'Formatura UNIFOR 2026',
    date: '10/08/2026',
    location: 'Fortaleza, CE',
    photographer: 'Foto Momentos',
    category: 'Formatura',
    albums: [
      { id: 'colacao', eventId: 'formatura-unifor', name: 'Colação de grau', photoCount: 120, coverGradient: 'from-violet-400 to-purple-600' },
      { id: 'baile', eventId: 'formatura-unifor', name: 'Baile', photoCount: 89, coverGradient: 'from-pink-400 to-rose-600' },
    ],
  },
]

const captions = [
  'Atleta em ação', 'Momento da largada', 'Sorriso na chegada', 'Equipe completa',
  'Retrato individual', 'Grupo de amigos', 'Medalha na mão', 'Comemoração',
]

export function getPhotosForAlbum(albumId: string, count = 12): Photo[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `${albumId}-${i + 1}`,
    albumId,
    caption: captions[i % captions.length],
    price: 15,
  }))
}

export function findEvent(eventId: string) {
  return events.find((e) => e.id === eventId)
}

export function findAlbum(eventId: string, albumId: string) {
  const event = findEvent(eventId)
  return event?.albums.find((a) => a.id === albumId)
}

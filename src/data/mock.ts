import { pickStockImage, stockImages } from './stockImages'

export type Photo = {
  id: string
  albumId: string
  caption: string
  price: number
  imageUrl: string
}

export type AlbumVisibility = 'public' | 'unlisted' | 'private'

export type Album = {
  id: string
  eventId: string
  name: string
  photoCount: number
  coverImage: string
  visibility: AlbumVisibility
  accessCode?: string
}

export type Event = {
  id: string
  name: string
  date: string
  location: string
  photographer: string
  category: string
  coverImage: string
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
    coverImage: stockImages.hero.corrida,
    albums: [
      {
        id: 'largada',
        eventId: 'corrida-caninde-2026',
        name: 'Largada',
        photoCount: 48,
        coverImage: pickStockImage('largada', 0),
        visibility: 'public',
      },
      {
        id: 'km5',
        eventId: 'corrida-caninde-2026',
        name: 'Km 5',
        photoCount: 62,
        coverImage: pickStockImage('km5', 2),
        visibility: 'public',
      },
      {
        id: 'chegada',
        eventId: 'corrida-caninde-2026',
        name: 'Chegada',
        photoCount: 55,
        coverImage: pickStockImage('chegada', 4),
        visibility: 'public',
      },
    ],
  },
  {
    id: 'formatura-unifor',
    name: 'Formatura UNIFOR 2026',
    date: '10/08/2026',
    location: 'Fortaleza, CE',
    photographer: 'Foto Momentos',
    category: 'Formatura',
    coverImage: stockImages.hero.formatura,
    albums: [
      {
        id: 'colacao',
        eventId: 'formatura-unifor',
        name: 'Colação de grau',
        photoCount: 120,
        coverImage: pickStockImage('colacao', 0),
        visibility: 'public',
      },
      {
        id: 'baile',
        eventId: 'formatura-unifor',
        name: 'Baile',
        photoCount: 89,
        coverImage: pickStockImage('baile', 1),
        visibility: 'private',
        accessCode: 'formatura26',
      },
    ],
  },
]

const captions = [
  'Atleta em ação',
  'Momento da largada',
  'Sorriso na chegada',
  'Equipe completa',
  'Retrato individual',
  'Grupo de amigos',
  'Medalha na mão',
  'Comemoração',
]

export function getPhotosForAlbum(albumId: string, count = 12): Photo[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `${albumId}-${i + 1}`,
    albumId,
    caption: captions[i % captions.length],
    price: 15,
    imageUrl: pickStockImage(albumId, i),
  }))
}

export function getAllPhotos(): Photo[] {
  return events.flatMap((event) =>
    event.albums.flatMap((album) => getPhotosForAlbum(album.id)),
  )
}

export function findEvent(eventId: string) {
  return events.find((e) => e.id === eventId)
}

export function findAlbum(eventId: string, albumId: string) {
  const event = findEvent(eventId)
  return event?.albums.find((a) => a.id === albumId)
}

export function isAlbumUnlocked(eventId: string, albumId: string): boolean {
  const album = findAlbum(eventId, albumId)
  if (!album || album.visibility !== 'private') return true
  return sessionStorage.getItem(`album-unlock:${eventId}:${albumId}`) === '1'
}

export function unlockAlbum(eventId: string, albumId: string, code: string): boolean {
  const album = findAlbum(eventId, albumId)
  if (!album?.accessCode) return false
  if (code.trim().toLowerCase() !== album.accessCode.toLowerCase()) return false
  sessionStorage.setItem(`album-unlock:${eventId}:${albumId}`, '1')
  return true
}

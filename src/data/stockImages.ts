/** Fotos de exemplo via Unsplash (uso em protótipo). */
export const stockImages = {
  corrida: [
    'https://images.unsplash.com/photo-1452626212852-6ed589122dac?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1571008887538-b36bb290ab19?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1513593771513-7b58b6a54142?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1594882645126-14020914d58d?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1486218119243-13883505764c?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=800&fit=crop&q=80',
  ],
  formatura: [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1627556704307-6244674a0118?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1541339907198-e08756dedfbf?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=800&fit=crop&q=80',
  ],
  festa: [
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1519671482749-fd09fe7dccbf?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1492684223066-81342ee784ff?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1478146896984-95b542a751ae?w=600&h=800&fit=crop&q=80',
  ],
  hero: {
    corrida: 'https://images.unsplash.com/photo-1571008887538-b36bb290ab19?w=1200&h=800&fit=crop&q=80',
    formatura: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop&q=80',
    esporte: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop&q=80',
    festa: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop&q=80',
  },
} as const

export function pickStockImage(albumId: string, index: number): string {
  const pool =
    albumId.includes('colacao') ? stockImages.formatura
    : albumId.includes('baile') ? stockImages.festa
    : stockImages.corrida
  return pool[index % pool.length]
}

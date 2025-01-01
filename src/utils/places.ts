import type { GeoapifyPlace, Place } from '../types/places';

export function transformGeoapifyPlace(place: GeoapifyPlace): Place {
  return {
    id: place.properties.place_id,
    title: place.properties.name,
    description: place.properties.formatted,
    // Fallback image if not provided by API
    image: place.properties.image || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
    // Random price for demo purposes
    price: Math.floor(Math.random() * 1000) + 200,
    rating: place.properties.rating || Math.random() * 2 + 3,
    location: `${place.properties.city}, ${place.properties.country}`
  };
}
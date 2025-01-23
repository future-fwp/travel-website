import type { GeoapifyPlace, Place } from '../types/places';

export function transformGeoapifyPlace(place: GeoapifyPlace): Place {
  return {
    id: place.properties.place_id,
    title: place.properties.name,
    description: place.properties.formatted,
    image: place.properties.image || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
    price: Math.floor(Math.random() * 1000) + 200,
    rating: place.properties.rating || Math.random() * 2 + 3,
    location: `${place.properties.city}, ${place.properties.country}`,
    latitude: place.properties.lat,
    longitude: place.properties.lon
  };
}
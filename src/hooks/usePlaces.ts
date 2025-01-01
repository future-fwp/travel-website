import { useState, useEffect } from 'react';
import { API_CONFIG } from '../config/api';
import type { GeoapifyPlace, Place } from '../types/places';
import { transformGeoapifyPlace } from '../utils/places';

export function usePlaces() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
    try {
      const params = new URLSearchParams({
        categories: 'tourism.sights,accommodation.hotel',
        filter: 'rect:10.716463,48.755151,10.835314,48.680903',
        limit: '20',
        apiKey: API_CONFIG.GEOAPIFY_API_KEY
      });

      const response = await fetch(`${API_CONFIG.GEOAPIFY_BASE_URL}?${params}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch places');
      }

      const data = await response.json();
      const transformedPlaces = data.features.map((place: GeoapifyPlace) => 
        transformGeoapifyPlace(place)
      );

      setPlaces(transformedPlaces);
    } catch (err) {
      console.error('Error fetching places:', err);
      setError('Failed to fetch places');
      // Fallback data
      setPlaces([
        {
          id: '1',
          title: 'Santorini, Greece',
          description: 'Experience the stunning white architecture and breathtaking sunsets',
          image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80',
          price: 1200,
          rating: 4.8,
          location: 'Greece'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return { places, loading, error };
}
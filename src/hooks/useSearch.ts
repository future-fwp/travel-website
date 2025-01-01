import { useState, useCallback } from 'react';
import type { Place } from '../types/places';

export function useSearch() {
  const [query, setQuery] = useState('');

  const filterPlaces = useCallback((places: Place[]) => {
    if (!query.trim()) return places;
    
    return places.filter(place => 
      place.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return {
    query,
    setQuery,
    filterPlaces
  };
}
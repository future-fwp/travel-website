import { useEffect, useState } from 'react';

export function useSearchParams() {
  const [searchParams, setSearchParams] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearchParams({
      destination: params.get('destination') || '',
      checkIn: params.get('checkIn') || '',
      checkOut: params.get('checkOut') || '',
      guests: Number(params.get('guests')) || 1
    });
  }, []);

  const updateSearchParams = (newParams: Partial<typeof searchParams>) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, String(value));
      } else {
        params.delete(key);
      }
    });
    window.history.pushState({}, '', `?${params.toString()}`);
    setSearchParams(prev => ({ ...prev, ...newParams }));
  };

  return { searchParams, updateSearchParams };
}
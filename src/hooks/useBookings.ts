import { useState, useEffect } from 'react';
import type { Booking } from '../types/auth';

export function useBookings(userId: string | undefined) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    // Simulate API call
    const fetchBookings = async () => {
      try {
        // Mock data
        const mockBookings: Booking[] = [
          {
            id: '1',
            userId,
            placeId: '1',
            checkIn: '2024-03-20',
            checkOut: '2024-03-25',
            guests: 2,
            createdAt: new Date().toISOString()
          }
        ];
        setBookings(mockBookings);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [userId]);

  return { bookings, loading };
}
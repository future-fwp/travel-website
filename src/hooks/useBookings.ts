import { useState, useEffect } from 'react';
import type { Booking } from '../types/auth';

export function useBookings(userId: string | undefined) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setBookings([]);
      setLoading(false);
      return;
    }

    try {
      const storedBookings = localStorage.getItem('bookings');
      const allBookings: Booking[] = storedBookings ? JSON.parse(storedBookings) : [];
      const userBookings = allBookings.filter(booking => booking.userId === userId);
      setBookings(userBookings);
    } catch (error) {
      console.error('Error loading bookings:', error);
      setBookings([]);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  const addBooking = async (booking: Omit<Booking, 'id' | 'createdAt'>) => {
    try {
      const storedBookings = localStorage.getItem('bookings');
      const allBookings: Booking[] = storedBookings ? JSON.parse(storedBookings) : [];
      
      const newBooking: Booking = {
        ...booking,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString()
      };

      allBookings.push(newBooking);
      localStorage.setItem('bookings', JSON.stringify(allBookings));
      
      setBookings(prev => [...prev, newBooking]);
      return true;
    } catch (error) {
      console.error('Error adding booking:', error);
      return false;
    }
  };

  return { bookings, loading, addBooking };
}
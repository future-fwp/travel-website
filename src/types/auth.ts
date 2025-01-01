export interface User {
  id: string;
  username: string;
  email: string;
}

export interface Booking {
  id: string;
  userId: string;
  placeId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  createdAt: string;
}
export interface GeoapifyPlace {
  type: string;
  properties: {
    name: string;
    formatted: string;
    place_id: string;
    categories: string[];
    distance: number;
    lat: number;
    lon: number;
    address_line1: string;
    address_line2: string;
    city: string;
    country: string;
    rating?: number;
    image?: string;
  };
}

export interface Place {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  location: string;
}
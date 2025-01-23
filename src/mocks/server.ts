import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import { API_CONFIG } from '../config/api';

export const server = setupServer(
  http.get(`${API_CONFIG.GEOAPIFY_BASE_URL}`, () => {
    return HttpResponse.json({
      features: [
        {
          type: 'Feature',
          properties: {
            place_id: '1',
            name: 'Test Location',
            formatted: 'Test Description',
            city: 'Test City',
            country: 'Test Country',
            rating: 4.5
          }
        }
      ]
    });
  })
);
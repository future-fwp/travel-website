import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';
import type { Place } from '../types/places';

interface PlaceCardProps {
  place: Place;
}

export function PlaceCard({ place }: PlaceCardProps) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={place.image} 
          alt={place.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full px-3 py-1 flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {place.rating.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <MapPin className="w-5 h-5 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{place.title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{place.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">${place.price}</span>
          <motion.button 
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
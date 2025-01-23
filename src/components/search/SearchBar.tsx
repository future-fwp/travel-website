import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Users } from 'lucide-react';
import { useSearchParams } from '../../hooks/useSearchParams';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

export function SearchBar({ query, setQuery }: SearchBarProps) {
  const { searchParams, updateSearchParams } = useSearchParams();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSearchParams({ destination: query });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 md:p-6 max-w-4xl w-full mx-auto"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Where to?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="relative">
          <Calendar className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="date"
            value={searchParams.checkIn}
            onChange={(e) => updateSearchParams({ checkIn: e.target.value })}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="relative">
          <Calendar className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="date"
            value={searchParams.checkOut}
            onChange={(e) => updateSearchParams({ checkOut: e.target.value })}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="relative">
          <Users className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="number"
            min="1"
            value={searchParams.guests}
            onChange={(e) => updateSearchParams({ guests: Number(e.target.value) })}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      <motion.button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Search
      </motion.button>
    </motion.form>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeIn, scaleOnHover, infiniteBounce } from './animations';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <motion.div 
        className="relative z-20 text-center text-white px-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Explore the World</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Discover breathtaking destinations and create unforgettable memories with TravelCo
        </p>
        <motion.button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
          whileHover={scaleOnHover}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Journey
        </motion.button>
      </motion.div>
      <motion.a 
        href="#destinations" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={infiniteBounce}
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.a>
    </section>
  );
}
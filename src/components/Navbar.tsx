import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, LogOut } from 'lucide-react';
import { AuthModal } from './auth/AuthModal';
import { ThemeToggle } from './ThemeToggle';
import { useAuth } from '../hooks/useAuth';

export function Navbar() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <>
      <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Compass className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">TravelCo</span>
          </div>
          <ul className="hidden md:flex space-x-8">
            <li><a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#destinations" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Destinations</a></li>
            <li><a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-900 dark:text-white">
                  {user.username}
                </span>
                <motion.button
                  onClick={logout}
                  className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LogOut className="w-5 h-5" />
                </motion.button>
              </div>
            ) : (
              <>
                <motion.button
                  onClick={() => setIsSignInOpen(true)}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign In
                </motion.button>
                <motion.button
                  onClick={() => setIsSignUpOpen(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign Up
                </motion.button>
              </>
            )}
          </div>
        </nav>
      </header>

      <AuthModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        type="signin"
      />
      <AuthModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        type="signup"
      />
    </>
  );
}
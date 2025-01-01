import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { fadeIn } from '../animations';
import { LoginForm } from './LoginForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'signin' | 'signup';
}

export function AuthModal({ isOpen, onClose, type }: AuthModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            className="fixed inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md p-6 z-10"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              {type === 'signin' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <LoginForm onClose={onClose} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
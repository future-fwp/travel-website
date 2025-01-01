import { Transition } from 'framer-motion';

export const infiniteBounce = {
  y: [0, 10, 0],
  transition: { 
    repeat: Infinity, 
    duration: 1.5 
  }
};
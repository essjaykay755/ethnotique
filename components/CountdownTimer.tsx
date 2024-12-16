import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  timeLeft: TimeLeft;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ timeLeft }) => {
  return (
    <div className="grid grid-cols-4 gap-8 text-[#685147]">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <motion.div
            className="w-24 h-24 bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              <motion.span 
                key={value}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-4xl md:text-5xl font-light"
              >
                {value}
              </motion.span>
            </AnimatePresence>
          </motion.div>
          <span className="text-sm md:text-base capitalize font-light tracking-wider">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;


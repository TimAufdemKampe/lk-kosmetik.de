'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const texts = ['Lash Artist', 'Kosmetik Artist', 'Nail Artist'];

export const RoleSwitcher: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={texts[index]}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ duration: 0.5 }}
      >
        {texts[index]}
      </motion.div>
    </AnimatePresence>
  );
};

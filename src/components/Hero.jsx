import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div 
      key="home"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 text-center md:text-left mt-20"
    >
      <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-none tracking-tight">
        Engineering <br/>
        <span className="text-cyan-500">Excellence.</span>
      </h1>
      <p className="max-w-2xl text-gray-400 text-lg leading-relaxed font-sans">
        Recurrex is a collective of elite developers and engineers pushing the boundaries of 
        digital architecture. We turn complex logic into seamless experiences.
      </p>
      <div>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.5)]">
          Explore Our Work
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;

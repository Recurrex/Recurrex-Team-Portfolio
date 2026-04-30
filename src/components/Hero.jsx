import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';

const Hero = () => {
  return (
    <motion.div 
      key="home"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full min-h-[85vh] flex flex-col-reverse md:flex-row items-center justify-center md:justify-between pt-10"
    >
      {/* Geometric Background Accents */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-slate-900 skew-x-[-15deg] origin-bottom-right -z-10 hidden md:block border-l border-white/5" />
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-slate-900 -skew-y-6 origin-bottom-right -z-10 md:hidden border-t border-white/5" />

      {/* Left Side: Typography & Social Links */}
      <div className="w-full md:w-1/2 flex flex-col space-y-4 md:space-y-6 z-10 px-4 md:pl-12 text-center md:text-left mt-12 md:mt-0">
        <motion.p 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 font-mono tracking-widest uppercase"
        >
          Welcome to
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white uppercase italic leading-[0.85]"
        >
          RECURREX
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
          className="text-sm md:text-lg text-cyan-500 font-mono tracking-[0.2em] uppercase"
        >
          Engineering Excellence / Digital Architecture
        </motion.h2>

        {/* Social Icons Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="flex justify-center md:justify-start space-x-6 pt-6"
        >
          <a href="https://github.com/Recurrex" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-500 transition-colors transform hover:scale-110 duration-200">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/company/recurrexhq/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-500 transition-colors transform hover:scale-110 duration-200">
            <Linkedin size={28} />
          </a>
          <a href="https://www.instagram.com/recurrex?igsh=d2w1dHJmZTZxYzAw" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-500 transition-colors transform hover:scale-110 duration-200">
            <Instagram size={28} />
          </a>
          <a href="https://www.facebook.com/share/18FteFpjsC/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-500 transition-colors transform hover:scale-110 duration-200">
            <Facebook size={28} />
          </a>
        </motion.div>
      </div>

      {/* Right Side: Circular Logo */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
        className="w-full md:w-1/2 flex justify-center items-center z-10"
      >
        <div className="relative group cursor-pointer">
          {/* Animated Glow Ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
          
          {/* The Circular Logo Container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full border border-white/10 bg-slate-950 flex items-center justify-center shadow-2xl overflow-hidden p-4">
            
            <img 
              src="/recurrex-logo.png" 
              alt="Recurrex Logo" 
              className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
            />
            
            {/* Subtle inner gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
};

export default Hero;

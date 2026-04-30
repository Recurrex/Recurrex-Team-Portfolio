
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Crew from './components/Crew';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 overflow-x-hidden font-sans">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto min-h-screen flex flex-col items-start">
        <AnimatePresence mode="wait">
          {activeTab === 'Home' && <Hero />}
          {activeTab === 'Crew' && <Crew />}
          
          {/* Placeholder for missing tabs */}
          {['Projects', 'Achievements', 'About Us', 'Connect To Us'].includes(activeTab) && (
            <div 
              key="placeholder"
              className="w-full h-[50vh] flex items-center justify-center border-2 border-dashed border-white/10 rounded-3xl mt-10"
            >
              <p className="text-gray-500 uppercase tracking-[0.3em] font-mono">
                {activeTab} Module Loading...
              </p>
            </div>
          )}
        </AnimatePresence>
      </main>
      
      {/* Footer Ambient Light */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm" />
    </div>
  );
}

export default App;
  

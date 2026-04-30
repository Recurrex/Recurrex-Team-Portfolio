import React from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const tabs = ['Home', 'Crew', 'Projects', 'Achievements', 'About Us', 'Connect To Us'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10 px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-cyan-500">RECURREX</div>
        <div className="hidden md:flex space-x-6 text-xs font-mono uppercase tracking-widest">
          {tabs.map((tab) => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`transition-colors duration-300 ${
                activeTab === tab ? 'text-cyan-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

